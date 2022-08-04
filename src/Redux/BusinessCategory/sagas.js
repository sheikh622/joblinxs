import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { CapitalizeFirstLetter } from "../../utils/Global";
import {
  addCategorySuccess, getBusinessCategoryList,
  saveCategory, saveCategorySuccess
  , getBusinessCategoryListSuccess,
  updateCategorySuccess
} from "./actions";
import {
  ADD_CATEGORY, GET_BUSNIESSCATEGORY_LIST,SAVE_CATEGORY, SAVE_CATEGORY_SUCCESS,
} from "./constants";

function* addCategoryRequest({ payload }) {

  const formData = new FormData();
  
  formData.append("title", payload.title);
  formData.append("details", payload.details);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`category/add/user`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // payload.setReset();
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setShowDefault(false);
    yield put(addCategorySuccess(response.data.data));
    yield put(getBusinessCategoryList({
      search: '',
    })
    );
    payload.setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* getcategory({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    let response = yield axios.get(
      `category/user/all/selected`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getBusinessCategoryListSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* saveCategorySaga({ payload }) {
console.log("payload",payload)
  let Data = {
    categoriesId: payload.categoriesId
  }
  try {
    const token = yield select(makeSelectAuthToken());
    let response;

    response = yield axios.post(
      `category/add/Ids`, Data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(saveCategorySuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}


function* watchSaveCategory() {
  yield takeLatest(SAVE_CATEGORY, saveCategorySaga);
}
function* watchAddCategory() {
  yield takeLatest(ADD_CATEGORY, addCategoryRequest);
}
function* watchGetCategory() {
  yield takeLatest(GET_BUSNIESSCATEGORY_LIST, getcategory);
}

export default function* BusinessCategorySaga() {
  yield all([fork(watchAddCategory)]);
  yield all([fork(watchGetCategory)]);
  yield all([fork(watchSaveCategory)]);

}
