import {
  GET_SEEKER_LISTING,
  GET_SEEKER_LISTING_SUCCESS,
  NEW_ARRIVAL_PROVIDER,
  NEW_ARRIVAL_PROVIDER_SUCCESS,
  NEW_ARRIVAL_SEEKER,
  NEW_ARRIVAL_SEEKER_SUCCESS,
} from "./constants";

export const getSeekerListing = (data) => ({
  type: GET_SEEKER_LISTING,
  payload: data,
});
export const getSeekerListingSuccess = (data) => ({
  type: GET_SEEKER_LISTING_SUCCESS,
  payload: data,
});
export const newArrivalProvider = (data) => ({
  type: NEW_ARRIVAL_PROVIDER,
  payload: data,
});
export const newArrivalProviderSuccess = (data) => ({
  type: NEW_ARRIVAL_PROVIDER_SUCCESS,
  payload: data,
});
export const newArrivalSeeker= (data) => ({
  type: NEW_ARRIVAL_SEEKER,
  payload: data,
});
export const newArrivalSeekerSuccess = (data) => ({
  type: NEW_ARRIVAL_SEEKER_SUCCESS,
  payload: data,
});
