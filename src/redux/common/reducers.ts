import { Common } from "../../types/models/Common";
import produce from "immer";
import {
  CommonActionTypes,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
} from "../../types/actions/Common.action";
import {SUBMIT_EMAIL_SUCCESS} from "./constant"

const INIT_STATE: Common = {
  error: "",
  loading: false,
  isAppDrawerOpen: false,
  updatingContent: false,
  message: "",
  // submitEmailtoken: null,
};

const CommonReducer = (
  state = INIT_STATE,
  action: CommonActionTypes
): Common => {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: "", message: "", loading: true };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        error: "",
        message: "",
        loading: false,
        updatingContent: false,
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        error: "",
        message: action.message,
        loading: false,
        updatingContent: false,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "",
        updatingContent: false,
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        loading: false,
        error: "",
        message: "",
        updatingContent: false,
      };
    }
    case TOGGLE_APP_DRAWER: {
      return {
        ...state,
        isAppDrawerOpen: !state.isAppDrawerOpen,
      };
    }
    default:
      return state;
  }
};

export default CommonReducer;
