import { CONSTANTS } from "../action";

const initialState = null;

const activeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.PAPAN_AKTIF: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeBoardReducer;
