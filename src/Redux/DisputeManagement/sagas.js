import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { logoutRequest } from "../auth/actions";
import {
  getDisputeList, getDisputeListSuccess, getDisputeBlockSuccess, getDisputeBlock, DisputeReasonSuccess, addDisputeSuccess
} from "./actions";
import {
  GET_DISPUTE_BLOCK,
  GET_DISPUTE_LIST,
  DISPUTE_REASON,
  ADD_DISPUTE,
} from "./constants";
import images from "../../assets/img/noData.png";
import { CapitalizeFirstLetter } from "../../utils/Global";

function* DisputeListRequest({ payload }) {
  try {
    const headers = {
      headers: { authorization: yield select(makeSelectAuthToken()) },
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `disputed-user/disputedJobList?page=${payload.page}&count=${payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    payload.setLoader(false);
    yield put(getDisputeListSuccess(response.data.data));
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetReport() {
  yield takeLatest(GET_DISPUTE_LIST, DisputeListRequest);
}
function* DisputeReason({ payload }) {
  try {
    const headers = {
      headers: { authorization: yield select(makeSelectAuthToken()) },
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `disputed-user/Reasons`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // payload.setLoader(false);  
    yield put(DisputeReasonSuccess(response.data));
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchReasonDispute() {
  yield takeLatest(DISPUTE_REASON, DisputeReason);
}
function* AddDispute({ payload }) {
  try {
    const headers = {
      headers: { authorization: yield select(makeSelectAuthToken()) },
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `disputed-user/disputedJob`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    payload.setLoader(false);
    yield put(addDisputeSuccess(response.data.data));
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchAddDispute() {
  yield takeLatest(ADD_DISPUTE, AddDispute);
}
function* disputeBlockSaga({ payload }) {
  let data = {
    jobId: payload.jobId,
    isAccepted: payload.isAccepted,
    seekerId: payload.seekerId,
    logHourId: payload.logHourId,
    providerId: payload.providerId,
  }
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `disputed-user/disputed-Action`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getDisputeBlockSuccess());
    yield put(
      getDisputeList({
        page: payload.page,
        limit: payload.limit,
      })
    );
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchDisputeBlock() {
  yield takeLatest(GET_DISPUTE_BLOCK, disputeBlockSaga);
}


export default function* DisputeSaga() {
  yield all([fork(watchGetReport)]);
  yield all([fork(watchReasonDispute)]);
  yield all([fork(watchAddDispute)]);
  yield all([fork(watchDisputeBlock)]);

}
