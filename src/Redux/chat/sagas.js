import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getListSuccess,
  getList
} from "./actions";
import {
  GET_LIST,
  SEND_MESSAGE,
} from "./constants";

function* getListById({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `chat/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getListSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetList() {
  yield takeLatest(GET_LIST, getListById);
}

function* getSendMessages({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(
      `chat/user`,payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getList(payload.senderId));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchSendMEssages() {
  yield takeLatest(SEND_MESSAGE, getSendMessages);
}
export default function* NotificationSaga() {
  yield all([fork(watchGetList)]);
  yield all([fork(watchSendMEssages)]);
}
