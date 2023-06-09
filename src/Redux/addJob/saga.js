import { toast } from "react-toastify";
import { all, fork, put, select, takeLatest } from "redux-saga/effects";
import axios from "../../Routes/axiosConfig";
import { sagaErrorHandler } from "../../Shared/shared";
import { makeSelectAuthToken } from "../../Store/selector";
import {
  getJobs,
  getAddJob,
  favouriteJobList,
  getJobListingSuccess,
  getJobsSuccess,
  favouriteJobListSuccess,
  deleteAddJob,
  jobByIdSuccess,
  updateJobSuccess,
  getJobListing,
  getApplicants,
  getApplicantsSuccess,
  getConfirmSuccess,
  getLogHours,
  getLogHoursSuccess,
  getApprovedHoursSuccess,
  getConfirmApplicants,
  getSingleUser,
  getSingleUserSuccess,
  getHiredApplicantsSuccess,
  getHiredApplicants,
  getApplicantsByUserId,
  sendOfferJobSuccess,
  extendJobTime,
  extendJobTimeSuccess,
  getExtendSuccess
} from "./actions";
import {
  ADD_JOB,
  ADD_JOB_SUCCESS,
  GET_JOB,
  FAVOURITE_JOB_LIST,
  DELETE_ADD_JOB,
  MARK_AS_FAVOURITE_JOB,
  JOB_BY_ID_SUCCESS,
  JOB_BY_ID,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB,
  GET_JOB_APPLICANTS,
  GET_HIRED_APPLICANTS,
  GET_HIRED_APPLICANTS_SUCCESS,
  CONFIRM_APPLICANTS,
  GET_LOG_HOURS, GET_LOG_HOURS_SUCCESS,
  APPROVED_LOG_HOURS,
  APPROVED_LOG_HOURS_SUCCESS,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER,
  RATE_PROVIDER,
  COMPLETE_JOB,
  CONFIRM_JOB,
  GET_APPLICANTS_BYUSERID,
  EMERGENCY_JOB,
  SEND_OFFER,
  EXTEND_TIME, GET_EXTEND
} from "./constants";
import { CapitalizeFirstLetter } from "../../utils/Global";

