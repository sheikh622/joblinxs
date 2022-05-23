import axios from "../../routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { addCategorySuccess, getUserBlockSuccess,getUserProfileSuccess,deleteUser,getUserDetailsSuccess } from "./actions";
import { ADD_CATEGORY, GET_USER_BLOCK,GET_USER_PROFILE, DELETE_USER,GET_USER_DETAILS } from "./constants";
import { sagaErrorHandler } from "../../shared/helperMethods/sagaErrorHandler";
import { makeSelectAuthToken } from "../store/selectors";
import { toast } from "react-toastify";
function* addCategory({ payload }: any): any {
  console.log("addCategory", addCategory)
  try {
   
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`category/add/admin`,payload.data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
    yield put(addCategorySuccess(response.data.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}

function* userBlockSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`/user/admin/change-userStatus/${payload.userId}`,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(getUserBlockSuccess());
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* userProfileSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`/user/admin/approve-request/${payload.userId}`,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(getUserProfileSuccess());
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* deleteUserSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`user/admin/delete/${payload.userId}`,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
   
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* userDetailRequest({ payload }: any): any {
  try {
    // const headers = { headers: { 'authorization': yield select(makeSelectAuthToken()) } };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(``,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
    yield put(getUserDetailsSuccess());
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchAddCategory() {
  yield takeLatest(ADD_CATEGORY, addCategory);
}
function* watchUserBlock() {
  yield takeLatest(GET_USER_BLOCK, userBlockSaga);
}
function* watchUserProfile() {
  yield takeLatest(GET_USER_PROFILE, userProfileSaga);
}
function* watchDeleteUser() {
  yield takeLatest(DELETE_USER, deleteUserSaga);
}
function* watchDetailUser() {
  yield takeLatest(DELETE_USER, userDetailRequest);
}
export default function* UserSaga() {
  yield all([fork(watchAddCategory)]);
  yield all([fork(watchUserBlock)]);
  yield all([fork(watchUserProfile)]);
  yield all([fork(watchDeleteUser)]);
  yield all([fork(watchDetailUser)]);
}
