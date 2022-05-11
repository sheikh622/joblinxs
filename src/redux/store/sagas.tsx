import { all, fork } from 'redux-saga/effects'
import AuthSaga from '../auth/sagas';
import CommonSaga from 'redux/common/saga';
import UserSaga from 'redux/userManagement/sagas';
export function* rootSaga() {
    yield all([
        AuthSaga(),
        CommonSaga(),
        UserSaga(),
    ])
}