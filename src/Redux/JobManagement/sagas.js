import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {getJobListing, getJobListingSuccess,} from "./actions";
import {
  getJobListing, getJobListingSuccess,
  getCategoryProfileSuccess
} from "./actions";
import {
  GET_JOB_LISTING,
} from "./constants";
import { CapitalizeFirstLetter } from "../../utils/Global";


function* getJobList({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/seeker/:userId?page=${payload.page}&count=${payload.limit
}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getJobListingSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetJob() {
  yield takeLatest(GET_JOB_LISTING, getJobList);
}
export default function* JobManagementSaga() {
  yield all([fork(watchGetJob)]);
}
