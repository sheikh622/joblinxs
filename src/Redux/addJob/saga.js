import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getJobs,
  getAddJob,
  favouriteJobList,
  getJobListingSuccess,
  getJobsSuccess,
  favouriteJobListSuccess,
  deleteAddJob,
  jobByIdSuccess,
  updateJobSuccess,
  getJobListing,
  getApplicantsSuccess,
  getConfirmSuccess,
  getHiredApplicantsSuccess,
} from "./actions";
import {
  ADD_JOB,
  ADD_JOB_SUCCESS,
  GET_JOB,
  FAVOURITE_JOB_LIST,
  DELETE_ADD_JOB,
  MARK_AS_FAVOURITE_JOB,
  JOB_BY_ID_SUCCESS,
  JOB_BY_ID,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB,
  GET_JOB_APPLICANTS,
  GET_HIRED_APPLICANTS,
  GET_HIRED_APPLICANTS_SUCCESS,
  CONFIRM_APPLICANTS,
  RATE_PROVIDER,
  COMPLETE_JOB,
  GET_APPLICANTS_BYUSERID
} from "./constants";
import { CapitalizeFirstLetter } from "../../utils/Global";
function* addJob({ payload }) {
  const formData = new FormData();
  formData.append("id", payload.id);
  formData.append("name", payload.name);
  formData.append("description", payload.description);
  formData.append("requirement", payload.requirement);
  formData.append("paymentType", payload.paymentType);
  formData.append("rate", payload.rate);
  formData.append("hours", payload.hours);
  formData.append("days", payload.days);
  formData.append("location", JSON.stringify([payload.location]));
  formData.append("noOfProviders", payload.noOfProviders);
  formData.append("toolsNeeded", payload.toolsNeeded);
  formData.append("experienceRequired", payload.experienceRequired);
  formData.append("jobType", payload.jobType);
  formData.append("jobNature", payload.jobNature);
  formData.append("startDate", JSON.stringify(payload.startDate));
  formData.append("endDate", JSON.stringify(payload.endDate));
  formData.append("isOngoing", payload.isOngoing);
  formData.append("category", JSON.stringify(payload.category));
  formData.append("jobImg", payload.jobImg);
  formData.append("isEmergency", payload.isEmergency);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/seeker`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getJobListingSuccess(response.data.data));
    payload.history.push("/job");
    payload.setReset();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchAddJob() {
  yield takeLatest(ADD_JOB, addJob);
}
function* getJobList({ payload }) {
  let category = payload.category === undefined ? "" : payload.category;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/seeker/${payload.userId}?page=${payload.page}&count=${payload.limit}&status=${payload.type}&category=${category}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getJobsSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetJob() {
  yield takeLatest(GET_JOB, getJobList);
}
function* getFavoutiteJobList({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/favorite?page=${payload.page}&count=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(favouriteJobListSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetFavouriteJob() {
  yield takeLatest(FAVOURITE_JOB_LIST, getFavoutiteJobList);
}
function* deleteJobSaga({ payload }) {
  let { adminId } = payload;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.delete(`job/seeker/${payload.jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setShowDefault(false);
    payload.history.push("/job");
    const filteredData = payload.data.filter(
      (item, index) => item.jobId !== payload.jobId
    );
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchDeleteAddJob() {
  yield takeLatest(DELETE_ADD_JOB, deleteJobSaga);
}
function* markAsFavouriteJobSaga({ payload }) {
  // let listData = {
  //   page: payload.page === undefined ? 1 : payload.page,
  // };
  try {
    const token = yield select(makeSelectAuthToken());
    const datas = {
      helo: "heloo",
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield axios.patch(
      `job/favorite/${payload.id}`,
      datas,
      headers
    );
    // yield put(favouriteJobListSuccess(response.data.data.jobs));
    toast.success(CapitalizeFirstLetter(response.data.message));
    // yield put(getJobs(data));
    // yield put(favouriteJobList(listData))
    payload.history.go(0);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchMarkAsFavouriteJob() {
  yield takeLatest(MARK_AS_FAVOURITE_JOB, markAsFavouriteJobSaga);
}
function* jobByIdSaga(payload) {
  const { id } = payload.payload;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`job/getJob/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(jobByIdSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchJobById() {
  yield takeLatest(JOB_BY_ID, jobByIdSaga);
}
function* updateJobSaga(payload) {
  const formData = new FormData();
  formData.append("id", payload.payload.id);
  formData.append("name", payload.payload.name);
  formData.append("description", payload.payload.description);
  formData.append("requirement", payload.payload.requirement);
  formData.append("paymentType", payload.payload.paymentType);
  formData.append("rate", payload.payload.rate);
  formData.append("hours", payload.payload.hours);
  formData.append("days", payload.payload.days);
  formData.append("location", JSON.stringify([payload.payload.location]));
  formData.append("noOfProviders", payload.payload.noOfProviders);
  formData.append("toolsNeeded", payload.payload.toolsNeeded);
  formData.append("experienceRequired", payload.payload.experienceRequired);
  formData.append("jobType", payload.payload.jobType);
  formData.append("jobNature", payload.payload.jobNature);
  formData.append("startDate", JSON.stringify(payload.payload.startDate));
  formData.append("endDate", JSON.stringify(payload.payload.endDate));
  formData.append("isOngoing", payload.payload.isOngoing);
  formData.append("category", JSON.stringify(payload.payload.category));
  formData.append("jobImg", payload.payload.jobImg);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `job/seeker/${payload.payload.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(updateJobSuccess(response.data));
    payload.history.push(`/detailJob/${payload.id}`);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchUpdateJob() {
  yield takeLatest(UPDATE_JOB, updateJobSaga);
}
function* getApplicants(payload) {
  try {
    const { id } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/applicants/${id}?page=${payload.payload.page}&count=${payload.payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getApplicantsSuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetApplicants() {
  yield takeLatest(GET_JOB_APPLICANTS, getApplicants);
}
function* gethiredApplicantsSaga(payload) {
  try {
    const { id } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/hiredApplicants/${id}?page=${payload.payload.page}&count=${payload.payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getHiredApplicantsSuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetHiredApplicants() {
  yield takeLatest(GET_HIRED_APPLICANTS, gethiredApplicantsSaga);
}
function* ConfirmSaga(payload) {
  try {
    let data = {
      isAccepted: payload.payload.isAccepted,
    };
    const { id } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/approve/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getConfirmSuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchConfirmApplicants() {
  yield takeLatest(CONFIRM_APPLICANTS, ConfirmSaga);
}

function* RateJobSaga({ payload }) {
  try {
    let Data = {
      description: payload.description,
      rating: payload.rating,
      jobId: payload.jobId,
      userId: payload.userId,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/rating`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setShow(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchRateJob() {
  yield takeLatest(RATE_PROVIDER, RateJobSaga);
}

function* CompletejobSaga({ payload }) {
  try {
    let Data = {
      jobId: payload.jobId,
      userId: payload.userId,
      isCompleted: payload.isCompleted,
      isDisputed: payload.isDisputed,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/confirmBySeeker`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchCompleteJob() {
  yield takeLatest(COMPLETE_JOB, CompletejobSaga);
}

function* getApplicantsByUserId(payload) {
  try {
    const { id,usersId, page, limit } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/getLogHours/${id}/${usersId}?page=${page}&count=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getApplicantsSuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetApplicantsByUserId() {
  yield takeLatest(GET_APPLICANTS_BYUSERID, getApplicantsByUserId);
}
export default function* addJobSaga() {
  yield all([fork(watchAddJob)]);
  yield all([fork(watchGetJob)]);
  yield all([fork(watchGetFavouriteJob)]);
  yield all([fork(watchDeleteAddJob)]);
  yield all([fork(watchMarkAsFavouriteJob)]);
  yield all([fork(watchJobById)]);
  yield all([fork(watchUpdateJob)]);
  yield all([fork(watchGetApplicants)]);
  yield all([fork(watchConfirmApplicants)]);
  yield all([fork(watchRateJob)]);
  yield all([fork(watchGetHiredApplicants)]);
  yield all([fork(watchCompleteJob)]);
  yield all([fork(watchGetApplicantsByUserId)]);
}
