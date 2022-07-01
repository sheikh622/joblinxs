import {
    GET_CATEGORY_LIST,
    GET_CATEGORY_LIST_SUCCESS,
    FAVOURITE_JOB_LIST,
} from "./constants";
export const getCategoryList = (data) => ({
    type: GET_CATEGORY_LIST,
    payload: data,
});
export const getCategoryListSuccess = (data) => ({
    type: GET_CATEGORY_LIST_SUCCESS,
    payload: data,
});