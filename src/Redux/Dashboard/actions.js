import {
  GET_SEEKER_LISTING,
  GET_SEEKER_LISTING_SUCCESS,
  NEW_ARRIVAL,
  NEW_ARRIVAL_SUCCESS,
  TOP_RATED,
  TOP_RATED_SUCCESS,
} from "./constants";

export const getSeekerListing = (data) => ({
  type: GET_SEEKER_LISTING,
  payload: data,
});
export const getSeekerListingSuccess = (data) => ({
  type: GET_SEEKER_LISTING_SUCCESS,
  payload: data,
});
export const newArrival = (data) => ({
  type: NEW_ARRIVAL,
  payload: data,
});
export const newArrivalSuccess = (data) => ({
  type: NEW_ARRIVAL_SUCCESS,
  payload: data,
});
export const topRated= (data) => ({
  type: TOP_RATED,
  payload: data,
});
export const topRatedSuccess = (data) => ({
  type: TOP_RATED_SUCCESS,
  payload: data,
});
