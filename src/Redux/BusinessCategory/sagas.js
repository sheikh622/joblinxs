import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { CapitalizeFirstLetter } from "../../utils/Global";
import {
  addCategorySuccess, getBusinessCategoryList
  // deleteCategory,
  , getBusinessCategoryListSuccess,
  updateCategorySuccess
} from "./actions";
import {
  ADD_CATEGORY, DELETE_CATEGORY, GET_BUSNIESSCATEGORY_LIST, GET_CATEGORY_LIST,
  UPDATE_CATEGORY
} from "./constants";

function* addCategoryRequest({ payload }) {

  const formData = new FormData();
  // formData.append("categoryImg", payload.categoryImg);
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
    payload.setSelectedImage("");
    yield put(addCategorySuccess(response.data.data));
    yield put(getBusinessCategoryList({
      search: '',
    })
    );

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* getcategory({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    let response;
    
      response = yield axios.get(
        `category/user/list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    yield put(getBusinessCategoryListSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
// function* updateCategorySaga({ payload }) {
//   const formData = new FormData();
//   formData.append("id", payload.id);

//   formData.append("categoryImg", payload.categoryImg);
//   formData.append("title", payload.title);
//   formData.append("details", payload.details);

//   try {
//     const token = yield select(makeSelectAuthToken());
//     const response = yield axios.patch(`category/update`, formData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     payload.setShowDefault(false);
//     payload.setReset();

//     toast.success(CapitalizeFirstLetter(response.data.message));
//     payload.history.push("/Categories");
//     yield put(getCategoryList({
//       search: '',
//     })
//     );
//     yield put(updateCategorySuccess(response.data));
//   } catch (error) {
//     yield sagaErrorHandler(error.response);
//   }
// }
// function* deleteCategory({ payload }) {
//   let { userId } = payload;
//   try {
//     const token = yield select(makeSelectAuthToken());
//     const response = yield axios.delete(`category/delete/${payload.userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     toast.success(CapitalizeFirstLetter(response.data.message));
//     yield put(getCategoryList({
//       search: payload.search,
//     })
//     );
//   } catch (error) {
//     yield sagaErrorHandler(error.response);
//   }
// }
// function* watchUpdateCategory() {
//   yield takeLatest(UPDATE_CATEGORY, updateCategorySaga);
// }

function* watchAddCategory() {
  yield takeLatest(ADD_CATEGORY, addCategoryRequest);
}
function* watchGetCategory() {
  yield takeLatest(GET_BUSNIESSCATEGORY_LIST, getcategory);
}
// function* watchDeleteCategory() {
//   yield takeLatest(DELETE_CATEGORY, deleteCategory);
// }
export default function* BusinessCategorySaga() {
  yield all([fork(watchAddCategory)]);
  yield all([fork(watchGetCategory)]);
  // yield all([fork(watchUpdateCategory)]);
  // yield all([fork(watchDeleteCategory)]);
}
