import axios from "../../routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  getUsersListSuccess,
  getUserBlockSuccess,
  getUserProfileSuccess,
  deleteUser,
  getUsersList,
  getUserDetailsSuccess,
} from "./actions";
import {
  GET_USERS_LIST,
  GET_USER_BLOCK,
  GET_USER_PROFILE,
  DELETE_USER,
  GET_USER_DETAILS,
} from "./constants";
import { sagaErrorHandler } from "../../shared/helperMethods/sagaErrorHandler";
import { makeSelectAuthToken } from "../store/selectors";
import { toast } from "react-toastify";
import Search from "@mui/icons-material/Search";
import { type } from "os";
function* userListRequest({ payload }: any): any {
  try {
    // const headers = { headers: { 'authorization': yield select(makeSelectAuthToken()) } };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `user/admin/user-list?page=${payload.page + 1}&count=${
        payload.limit
      }&keyword=${payload.search}&usertype=${payload.type}`,
      {
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
    const response = yield axios.get(
      `/user/admin/change-userStatus/${payload.userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response.data.message);
    yield put(
      getUsersList({
        page: payload.page,
        limit: payload.limit,
        type: payload.type,
        search: payload.search,
      })
    );
    yield put(getUserBlockSuccess());
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* userProfileSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `/user/admin/approve-request/${payload.userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response.data.message);
    yield put(getUserProfileSuccess());
    yield put(
      getUsersList({
        page: payload.page,
        limit: payload.limit,
        type: payload.type,
        search: payload.search,
      })
    );
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* deleteUserSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`user/admin/delete/${payload.userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(
      getUsersList({
        page: payload.page,
        limit: payload.limit,
        type: payload.type,
        search: payload.search,
      })
    );
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
function* watchDeleteUser() {
  yield takeLatest(DELETE_USER, deleteUserSaga);
}
// function* watchDetailUser() {
//   yield takeLatest(DELETE_USER, userDetailRequest);
// }
export default function* UserSaga() {
  yield all([fork(watchGetUsers)]);
  yield all([fork(watchUserBlock)]);
  yield all([fork(watchUserProfile)]);
  yield all([fork(watchDeleteUser)]);
  // yield all([fork(watchDetailUser)]);
}
