import { all, fork } from 'redux-saga/effects'
import AuthSaga from '../Redux/auth/sagas';
// import CommonSaga from 'redux/common/saga';
import UserSaga from '../Redux/userManagement/sagas';
import CategorySaga from '../Redux/Category/sagas';

export default function* rootSaga() {
    yield all([
        AuthSaga(),

        UserSaga(),
        CategorySaga(),

    ])
}