import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { getAdminProfileSuccess,  } from "./actions";
import { getList } from "../chat/actions";
import { loginRequestSuccess } from "../auth/actions";
import { GET_ADMIN_PROFILE, UPDATE_ADMIN_PROFILE} from "./constants";
// import { CapitalizeFirstLetter } from "../../utils/Global";
import { adminUpdatedSuccess } from "../auth/actions";
import {getReportBlock} from "../../Redux/ReportManagement/actions"
import {logoutRequest} from "../auth/actions";

function* getAdminProfile({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`profile/adminProfile/${payload.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // payload.setLoader(false);
    yield put(getAdminProfileSuccess(response.data.data));

  } catch (error) {
    if(error?.response?.status == 401){
      yield put(logoutRequest());
    }
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetAdminProfile() {
  yield takeLatest(GET_ADMIN_PROFILE, getAdminProfile);
}
// function* updateAdminProfileSaga({ payload }) {
//   let Data = new FormData();
//   Data.append("fullName", payload.fullName);
//   Data.append("address", payload.address);
//   Data.append("dateofBirth", payload.dateofBirth);
//   Data.append("phoneNumber", payload.phoneNumber);
//   Data.append("city", payload.city);
//   Data.append("postalCode", payload.postalCode);
//   Data.append("id", payload.id);
//   Data.append("profileImg", payload.profileImg);
//   try {
//     const token = yield select(makeSelectAuthToken());
//     const response = yield axios.patch(`profile/update`, Data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     toast.success(response.data.message);
//     payload.history.push("/profile");

//     yield put(getProfileSuccess(response.data.data.user));

//     yield put(adminUpdatedSuccess(response.data.data.user));
//     payload.setLoader(false);

//   } catch (error) {
//     yield sagaErrorHandler(error.response);
//   }
// }
// function* watchUpdateAdminProfile() {
//   yield takeLatest(UPDATE_PROFILE, updateAdminProfileSaga);
// }

export default function* AdminProfileSaga() {
  yield all([fork(watchGetAdminProfile)]);
  // yield all([fork(watchUpdateAdminProfile)]);
}
