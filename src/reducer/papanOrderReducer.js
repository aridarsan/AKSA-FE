import { CONSTANTS } from "../action";
// import uuid from "uuidv4";

// console.log(uuid());

const initialState = ["board-0"];

const papanOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.TAMBAH_PAPAN: {
      return [...state, `board-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default papanOrderReducer;
