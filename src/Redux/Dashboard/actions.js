import { GET_SEEKER_LISTING, GET_SEEKER_LISTING_SUCCESS } from "./constants";

export const getSeekerListing = (data) => ({
  type: GET_SEEKER_LISTING,
  payload: data,
});
export const getSeekerListingSuccess = (data) => ({
  type: GET_SEEKER_LISTING_SUCCESS,
  payload: data,
});