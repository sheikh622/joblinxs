import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getUserNotificationSuccess,
  getONNotification,
  getONNotificationSuccess,
  getCardDetails,
  getCardDetailsSuccess,
} from "./actions";
import {
  GET_USER_NOTIFICATION,
  ON_NOTIFICATION,
  ADD_CARD_DETAILS,
  GET_CARD_DETAILS,
} from "./constants";
import images from "../../assets/img/noData.png";
import { CapitalizeFirstLetter } from "../../utils/Global";

function* NotificationSaga({ payload }) {
  try {
    const headers = {
      headers: { authorization: yield select(makeSelectAuthToken()) },
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`job/notification/${payload.userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(getUserNotificationSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* onNotificationSaga({ payload }) {
  try {
    let data = {
      userId: payload.userId,
      isShowNotification: payload.isShowNotification,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/isShowNotification`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
function* addCardSaga({ payload }) {
  try {
    let data = {
      source: payload.token,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`payment/addCard`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getCardDetails(payload.userId));
    payload.setShowModal(false)
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchAddCard() {
  yield takeLatest(ADD_CARD_DETAILS, addCardSaga);
}
function* getCardSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`payment/cardInfo/${payload}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(getCardDetailsSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetCard() {
  yield takeLatest(GET_CARD_DETAILS, getCardSaga);
}

export default function* PushNotificationSaga() {
  yield all([fork(watchGetNotification)]);
  yield all([fork(watchOnNotification)]);
  yield all([fork(watchAddCard)]);
  yield all([fork(watchGetCard)]);
}
