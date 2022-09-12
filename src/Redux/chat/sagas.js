import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {logoutRequest} from "../auth/actions";
import {
  getListSuccess,
  getList,
} from "./actions";
import {updateCustomOffer, sendMessage} from "../../pages/Chat/FirestoreMethods"
import {
  GET_LIST,
  SEND_MESSAGE,
  CUSTOM_OFFER_ACCEPT
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
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
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
      `chat/user`,payload.data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getList(payload.data.senderId));
   yield put(sendMessage(payload.message, payload.users, payload.currentUser, payload.customKey))
  } catch (error) {
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchSendMEssages() {
  yield takeLatest(SEND_MESSAGE, getSendMessages);
}

function* customOfferSaga({ payload }) {
  let data ={
    jobId:payload.jobId ?payload.jobId :"",
    userId: payload.userId,
    offeredRate:payload.jobOffer.offeredPrice,
    isAccepted: payload.isAccepted,
  }
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(
      `jobOffer`,data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(updateCustomOffer(payload?.id, payload.users, payload.jobOffer));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchCustomOffer() {
  yield takeLatest(CUSTOM_OFFER_ACCEPT, customOfferSaga);
}
export default function* NotificationSaga() {
  yield all([fork(watchGetList)]);
  yield all([fork(watchSendMEssages)]);
  yield all([fork(watchCustomOffer)]);
  
}
