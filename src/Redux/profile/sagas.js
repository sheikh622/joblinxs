import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getProfileSuccess,
} from "./actions";
import {loginRequestSuccess} from "../auth/actions"
import {
  GET_PROFILE,UPDATE_PROFILE
} from "./constants";
// import { CapitalizeFirstLetter } from "../../utils/Global";


function* getProfileById({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `profile/${payload.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getProfileSuccess(response.data.data.user));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetProfile() {
  yield takeLatest(GET_PROFILE, getProfileById);
}
function* updateAdminProfileSaga({payload}) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `profile/update`, payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getProfileSuccess(response.data.data.user));
    toast.success(response.data.message)
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
