import axios from "../../routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  addCategorySuccess,
  getCategoryListSuccess,
  updateCategorySuccess,
  // deleteCategory,
} from "./actions";
import {
  ADD_CATEGORY,
  GET_CATEGORY_LIST,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "./constants";
import { sagaErrorHandler } from "../../shared/helperMethods/sagaErrorHandler";
import { makeSelectAuthToken } from "../store/selectors";
import { toast } from "react-toastify";

function* addCategoryRequest({ payload }: any): any {
  console.log("addCategory============", payload);
  const formData = new FormData();
  formData.append("categoryImg", payload.categoryImg);
  formData.append("title", payload.title);
  formData.append("details", payload.details);

  try {
    console.log("values====>>>>>>", payload);
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`category/add/admin`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    payload.setReset();
    payload.setSelectedImage("");
    yield put(addCategorySuccess(response.data.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* getcategory({ payload }: any): any {
  try {
    console.log("values====>>>>>>", payload);
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `category/list?page=1&count=20&keyword=all`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getCategoryListSuccess(response.data.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* updateCategorySaga({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(`category/update`, payload.data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    payload.history.push("/Categories");
    yield put(updateCategorySuccess(response.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* deleteCategory({ payload }: any): any {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.delete(`category/delete/:id`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);

    // yield put(updateCategorySuccess(response.data));
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchUpdateCategory() {
  yield takeLatest(UPDATE_CATEGORY, updateCategorySaga);
}

function* watchAddCategory() {
  yield takeLatest(ADD_CATEGORY, addCategoryRequest);
}
function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY_LIST, getcategory);
}
function* watchDeleteCategory() {
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}
export default function* UserSaga() {
  yield all([fork(watchAddCategory)]);
  yield all([fork(watchGetCategory)]);
  yield all([fork(watchUpdateCategory)]);
  yield all([fork(watchDeleteCategory)]);
}
