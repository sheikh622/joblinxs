import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { getProfileSuccess, blockUserSuccess, reportListSuccess, reportedUserSuccess, unblockUserSuccess, hiredApplicantSuccess, getReviewsSuccess } from "./actions";
import { getList } from "../chat/actions";
import { loginRequestSuccess } from "../auth/actions";
import { GET_PROFILE, UPDATE_PROFILE, BLOCK_USER, REPORT_USER_LIST, REPORTED_USER, UNBLOCK_USER, HIRED_APPLICANTS, GET_REVIEWS } from "./constants";
// import { CapitalizeFirstLetter } from "../../utils/Global";
import { adminUpdatedSuccess } from "../auth/actions";

function* getProfileById({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`profile/${payload.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // payload.setLoader(false);
    yield put(getProfileSuccess(response.data.data.user));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetProfile() {
  yield takeLatest(GET_PROFILE, getProfileById);
}
function* updateAdminProfileSaga({ payload }) {
  let Data = new FormData();
  Data.append("fullName", payload.fullName);
  Data.append("address", payload.address);
  Data.append("dateofBirth", payload.dateofBirth);
  Data.append("phoneNumber", payload.phoneNumber);
  Data.append("city", payload.city);
  Data.append("postalCode", payload.postalCode);
  Data.append("id", payload.id);
  Data.append("profileImg", payload.profileImg);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(`profile/update`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    payload.history.push("/profile");

    yield put(getProfileSuccess(response.data.data.user));

    yield put(adminUpdatedSuccess(response.data.data.user));
    payload.setLoader(false);

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchUpdateAdminProfile() {
  yield takeLatest(UPDATE_PROFILE, updateAdminProfileSaga);
}
function* BlockUserSaga({ payload }) {
  try {
    let data = {
      blockedTo: payload.blockedTo,
      blockedBy: payload.blockedBy,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`blocked-user`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(
      getList(payload.blockedBy));
    payload.setBlockUserSaga(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchBlockUser() {
  yield takeLatest(BLOCK_USER, BlockUserSaga);
}
function* UnblockUserSaga({ payload }) {
  try {
    let data = {
      blockedTo: payload.blockedTo,
      blockedBy: payload.blockedBy,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`blocked-user/unblock`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(
      getList(payload.blockedBy));
    payload.setBlockUserSaga(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchUnBlockUser() {
  yield takeLatest(UNBLOCK_USER, UnblockUserSaga);
}
function* getReportUser({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`reported-user/reports`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(reportListSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchReportUser() {
  yield takeLatest(REPORT_USER_LIST, getReportUser);
}
function* reportedSaga({ payload }) {
  try {
    let data = {
      reportedTo: payload.reportedTo,
      reportedBy: payload.reportedBy,
      description: payload.description,
      reportId: payload.reportId,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`reported-user/reports`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(reportedUserSuccess(response.data.data.user));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchReported() {
  yield takeLatest(REPORTED_USER, reportedSaga);
}
function* hiredJobSaga({ payload }) {
  try {
    let data = {
      job: payload.job,
      seekerId: payload.seekerId,
      providerId: payload.providerId,

    };

    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(
      `job/hiredbyseeker`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response.data.message);
    yield put(hiredApplicantSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchHiredJob() {
  yield takeLatest(HIRED_APPLICANTS, hiredJobSaga);
}
function* getReviewsById({ payload }) {
  try {

    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`job/user/Reviews/${payload.userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // payload.setLoader(false);
    yield put(getReviewsSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetReviews() {
  yield takeLatest(GET_REVIEWS, getReviewsById);
}
export default function* ProfileSaga() {
  yield all([fork(watchGetProfile)]);
  yield all([fork(watchBlockUser)]);
  yield all([fork(watchUnBlockUser)]);
  yield all([fork(watchUpdateAdminProfile)]);
  yield all([fork(watchReportUser)]);
  yield all([fork(watchReported)]);
  yield all([fork(watchHiredJob)]);
  yield all([fork(watchGetReviews)]);

}
