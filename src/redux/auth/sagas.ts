import axios from "../../routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  loginRequestSuccess,
  resetPasswordSuccess,
  setLoader,
  registerSuccess,
} from "./actions";
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, REGISTER } from "./constants";
import { sagaErrorHandler } from "../../shared/helperMethods/sagaErrorHandler";
import { toast } from "react-toastify";


function* loginRequestSaga({ payload }: any): any {
 
  let data = {
    email: payload.email,
    password: payload.password,
  };
  try {
    const response = yield axios.post(`user/login`, data);
  
    yield put(push("/dashboard"));
    toast.success("Login Successfully");
    yield put(loginRequestSuccess(response.data.data));
    yield put(setLoader(false));

    
  } catch (error: any) {
 
    yield sagaErrorHandler(error.response.data);
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, loginRequestSaga);
}
function* forgetRequestSaga({ payload }: any): any {
  let data = {
    email: payload.email,
  };
  try {
    const response = yield axios.post(`/user/admin/forgot-password`, data);
  
    yield put(resetPasswordSuccess(response.data.reset_token));
    yield put(push("/forget-password"));
  } catch (error: any) {
    
    yield sagaErrorHandler(error.response.data);
  }
}
function* watchForget() {
  yield takeLatest(FORGOT_PASSWORD, forgetRequestSaga);
}
function* resetRequestSaga({ payload }: any): any {

  let data = {
    password: payload.confirmPassword,
    token: payload.token,
  };
  try {
    const response = yield axios.post(`/user/admin/reset-password`, data);
  
    toast.success("Password reset Successfully");
    yield put(push("/signin"));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchReset() {
  yield takeLatest(RESET_PASSWORD, resetRequestSaga);
}

// function* registerRequestSaga({ payload }: any): any {

//   let data = {
//     BusinessName:payload.BusinessName,
//     Description:payload.Description,
//     Preference:payload.Preference,
//     name:payload.name,
//     email: payload.email,
//     phone:payload.phone,
//     password: payload.password,
//   };
//   try {
//     const response = yield axios.post(`/auth/login`, data);
//     toast.success("Login Successfully");
//     yield put(registerSuccess(response.data));
//     yield put(setLoader(false));
//   } catch (error: any) {
//     yield sagaErrorHandler(error.response);
//   }
// }
// function* watchRegister() {
//   yield takeLatest(REGISTER, registerRequestSaga);
// }
export default function* AuthSaga() {
  yield all([fork(watchLogin), fork(watchForget), fork(watchReset)]);
}
