import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { logoutRequest } from "../auth/actions";
import {
  getCategoryListing,
  getCategoryListingSuccess,
  getCategoryProfileSuccess,
} from "./actions";
import { GET_CATEGORY_LISTING, GET_CATEGORY_PROFILE } from "./constants";
import { CapitalizeFirstLetter } from "../../utils/Global";

function* getcategory({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `category/partial/list?keyword=${payload.search}&page=${payload.page}&count=${payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getCategoryListingSuccess(response.data.data));
    payload.setLoader(false);

  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* CategoryProfileSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `category/approve/${payload.categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // let data = {
    //  page: payload.page,
    //     limit: payload.limit,
    //     search: payload.search,
    //     setLoader: payload.setLoader,
    // };
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(
      getCategoryListing({
        page: payload.page,
        limit: payload.limit,
        search: payload.search,
        setLoader: payload.setLoader,
      })
    );
    // yield put(getCategoryProfileSuccess());
    // console.log("444444444444444", response.data.message)

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY_LISTING, getcategory);
}
function* watchCategoryProfile() {
  yield takeLatest(GET_CATEGORY_PROFILE, CategoryProfileSaga);
}
export default function* CategoryManagementSaga() {
  yield all([fork(watchGetCategory)]);
  yield all([fork(watchCategoryProfile)]);
}
