import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {logoutRequest} from "../auth/actions";
import {
  getDisputeList, getDisputeListSuccess, getReportBlockSuccess, getReportBlock
} from "./actions";
import {
  GET_REPORT_BLOCK,
  GET_DISPUTE_LIST
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
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}

// function* reportBlockSaga({ payload }) {
//   try {
//     const token = yield select(makeSelectAuthToken());
//     const response = yield axios.get(
//       `/user/admin/change-userStatus/${payload.userId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     toast.success(CapitalizeFirstLetter(response.data.message));
//     yield put(
//       getReportList({
//         page: payload.page,
//         limit: payload.limit,
//       })
//     );
//     yield put(getReportBlockSuccess());
//   } catch (error) {
//     yield sagaErrorHandler(error.response);
//   }
// }
function* watchGetReport() {
  yield takeLatest(GET_DISPUTE_LIST, DisputeListRequest);
}
// function* watchReportBlock() {
//   yield takeLatest(GET_REPORT_BLOCK, reportBlockSaga);
// }


export default function* DisputeSaga() {
  yield all([fork(watchGetReport)]);
  // yield all([fork(watchReportBlock)]);

}
