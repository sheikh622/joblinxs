import axios from "../../routes/axiosConfig";
import { all, put, fork, takeLatest, select } from "redux-saga/effects";
import { getAdminList, getAdminListSuccess, getPermissionSuccess, getPermission, getAdminBlockSuccess, updateAdminSuccess } from "./actions";
import { GET_ADMIN_LIST, ADD_ADMIN_REQUEST, GET_PERMISSION, GET_ADMIN_BLOCK, DELETE_ADMIN, UPDATE_ADMIN } from "./constants";
import { sagaErrorHandler } from "../../shared/helperMethods/sagaErrorHandler";
import { makeSelectAuthToken } from "../store/selectors";
import { toast } from "react-toastify";
function* adminListRequest({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`/admin/all-admins/?page=${payload.page}&limit=${payload.limit}&search=${payload.search}`, {
      headers: {
        authToken: `${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(getAdminListSuccess(response.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* permissionRequestSaga({ payload }: any): any {
  try {
    const token: any = yield select(makeSelectAuthToken());
    const response = yield axios.get(`/admin/all-permissions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(getPermissionSuccess(response.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* addAdminRequestSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`/admin/add-admin`, payload.data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(
      getPermissionSuccess([])
    )
    yield put(
      getPermission()
    )
    payload.handleAddAfter()
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* adminBlockSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`/admin/block-admin`, payload, {
      headers: {
        authToken: `${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(getAdminBlockSuccess());
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* deletePostSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.delete(`/admin/delete-admin/${payload.id}`, {
      headers: {
        authToken: `${token}`,
      },
    });
    toast.success(response.data.message);
    yield put(
      getAdminList({
        page: 1, limit: 5,
        search: "",
      })
    )
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* updateAdminSaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.put(`/admin/update-admin`, payload.data, {
      headers: {
        authToken: `${token}`,
      },
    });
    toast.success(response.data.message);
    payload.history.push("/adminManagement")
    yield put(updateAdminSuccess(response.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetAdmin() {
  yield takeLatest(GET_ADMIN_LIST, adminListRequest);
}
function* watchAddAdmin() {
  yield takeLatest(ADD_ADMIN_REQUEST, addAdminRequestSaga);
}
function* watchPermission() {
  yield takeLatest(GET_PERMISSION, permissionRequestSaga);
}
function* watchAdminBlock() {
  yield takeLatest(GET_ADMIN_BLOCK, adminBlockSaga);
}
function* watchDeleteAdmin() {
  yield takeLatest(DELETE_ADMIN, deletePostSaga);
}
function* watchUpdateAdmin() {
  yield takeLatest(UPDATE_ADMIN, updateAdminSaga);
}
export default function* AdminSaga() {
  yield all([fork(watchGetAdmin)]);
  yield all([fork(watchAddAdmin)]);
  yield all([fork(watchPermission)]);
  yield all([fork(watchAdminBlock)]);
  yield all([fork(watchDeleteAdmin)]);
  yield all([fork(watchUpdateAdmin)]);
}
