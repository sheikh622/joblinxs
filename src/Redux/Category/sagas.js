import axios from "../../Routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  addCategorySuccess,
  getCategoryListSuccess,
  updateCategorySuccess,
  getCategoryList
  // deleteCategory,
} from "./actions";
import {
  ADD_CATEGORY,
  GET_CATEGORY_LIST,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "./constants";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { toast } from "react-toastify";

function* addCategoryRequest({ payload }) {
  alert(3)
  console.log(payload.showDefault, "here is state")
  const formData = new FormData();
  formData.append("categoryImg", payload.categoryImg);
  formData.append("title", payload.title);
  formData.append("details", payload.details);

  try {

    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`category/add/admin`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    payload.setShowDefault(false);
    // payload.setReset();
    payload.setSelectedImage("");
    yield put(addCategorySuccess(response.data.data));
    yield put( getCategoryList({
      search: payload.search,
       })
     );
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* getcategory({ payload }) {
  console.log("values=>", payload);

  try {

    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `category/list?keyword=all`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getCategoryListSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* updateCategorySaga({ payload }) {
  alert(2)
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(`category/update`, payload.data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    payload.setShowDefault(false);

    toast.success(response.data.message);
    payload.history.push("/Categories");
    yield put(updateCategorySuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* deleteCategory({ payload }) {
  let { userId } = payload;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.delete(`category/delete/${payload.userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    yield put( getCategoryList({
     search: payload.search,
      })
    );
  } catch (error) {
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
export default function* CategorySaga() {
  yield all([fork(watchAddCategory)]);
  yield all([fork(watchGetCategory)]);
  yield all([fork(watchUpdateCategory)]);
  yield all([fork(watchDeleteCategory)]);
}
