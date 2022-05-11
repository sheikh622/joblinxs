import axios from "../../routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { getUsersListSuccess, getUserBlockSuccess,getUserProfileSuccess } from "./actions";
import { GET_USERS_LIST, GET_USER_BLOCK,GET_USER_PROFILE } from "./constants";
import { sagaErrorHandler } from "../../shared/helperMethods/sagaErrorHandler";
import { makeSelectAuthToken } from "../store/selectors";
import { toast } from "react-toastify";
function* userListRequest({ payload }: any): any {
  try {
    // const headers = { headers: { 'authorization': yield select(makeSelectAuthToken()) } };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`user/admin/user-list?page=${payload.page}&count=${payload.limit}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
    yield put(getUsersListSuccess(response.data.data));
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
function* watchGetUsers() {
  yield takeLatest(GET_USERS_LIST, userListRequest);
}
function* watchUserBlock() {
  yield takeLatest(GET_USER_BLOCK, userBlockSaga);
}
function* watchUserProfile() {
  yield takeLatest(GET_USER_PROFILE, userProfileSaga);
}
export default function* UserSaga() {
  yield all([fork(watchGetUsers)]);
  yield all([fork(watchUserBlock)]);
  yield all([fork(watchUserProfile)]);
}
