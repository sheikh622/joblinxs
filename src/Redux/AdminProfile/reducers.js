import produce from "immer";
import {
  GET_ADMIN_PROFILE_SUCCESS,
  
} from "../AdminProfile/constants";
const initialState = {
  Adminprofile: "",
  
};
const AdminProfile = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_PROFILE_SUCCESS:
      state.Adminprofile = action.payload;
      break;
    default:
  }
}, initialState);
export default AdminProfile;
