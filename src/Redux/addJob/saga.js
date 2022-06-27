import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
    getAddJob
} from "./actions";
import {
    ADD_JOB, ADD_JOB_SUCCESS
} from "./constants";
import { CapitalizeFirstLetter } from "../../utils/Global";
function* addJob({ payload }) {
    const formData = new FormData();
    formData.append("categoryImg", payload.categoryImg);
    formData.append("title", payload.title);
    formData.append("details", payload.details);
    try {
      const token = yield select(makeSelectAuthToken());
      const response = yield axios.post(`category/add/admin`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      payload.setReset();
      toast.success(CapitalizeFirstLetter(response.data.message));
      payload.setShowDefault(false);
  
      payload.setSelectedImage("");
      yield put(ADD_JOB_SUCCESS(response.data.data));
    //   yield put(getCategoryList({
    //     search: '',
    //   })
    //   );
    } catch (error) {
      yield sagaErrorHandler(error.response);
    }
  }
  function* watchAddJob() {
    yield takeLatest(ADD_JOB, addJob);
  }
  export default function* addJobSaga() {
    yield all([fork(watchAddJob)]);

  }
  