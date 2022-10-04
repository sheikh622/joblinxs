import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { logoutRequest } from "../auth/actions";
import {
  getListSuccess,
  getList,
  getTokenSuccess,
  getMeetingSuccess
} from "./actions";
import { updateCustomOffer, sendMessage } from "../../pages/Chat/FirestoreMethods"
import {
  GET_LIST,
  SEND_MESSAGE,
  CUSTOM_OFFER_ACCEPT,
  GENERATE_TOKEN,
  ZOOM_MEETING
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
    if (error?.response?.status == 401) {
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
      `chat/user`, payload.data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getList(payload.data.senderId));
    yield put(sendMessage(payload.message, payload.users, payload.currentUser, payload.customKey, payload.zoom))
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchSendMEssages() {
  yield takeLatest(SEND_MESSAGE, getSendMessages);
}

function* customOfferSaga({ payload }) {
  let data = {
    jobId: payload.jobId ? payload.jobId : "",
    userId: payload.userId,
    offeredRate: payload.jobOffer.offeredPrice,
    isAccepted: payload.isAccepted,
  }
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(
      `jobOffer`, data,
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
function* generateToken({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(
      `profile/zoomToken`,
      {
        headers: {
          "Authorization": 'Basic dEk0X3RCcWdUMmV2dWcwRGJ6Slprdzp4eHY0WmdDMDMzVHV5Nk4wckd0c2RHVHE5emhQSGlpNw==',
        },
      }
    );
    yield put(getTokenSuccess(response.data.data));
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetToken() {
  yield takeLatest(GENERATE_TOKEN, generateToken);
}
function* getMeeting({ payload }) {
  let data = {
    access_token: payload.access_token,
    agenda: payload.agenda,
  }
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(
      `profile/zoomMetting`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getMeetingSuccess(response.data.data));
    // payload.setZoom(true);
    payload.setZoomUrl(response.data?.data?.join_url);
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetMeeting() {
  yield takeLatest(ZOOM_MEETING, getMeeting);
}
export default function* NotificationSaga() {
  yield all([fork(watchGetList)]);
  yield all([fork(watchSendMEssages)]);
  yield all([fork(watchCustomOffer)]);
  yield all([fork(watchGetToken)]);
  yield all([fork(watchGetMeeting)]);


}
