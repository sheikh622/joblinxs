import axios from "../../Routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import {

  getCategoryListingSuccess,
getCategoryProfileSuccess,
  getCategoryListing
 
} from "./actions";
import {
  
  GET_CATEGORY_LISTING,
  GET_CATEGORY_PROFILE,
  
} from "./constants";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { toast } from "react-toastify";


function* getcategory({ payload }) {
  console.log("=======++", payload)

  try {

    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `category/partial/list?keyword=${payload.search}&page=${payload.page }&count=${payload.limit
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getCategoryListingSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* CategoryProfileSaga({ payload }) {
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
    yield put(getCategoryProfileSuccess());
    // yield put(
    //   getUsersList({
    //     page: payload.page,
    //     limit: payload.limit,
    //     type: payload.type,
    //     search: payload.search,
    //   })
    // );
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY_LISTING, getcategory);
}
function* watchCategoryProfile() {
  yield takeLatest(GET_USER_PROFILE, CategoryProfileSaga);
}
export default function* CategorySaga() {
  
  yield all([fork(watchGetCategory)]);
  yield all([fork(watchCategoryProfile)]);

}
