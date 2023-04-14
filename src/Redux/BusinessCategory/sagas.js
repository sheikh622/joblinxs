import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { CapitalizeFirstLetter } from "../../utils/Global";
import { logoutRequest, UpdateAuthResponseSuccess } from "../auth/actions";
import {
  addCategorySuccess,
  getBusinessCategoryList,
  saveCategory,
  saveCategorySuccess,
  getBusinessCategoryListSuccess,
  CopyBusinessCategoryListSuccess,
  updateCategorySuccess,
} from "./actions";
import {
  UpdateAuthResponseS
} from "../auth/actions";
import {
  ADD_CATEGORY,
  GET_BUSNIESSCATEGORY_LIST,
  SAVE_CATEGORY,
  SAVE_CATEGORY_SUCCESS,
  Copy_BUSNIESSCATEGORY_LIST
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
    payload.setReset();
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setShowDefault(false);
    yield put(addCategorySuccess(response.data.data));
    yield put(
      getBusinessCategoryList({
        id:payload.id,
        search: payload.search,
        page: payload.page,
        limit: payload.limit,
      })
    );
    payload.setLoader(false);
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* getcategory({ payload }) {
  try {
    let { id } = payload;
    const token = yield select(makeSelectAuthToken());
    let response = yield axios.get(
      `category/single/categories_list/${payload?.id}?keyword=${payload.search}&page=${payload.page}&count=${payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let data = response.data.data;

    // const updatedArray = data?.sub_Categories?.map((category) => {
    //   if (payload.SubLogin.length > 0) {
    //     let selectedData = data?.selctedCategories?.forEach((selected) => {
    //       if (category?.id == selected?.id) {
    //         category["selected"] = true;
    //       }
    //     });
    //   } else {
    //     category["selected"] = false;
    //   }
    //   return category;
    // });
    const updatedArray = data.sub_Categories.map((category) => {
      let val = payload.SubLogin.filter((val) => val.id == category.id)
      if (val?.length > 0) {
        category['select'] = true;
      } else {

        category['select'] = false;
      }
      return category;
    });
    let finalResponse = {
      updatedArray: updatedArray,
      pages: data.pages
    }
    yield put(getBusinessCategoryListSuccess(finalResponse));
    payload.setLoader(false);
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* copycategory({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    let response = yield axios.get(
      `category/single/categories_list/${payload?.id}?keyword=${payload.search}&page=${payload.page}&count=${payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let data = response.data.data;
    const updatedArray = data?.allCategories?.map((category) => {
      if (data?.selctedCategories.length > 0) {
        let selectedData = data?.selctedCategories?.forEach((selected) => {
          if (category?.id == selected?.id) {
            category["selected"] = true;
          }
        });
      } else {
        category["selected"] = false;
      }
      return category;
    });
    let finalResponse = {
      updatedArray: updatedArray,
      pages: data.pages
    }
    yield put(CopyBusinessCategoryListSuccess(finalResponse));
    payload.setLoader(false);
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* saveCategorySaga({ payload }) {
  let Data = {
    mainCategoryId: payload.mainCategoryId,
    categoriesId: payload.categoriesId,
  };
  try {
    const token = yield select(makeSelectAuthToken());
    let response;

    response = yield axios.post(`category/add/Ids`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(saveCategorySuccess(response.data.data));
    yield put(UpdateAuthResponseSuccess(response.data.data));
    // yield put(
    //   getBusinessCategoryList({
    //     id:payload.payload.id,
    //     search: payload.search,
    //     page: payload.page,
    //     limit: payload.limit,
    //   })
    // );
    payload.setLoader(false);
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
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
function* watchCopyCategory() {
  yield takeLatest(Copy_BUSNIESSCATEGORY_LIST, copycategory);
}

export default function* BusinessCategorySaga() {
  yield all([fork(watchAddCategory)]);
  yield all([fork(watchGetCategory)]);
  yield all([fork(watchSaveCategory)]);
  yield all([fork(watchCopyCategory)]);

}
