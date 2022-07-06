import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
// import {getJobListing, getJobListingSuccess,} from "./actions";
import {
  getCategoryJobSuccess,
  getJobListing, getJobListingSuccess,
  getJobProfileSuccess,

} from "./actions";
import {
  GET_JOB_LISTING, GET_JOB_PROFILE, DELETE_JOB, GET_CATEGORY_JOB
} from "./constants";
import { CapitalizeFirstLetter } from "../../utils/Global";


function* getJobList({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/admin/?page=${payload.page}&count=${payload.limit}&status=&search=${payload.search}&type=${payload.type}&category=${payload.category}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getJobListingSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetJob() {
  yield takeLatest(GET_JOB_LISTING, getJobList);
}
function* getProfileList({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/admin/approve-request/${payload.jobId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    // yield put(getJobProfileSuccess(response.data.data));
    yield put(
      getJobListing({
        page: payload.page,
        limit: payload.limit,
        type: payload.type,
        search: payload.search,
        category: payload.category,
      })
    );
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetProfile() {
  yield takeLatest(GET_JOB_PROFILE, getProfileList);
}
function* deleteJob({ payload }) {
  let { adminId } = payload;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.delete(`job/admin/${payload.jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(CapitalizeFirstLetter(response.data.message));
    const filteredData = payload.data.filter((item, index) => item.jobId !== payload.jobId);
    yield put(getJobListingSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchDeleteJob() {
  yield takeLatest(DELETE_JOB, deleteJob);
}
// function* getCategoryJob({ payload }) {
//   try {
//     const token = yield select(makeSelectAuthToken());
//     const response = yield axios.get(
//       `job/admin/category-based?page=${payload.page}&count=${payload.limit}&category=${payload.category}&search=${payload.search}&type=${""}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     yield put(getJobListingSuccess(response.data.data));
//   } catch (error) {
//     yield sagaErrorHandler(error.response);
//   }
// }
// function* watchGetCategory() {
//   yield takeLatest(GET_CATEGORY_JOB, getCategoryJob);
// }
export default function* JobManagementSaga() {
  yield all([fork(watchGetJob)]);
  yield all([fork(watchGetProfile)]);
  yield all([fork(watchDeleteJob)]);
  // yield all([fork(watchGetCategory)]);

}
