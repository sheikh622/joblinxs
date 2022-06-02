import { all, fork } from 'redux-saga/effects'
import AuthSaga from '../Redux/auth/sagas';
// import CommonSaga from 'redux/common/saga';
import UserSaga from '../Redux/userManagement/sagas';
// import Category from 'redux/Category/sagas';

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        // CommonSaga(),
        UserSaga(),
        // Category(),
    ])
}