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
    let data= {
      id: payload.id,
      isApproved: payload.isApproved,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `category/approve/${payload.categoryId}`,data,
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
