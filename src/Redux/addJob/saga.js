import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getAddJob, getJobListingSuccess, getJobsSuccess
} from "./actions";
import {
  ADD_JOB, ADD_JOB_SUCCESS, GET_JOB
} from "./constants";
import { CapitalizeFirstLetter } from "../../utils/Global";
function* addJob({ payload }) {

  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('description', payload.description);
  formData.append('requirement', payload.requirement);
  formData.append('paymentType', payload.paymentType);
  formData.append('rate', payload.rate);
  formData.append('hours', payload.hours);
  formData.append('days', payload.days);
  formData.append('location', JSON.stringify([payload.location]));
  formData.append('noOfProviders', payload.noOfProviders);
  formData.append('toolsNeeded', payload.toolsNeeded);
  formData.append('experienceRequired', payload.experienceRequired);
  formData.append('jobType', payload.jobType);
  formData.append('jobNature', payload.jobNature);
  formData.append('category', JSON.stringify(payload.category));
  formData.append('jobImg', payload.jobImg);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/seeker`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    payload.setReset();
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setShowDefaults(true);
    payload.setSelectedImage("");
    yield put(getJobListingSuccess(response.data.data));

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchAddJob() {
  yield takeLatest(ADD_JOB, addJob);
}
function* getJobList({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/seeker/${payload.userId}?page=${payload.page}&count=${payload.limit}&status=${payload.type}&category=${payload.category}`,
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
export default function* addJobSaga() {
  yield all([fork(watchAddJob)]);
  yield all([fork(watchGetJob)]);

}
