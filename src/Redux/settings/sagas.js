import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
getUserNotificationSuccess,getONNotification, getONNotificationSuccess
} from "./actions";
import {
  GET_USER_NOTIFICATION,ON_NOTIFICATION
} from "./constants";
import images from "../../assets/img/noData.png";
import { CapitalizeFirstLetter } from "../../utils/Global";

function* NotificationSaga({ payload }) {
  try {
    const headers = {
      headers: { authorization: yield select(makeSelectAuthToken()) },
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/notification/${payload.userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getUserNotificationSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* onNotificationSaga({ payload }) {
  try {
    let data = {
      userId: payload.login?.id,
      isShowNotification: payload.isShowNotification,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(
      `job/isShowNotification`,data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getONNotificationSuccess());
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetNotification() {
  yield takeLatest(GET_USER_NOTIFICATION, NotificationSaga);
}
function* watchOnNotification() {
  yield takeLatest(ON_NOTIFICATION, onNotificationSaga);
}


export default function* PushNotificationSaga() {
  yield all([fork(watchGetNotification)]);
  yield all([fork(watchOnNotification)]);

}
