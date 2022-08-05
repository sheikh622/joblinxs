import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import { getProfileSuccess } from "./actions";
import { loginRequestSuccess } from "../auth/actions";
import { GET_PROFILE, UPDATE_PROFILE } from "./constants";
// import { CapitalizeFirstLetter } from "../../utils/Global";
import { adminUpdatedSuccess } from "../auth/actions";

function* getProfileById({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`profile/${payload.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(getProfileSuccess(response.data.data.user));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetProfile() {
  yield takeLatest(GET_PROFILE, getProfileById);
}
function* updateAdminProfileSaga({ payload }) {
  let Data = new FormData();
  Data.append("fullName", payload.fullName);
  Data.append("address", payload.address);
  Data.append("dateofBirth", payload.dateofBirth);
  Data.append("phoneNumber", payload.phoneNumber);
  Data.append("city", payload.city);
  Data.append("postalCode", payload.postalCode);
  Data.append("id", payload.id);
  Data.append("profileImg", payload.profileImg);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(`profile/update`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.message);
    payload.history.push("/profile");
    yield put(getProfileSuccess(response.data.data.user));
    yield put(adminUpdatedSuccess(response.data.data.user));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchUpdateAdminProfile() {
  yield takeLatest(UPDATE_PROFILE, updateAdminProfileSaga);
}
export default function* ProfileSaga() {
  yield all([fork(watchGetProfile)]);
  yield all([fork(watchUpdateAdminProfile)]);
}
