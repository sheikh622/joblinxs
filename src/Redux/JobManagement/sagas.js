import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getCategoryJobSuccess,
  getJobListing,
  getJobListingSuccess,
  getJobProfileSuccess,
} from "./actions";
import {
  GET_JOB_LISTING,
  GET_JOB_PROFILE,
  DELETE_JOB,
  GET_CATEGORY_JOB,
  ACTION_JOB,
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

function* deleteJob({ payload }) {
  let { adminId } = payload;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.delete(`job/admin/${payload.jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = {
      page: payload.page,
      limit: payload.limit,
      type: payload.type,
      search: payload.search,
      category: payload.category,
    };
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getJobListing(data));
    yield put(getJobListingSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchDeleteJob() {
  yield takeLatest(DELETE_JOB, deleteJob);
}
function* changeJobStatusSaga({ payload }) {
  try {
    let data = {
      id: payload.id,
      isApproved: payload.isApproved,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/admin/approve-request`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(
      getJobListing({
        page: payload.page,
        limit: payload.limit,
        type: payload.type,
        search: payload.search,
        category: payload.category,
      })
    );
    yield put(getJobListingSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchchangeJobStatus() {
  yield takeLatest(ACTION_JOB, changeJobStatusSaga);
}
export default function* JobManagementSaga() {
  yield all([fork(watchGetJob)]);
  yield all([fork(watchDeleteJob)]);
  yield all([fork(watchchangeJobStatus)]);
}
