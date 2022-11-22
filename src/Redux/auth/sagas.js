import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  loginRequestSuccess,
  resetPasswordSuccess,
  logoutRequest,
  logoutRequestSuccess,
} from "./actions";
import {
  FORGOT_PASSWORD,
  LOGIN, LOGIN_FACEBOOK,
  LOGIN_GOOGLE, RESET_PASSWORD,
  UPDATE_PASSWORD, LOGOUT,
} from "./constants";

function* loginRequestSaga({ payload }) {
  let data = {
    email: payload.email,
    password: payload.password,
    webFcmToken: payload.webFcmToken,
  };
  try {
    const response = yield axios.post(`user/web/login`, data);

    console.log("isCompleteProfile", response.data.data)
    if (response.data.data.user.isCompleteProfile) {
      localStorage.setItem("Token", response.data.data.access_token);
      toast.success("Login Successfully");
      yield put(loginRequestSuccess(response.data.data));
      payload.setLoader(false);
      let path =
        response.data.data.user.role.name == "Admin"
          ? "/adminDashBoard"
          : "/dashboard";
      payload.history.push(path);
    } else {
      toast.error("Please complete your profile to login.")
    }
    payload.resetForm();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, loginRequestSaga);
}
function* logoutRequestSaga({ payload }) {

  let {user} = payload;
  try {
    if(user.role.name !== "Admin"){
      const response = yield axios.post(`user/logout/${user.id}`);
    }
    yield put(logoutRequestSuccess());
    toast.success("Logout Successfullyssss")
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchLogout() {
  yield takeLatest(LOGOUT, logoutRequestSaga);
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
    payload.setLoader(false);
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
    payload.setLoader(false);

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
    payload.setLoader(false);
    toast.success(response.data.message);
    // yield put(updatetPasswordSuccess(response.data.data));
    // payload.setShowDefault(false);
    payload.reset();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchUpdatePassword() {
  yield takeLatest(UPDATE_PASSWORD, updatePasswordSaga);
}


function* LoginFacebookSaga({ payload }) {
  const token = yield select(makeSelectAuthToken());
  let data = {
    email: payload.email,
    web: true,
  };
  try {
    const response = yield axios.post(`facebook-authentication`, data);

    if (response.data.data.user.isCompleteProfile) {
      localStorage.setItem("Token", response.data.data.access_token);
      toast.success(response.data.message);
      // payload.setLoader(false);
      yield put(loginRequestSuccess(response.data.data));
      // payload.setLoader(false);
      let path =
        response.data.data.user.userRole == "Admin"
          ? "/adminDashBoard"
          : "/dashboard";
      payload.history.push(path);
    } else {
      toast.error("Please complete your profile to login.")
    }
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchFacebookLogin() {
  yield takeLatest(LOGIN_FACEBOOK, LoginFacebookSaga);
}

function* LogingoogleSaga({ payload }) {
  let data = {
    token: payload.token,
    web: true,
  }
  try {
    const response = yield axios.post(`google-authentication`, data);

    if (response.data.data.user.isCompleteProfile) {
      localStorage.setItem("Token", response.data.data.access_token);
      toast.success(response.data.message);
      // payload.setLoader(false);
      yield put(loginRequestSuccess(response.data.data));
      // payload.setLoader(false);
      let path =
        response.data.data.user.userRole == "Admin"
          ? "/adminDashBoard"
          : "/dashboard";
      payload.history.push(path);
    } else {
      toast.error("Please complete your profile to login.")
    }

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchGoogleLogin() {
  yield takeLatest(LOGIN_GOOGLE, LogingoogleSaga);
}
export default function* AuthSaga() {
  yield all([
    fork(watchLogin),
    fork(watchForget),
    fork(watchReset),
    fork(watchUpdatePassword),
    fork(watchFacebookLogin),
    fork(watchGoogleLogin),
    fork(watchLogout),

  ]);
}
