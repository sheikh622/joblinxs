import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { getSeekerListingSuccess,newArrivalProviderSuccess ,newArrivalSeekerSuccess} from "./actions";
import { GET_SEEKER_LISTING,NEW_ARRIVAL_PROVIDER,NEW_ARRIVAL_SEEKER } from "./constants";
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

function* newArrivalProviderSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/newArrivalProviders/?page=${payload.page}&count=${payload.count}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(newArrivalProviderSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchNewArrivalProvider() {
  yield takeLatest(NEW_ARRIVAL_PROVIDER, newArrivalProviderSaga);
}

function* topRatedProviderSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/topRatedProvider/?page=${payload.page}&count=${payload.count}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(newArrivalSeekerSuccess(response.data.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchNewArrivalSeeker() {
  yield takeLatest(NEW_ARRIVAL_SEEKER, topRatedProviderSaga);
}

export default function* SeekerManagementSaga() {
  yield all([fork(watchGetJob)]);
  yield all([fork(watchNewArrivalProvider)]);
  yield all([fork(watchNewArrivalSeeker)]);
}