function* addJob({ payload }) {
  let repost = payload.isPost;
  const formData = new FormData();
  formData.append("id", payload.id);
  formData.append("name", payload.name);
  formData.append("description", payload.description);
  formData.append("requirement", payload.requirement);
  formData.append("paymentType", payload.paymentType);
  formData.append("rate", payload.rate);
  formData.append("unit", payload.unit);
  formData.append("hours", payload.hours);
  formData.append("days", payload.days);
  formData.append("location", JSON.stringify([payload.location]));
  formData.append("longitude", payload.longitude);
  formData.append("latitude", payload.latitude);
  formData.append("noOfProviders", payload.noOfProviders);
  formData.append("toolsNeeded", payload.toolsNeeded);
  formData.append("experienceRequired", payload.experienceRequired);
  // formData.append("jobType", payload.jobType);
  formData.append("jobType", payload.paymentType === "fixed" ? null : payload.jobType);
  formData.append("jobPlace", payload.jobPlace);
  formData.append("jobNature", payload.paymentType === "fixed" ? null : payload.jobNature);
  // formData.append("jobNature", payload.jobNature);
  formData.append("startDate", JSON.stringify(payload.startDate));
  formData.append("endDate", JSON.stringify(payload.endDate));
  formData.append("jobType", payload.isOngoing === "fixed" ? null : payload.isOngoing);
  // formData.append("isOngoing", payload.isOngoing);
  formData.append("category", payload.category);
  formData.append("jobImg", payload.jobImg);
  formData.append("existImg", payload.existImg);
  formData.append("isPost", payload.isPost);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`${repost === true ? "job/repost" : "job/seeker"}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setReset();
    payload.setButtonDisabled(false);
    payload.history.push("/job");

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchAddJob() {
  yield takeLatest(ADD_JOB, addJob);
}
function* getJobList({ payload }) {
  let category = payload.category === undefined ? "" : payload.category;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/seeker/${payload.userId}?page=${payload.page}&count=${payload.limit}&status=${payload.type}&category=${category}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getJobsSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetJob() {
  yield takeLatest(GET_JOB, getJobList);
}
function* getFavoutiteJobList({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/favorite?page=${payload.page}&count=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(favouriteJobListSuccess(response.data.data));
    payload.setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetFavouriteJob() {
  yield takeLatest(FAVOURITE_JOB_LIST, getFavoutiteJobList);
}
function* deleteJobSaga({ payload }) {
  let { adminId } = payload;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.delete(`job/seeker/${payload.jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setShowDefault(false);
    payload.history.push("/job");
    const filteredData = payload.data.filter(
      (item, index) => item.jobId !== payload.jobId
    );
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchDeleteAddJob() {
  yield takeLatest(DELETE_ADD_JOB, deleteJobSaga);
}
function* markAsFavouriteJobSaga({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const datas = {
      helo: "heloo",
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield axios.patch(
      `job/favorite/${payload.id}`,
      datas,
      headers
    );
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchMarkAsFavouriteJob() {
  yield takeLatest(MARK_AS_FAVOURITE_JOB, markAsFavouriteJobSaga);
}
function* jobByIdSaga(payload) {
  const { id } = payload.payload;
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(`job/getJob/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(jobByIdSuccess(response.data.data));
    payload.setReset();
    payload.setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchJobById() {
  yield takeLatest(JOB_BY_ID, jobByIdSaga);
}
function* updateJobSaga(payload) {
  const formData = new FormData();
  formData.append("id", payload.payload.id);
  formData.append("name", payload.payload.name);
  formData.append("description", payload.payload.description);
  formData.append("requirement", payload.payload.requirement);
  formData.append("paymentType", payload.payload.paymentType);
  formData.append("rate", payload.payload.rate);
  formData.append("unit", payload.payload.unit);
  formData.append("hours", payload.payload.hours);
  formData.append("days", payload.payload.days);
  formData.append("location", JSON.stringify([payload.payload.location]));
  formData.append("longitude", payload.payload.longitude);
  formData.append("latitude", payload.payload.latitude);
  formData.append("noOfProviders", payload.payload.noOfProviders);
  formData.append("toolsNeeded", payload.payload.toolsNeeded);
  formData.append("experienceRequired", payload.payload.experienceRequired);
  formData.append("jobType", payload.payload.jobType);
  formData.append("jobPlace", payload.payload.jobPlace);
  formData.append("jobNature", payload.payload.jobNature);
  formData.append("startDate", JSON.stringify(payload.payload.startDate));
  formData.append("endDate", JSON.stringify(payload.payload.endDate));
  formData.append("isOngoing", payload.payload.isOngoing);
  formData.append("category", payload.payload.category);
  formData.append("jobImg", payload.payload.jobImg);
  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `job/seeker/${payload.payload.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.history.push(`/detailJob/${payload.id}`);
    payload.setReset();
    payload.setButtonDisabled(false);
    yield put(updateJobSuccess(response.data));

    // yield put(getJobListingSuccess(response.data.data));

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchUpdateJob() {
  yield takeLatest(UPDATE_JOB, updateJobSaga);
}
function* getApplicantsRequest(payload) {
  try {
    const { id, setLoader } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/applicants/${id}?page=${payload.payload.page}&count=${payload.payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getApplicantsSuccess(response.data));
    setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetApplicants() {
  yield takeLatest(GET_JOB_APPLICANTS, getApplicantsRequest);
}
function* gethiredApplicantsSaga(payload) {

  try {
    const { id, setLoader } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/hiredApplicants/${id}?page=${payload.payload.page}&count=${payload.payload.limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getHiredApplicantsSuccess(response.data));
    setLoader(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetHiredApplicants() {
  yield takeLatest(GET_HIRED_APPLICANTS, gethiredApplicantsSaga);
}
function* ConfirmSaga(payload) {
  try {
    let data = {
      isAccepted: payload.payload.isAccepted,
    };
    const { userId } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/approve/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    // payload.setLoader(false);
    // yield put(getConfirmSuccess(response.data));
    yield put(getApplicants({
      id: payload.payload.id,
      page: payload.payload.page,
      limit: payload.payload.limit,
    }));

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchConfirmApplicants() {
  yield takeLatest(CONFIRM_APPLICANTS, ConfirmSaga);
}
function* getLogHoursSaga({ payload }) {
  try {
    const { id } = payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/getHours/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    yield put(getLogHoursSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetLogHours() {
  yield takeLatest(GET_LOG_HOURS, getLogHoursSaga);
}
function* RateJobSaga({ payload }) {
  try {
    let Data = {
      description: payload.description,
      rating: payload.rating,
      jobId: payload.jobId,
      ratedBy: payload.ratedBy,
      ratedTo: payload.ratedTo
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/rating`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getLogHoursSuccess(response.data.data));

    payload.setShow(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* ApprovedHoursSaga({ payload }) {
  try {
    let data = {
      id: payload.id,
      status: payload.status,
      userId: payload.userId,
      providerId: payload.providerId,
    }

    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `job/approveHours`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(getApprovedHoursSuccess(response.data.data));
    yield put(getApplicantsByUserId({
      id: payload.jobId,
      page: payload.page,
      limit: payload.limit,
      usersId: payload.usersId
    }));

    // window.location.reload()
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchApprovedLogHours() {
  yield takeLatest(APPROVED_LOG_HOURS, ApprovedHoursSaga);
}
function* getSingleSaga({ payload }) {
  try {
    const { id } = payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `profile/${payload.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getSingleUserSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetSingleUser() {
  yield takeLatest(GET_SINGLE_USER, getSingleSaga);
}
function* watchRateJob() {
  yield takeLatest(RATE_PROVIDER, RateJobSaga);
}

function* CompletejobSaga({ payload }) {
  try {
    let Data = {
      jobId: payload.jobId,
      userId: payload.userId,
      jobStatus: payload.jobStatus,

    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(`job/completedBySeeker`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setLoader(false);
    yield put(getHiredApplicants({
      id: payload.payload.id,
      page: payload.payload.page,
      limit: payload.payload.limit,
    }));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchCompleteJob() {
  yield takeLatest(COMPLETE_JOB, CompletejobSaga);
}
function* ConfirmjobSaga({ payload }) {
  try {
    let Data = {
      jobId: payload.jobId,
      userId: payload.userId,
      isCompleted: payload.isCompleted,
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(`job/confirmBySeeker`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setLoader(false);
    yield put(getHiredApplicants({
      id: payload.payload.id,
      page: payload.payload.page,
      limit: payload.payload.limit,
    }));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchConfirmJob() {
  yield takeLatest(CONFIRM_JOB, ConfirmjobSaga);
}

function* getApplicantsByUserIdSaga(payload) {
  try {
    const { id, usersId, page, limit } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/getLogHours/${id}/${usersId}?page=${page}&count=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getLogHoursSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetApplicantsByUserId() {
  yield takeLatest(GET_APPLICANTS_BYUSERID, getApplicantsByUserIdSaga);
}
function* emergencyJobSaga({ payload }) {
  try {
    const data = {
      id: payload.id,
      userId: payload.userId
    };
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.patch(
      `job/emergency`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setShowDefaultEmergency(false)
    yield put(getJobListingSuccess(response.data.data));
    // payload.history.push("/job");

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchemergencyJob() {
  yield takeLatest(EMERGENCY_JOB, emergencyJobSaga);
}
function* sendOfferSaga({ payload }) {
  let repost = payload.isPost;
  const formData = new FormData();
  formData.append("id", payload.id);
  formData.append("name", payload.name);
  formData.append("description", payload.description);
  formData.append("requirement", payload.requirement);
  formData.append("paymentType", payload.paymentType);
  formData.append("rate", payload.rate);
  formData.append("unit", payload.unit);
  formData.append("hours", payload.hours);
  formData.append("days", payload.days);
  formData.append("location", JSON.stringify([payload.location]));
  formData.append("longitude", payload.longitude);
  formData.append("latitude", payload.latitude);
  formData.append("noOfProviders", payload.noOfProviders);
  formData.append("toolsNeeded", payload.toolsNeeded);
  formData.append("experienceRequired", payload.experienceRequired);
  formData.append("jobType", payload.paymentType === "fixed" ? null : payload.jobType);
  formData.append("jobPlace", payload.jobPlace);
  formData.append("jobNature", payload.paymentType === "fixed" ? null : payload.jobNature);
  formData.append("startDate", JSON.stringify(payload.startDate));
  formData.append("endDate", JSON.stringify(payload.endDate));
  formData.append("jobType", payload.isOngoing === "fixed" ? null : payload.isOngoing);
  formData.append("category", payload.category);
  formData.append("jobImg", payload.jobImg);
  // formData.append("existImg", payload.existImg);
  formData.append("isPost", payload.isPost);
  formData.append("isOffer", payload.isOffer);
  formData.append("serviceId", payload.serviceId);


  try {
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.post(`job/offer`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(CapitalizeFirstLetter(response.data.message));
    payload.setReset();
    payload.setButtonDisabled(false);
    payload.history.push("/dashboard");

  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchSendOfferSaga() {
  yield takeLatest(SEND_OFFER, sendOfferSaga);
}
function* ExtendTimeSaga({ payload }) {
  try {
    let Data = {
      serviceId: payload.jobId,
      endDate: payload.endDate,
    };
    const token = yield select(makeSelectAuthToken());
    const response = axios.post(`job/timeExtend`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
    toast.success(CapitalizeFirstLetter(response.data.message));
    yield put(extendJobTimeSuccess(response.data.data));
    payload.showModal(false);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchExtendTimeSaga() {
  yield takeLatest(EXTEND_TIME, ExtendTimeSaga);
}
function* getExtendSaga(payload) {
  try {
    const { id, usersId, page, limit } = payload.payload;
    const token = yield select(makeSelectAuthToken());
    const response = yield axios.get(
      `job/timeExtend/confirm`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getExtendSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* watchGetExtend() {
  yield takeLatest(GET_EXTEND, getExtendSaga);
}
export default function* addJobSaga() {
  yield all([fork(watchAddJob)]);
  yield all([fork(watchGetJob)]);
  yield all([fork(watchGetFavouriteJob)]);
  yield all([fork(watchDeleteAddJob)]);
  yield all([fork(watchMarkAsFavouriteJob)]);
  yield all([fork(watchJobById)]);
  yield all([fork(watchUpdateJob)]);
  yield all([fork(watchGetApplicants)]);
  yield all([fork(watchConfirmApplicants)]);
  yield all([fork(watchGetLogHours)]);
  yield all([fork(watchApprovedLogHours)]);
  yield all([fork(watchGetSingleUser)]);
  yield all([fork(watchRateJob)]);
  yield all([fork(watchGetHiredApplicants)]);
  yield all([fork(watchCompleteJob)]);
  yield all([fork(watchConfirmJob)]);
  yield all([fork(watchGetApplicantsByUserId)]);
  yield all([fork(watchemergencyJob)]);
  yield all([fork(watchSendOfferSaga)]);
  yield all([fork(watchExtendTimeSaga)]);
  yield all([fork(watchGetExtend)]);

}
