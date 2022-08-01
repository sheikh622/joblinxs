import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { all, fork, put, takeLatest, select } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  loginRequestSuccess,
  resetPasswordSuccess,
  updatetPasswordSuccess,
} from "./actions";
import {
  FORGOT_PASSWORD,
  LOGIN,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
} from "./constants";

function* loginRequestSaga({ payload }) {
  let data = {
    email: payload.email,
    password: payload.password,
    webFcmToken: payload.webFcmToken,
  };
  try {
    const response = yield axios.post(`user/web/login`, data);
    localStorage.setItem("Token", response.data.data.access_token);
    toast.success("Login Successfully");
    yield put(loginRequestSuccess(response.data.data));
    let path =
      response.data.data.user.userRole == "Admin"
        ? "/user_management"
        : "/dashboard";
    payload.history.push(path);
    payload.resetForm();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, loginRequestSaga);
}
function* forgetRequestSaga({ payload }) {
  let data = {
    email: payload.email,
  };
  try {
    const response = yield axios.post(`/user/admin/forgot-password`, data);

    yield put(resetPasswordSuccess(response.data.reset_token));
    toast.success("Email sent successfully");
    yield put(push("/forget-password"));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchForget() {
  yield takeLatest(FORGOT_PASSWORD, forgetRequestSaga);
}
function* resetRequestSaga({ payload }) {
  let data = {
    password: payload.confirmPassword,
    token: payload.token,
  };
  try {
    const response = yield axios.post(`/user/admin/reset-password`, data);

    toast.success("Password Reset Successfully");
    // toast.success("Password is old.Kindly enter new password ");
    payload.history.push("/");
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchReset() {
  yield takeLatest(RESET_PASSWORD, resetRequestSaga);
}

function* updatePasswordSaga({ payload }) {
  const token = yield select(makeSelectAuthToken());
  let data = {
    email: payload.email,
    oldPassword: payload.currentpassword,
    newPassword: payload.newpassword,
  };
  try {
    const response = yield axios.post(`user/update-password`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    // yield put(updatetPasswordSuccess(response.data.data));
    payload.setShowDefault(false);
    payload.reset();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchUpdatePassword() {
  yield takeLatest(UPDATE_PASSWORD, updatePasswordSaga);
}

export default function* AuthSaga() {
  yield all([
    fork(watchLogin),
    fork(watchForget),
    fork(watchReset),
    fork(watchUpdatePassword),
  ]);
}
