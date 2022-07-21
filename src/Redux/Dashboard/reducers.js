import produce from "immer";
import { GET_SEEKER_LISTING_SUCCESS, NEW_ARRIVAL_PROVIDER_SUCCESS ,NEW_ARRIVAL_SEEKER_SUCCESS} from "./constants";
const initialState = {
  getSeekerListing: [],
  newArrivalProvider:[],
  newArrivalSeeker:[],
};
const Seeker = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_SEEKER_LISTING_SUCCESS:
      state.getSeekerListing = action.payload;
      break;
      case NEW_ARRIVAL_PROVIDER_SUCCESS:
      state.newArrivalProvider = action.payload;
      break;
      case NEW_ARRIVAL_SEEKER_SUCCESS:
        state.newArrivalSeeker = action.payload;
        break;
    default:
  }
}, initialState);

export default Seeker;