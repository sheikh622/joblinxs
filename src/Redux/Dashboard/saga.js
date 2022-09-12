import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {logoutRequest} from "../auth/actions";
import { getSeekerListingSuccess,newArrivalSuccess ,topRatedSuccess,getCategoryListingSuccess,getJobFilterSuccess} from "./actions";
import { GET_SEEKER_LISTING,NEW_ARRIVAL,TOP_RATED,GET_CATEGORY,GET_JOB_FILTER } from "./constants";
function* getSeekerList({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/home/seeker/recommended?page=${payload.page}&count=${payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getSeekerListingSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetJob() {
  yield takeLatest(GET_SEEKER_LISTING, getSeekerList);
}

function* newArrivalSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/newArrival/${payload.userId}?page=${payload.page}&count=${payload.count}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(newArrivalSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchNewArrival() {
  yield takeLatest(NEW_ARRIVAL, newArrivalSaga);
}

function* topRatedSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/topRated/${payload.userId}?page=${payload.page}&count=${payload.count}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(topRatedSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchtopRated() {
  yield takeLatest(TOP_RATED, topRatedSaga);
}
function* getCategorySaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `category/user/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getCategoryListingSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY, getCategorySaga);
}
function* getFilterSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      // `job/filter?category=&rating=&hourlyRate=&latitude=&longitude=&distance=&page=1&count=10`,
      `job/filter?category=${payload.category}&rating=${payload.rating}&hourlyRate=${payload.hourlyRate}&latitude=${payload.latitude}&longitude=${payload.longitude}&distance=${payload.distance}&page=${payload.page}&count=${payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getJobFilterSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchJobFilter() {
  yield takeLatest(GET_JOB_FILTER, getFilterSaga);
}
export default function* SeekerManagementSaga() {
  yield all([fork(watchGetJob)]);
  yield all([fork(watchNewArrival)]);
  yield all([fork(watchtopRated)]);
  yield all([fork(watchGetCategory)]);
  yield all([fork(watchJobFilter)]);

}