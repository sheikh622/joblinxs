import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { getAdminUsersSuccess, getAdminChartSuccess } from "./actions";
import { getList } from "../chat/actions";
import { loginRequestSuccess } from "../auth/actions";
import { GET_ADMIN_USERS, GET_ADMIN_CHARTS } from "./constants";
// import { CapitalizeFirstLetter } from "../../utils/Global";
import { logoutRequest } from "../auth/actions";

function* getAdminUser({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`user/admin/user-count/show`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // payload.setLoader(false);
    yield put(getAdminUsersSuccess(response.data.message));

  } catch (error) {
    if (error?.response?.status === 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);

  }
}
function* watchGetAdminUsers() {
  yield takeLatest(GET_ADMIN_USERS, getAdminUser);
}
function* getAdminChart({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`user/admin/month-count/show`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // payload.setLoader(false);
    yield put(getAdminChartSuccess(response.data));

  } catch (error) {
    if (error?.response?.status === 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetAdminCharts() {
  yield takeLatest(GET_ADMIN_CHARTS, getAdminChart);
}

export default function* DashBoardUsersSaga() {
  yield all([fork(watchGetAdminUsers)]);
  yield all([fork(watchGetAdminCharts)]);

}
