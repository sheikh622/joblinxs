import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { getSeekerListingSuccess,newArrivalSuccess ,topRatedSuccess} from "./actions";
import { GET_SEEKER_LISTING,NEW_ARRIVAL,TOP_RATED } from "./constants";
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
  } catch (error) {
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
  } catch (error) {
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
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchtopRated() {
  yield takeLatest(TOP_RATED, topRatedSaga);
}

export default function* SeekerManagementSaga() {
  yield all([fork(watchGetJob)]);
  yield all([fork(watchNewArrival)]);
  yield all([fork(watchtopRated)]);
}