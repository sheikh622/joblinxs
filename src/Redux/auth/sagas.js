import axios from "../../Routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  loginRequestSuccess,
  resetPasswordSuccess,
  setLoader,
  registerSuccess,
} from "./actions";
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, REGISTER } from "./constants";
import { sagaErrorHandler } from "../../Shared/shared";
import { toast } from "react-toastify";


function* loginRequestSaga({ payload }) {
  let data = {
    email: payload.email,
    password: payload.password,
  };
  try {
    const response = yield axios.post(`user/login`, data);
    console.log("respoonse===00000000000000",response.data.data)
  
    // toast.success("Login Successfully");
    yield put(loginRequestSuccess(response.data.data));
    // yield put(setLoader(false));
    // yield put(push("/dashboard"));
    payload.history.push("/dashboard");
console.log("history",payload.history)

  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
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
    
    yield sagaErrorHandler(error.response.data);
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
    toast.success("Password is old.Kindly enter new password ");  
    yield put(push("/signin"));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchReset() {
  yield takeLatest(RESET_PASSWORD, resetRequestSaga);
}
export default function* AuthSaga() {
  yield all([fork(watchLogin), fork(watchForget), fork(watchReset)]);
}
