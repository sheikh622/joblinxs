import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getNotifiactionSuccess,
} from "./actions";
import {
  GET_NOTIFICATION
} from "./constants";

function* getNotificationById({ payload }) {
  try {
    payload.setLoader(true);
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/notification/${payload.id}?page=1&count=20`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    payload.setLoader(false);
    yield put(getNotifiactionSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetNotification() {
  yield takeLatest(GET_NOTIFICATION, getNotificationById);
}
export default function* NotificationSaga() {
  yield all([fork(watchGetNotification)]);
}
