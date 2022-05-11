// export{}
import axios from "../../routes/axiosConfig";
import { all, put, call, fork, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { sagaErrorHandler } from "../../shared/helperMethods/sagaErrorHandler";
import { toast } from "react-toastify";
import { SUBMIT_EMAIL } from "./constant";

function* getEmailSaga({ payload }: any): any {
    console.log("payload of login", payload);
    let formData = new FormData()
    formData.append("email", payload)
    try {
        const response = yield axios.post(`/user`, formData);
        console.log(response)
    } catch (error: any) {
        yield sagaErrorHandler(error.response);
    }
}
function* watchgetEmail() {
    yield takeLatest(SUBMIT_EMAIL, getEmailSaga);
}
export default function* CommonSaga() {
    yield all([fork(watchgetEmail)]);
}