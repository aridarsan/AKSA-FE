import { CONSTANTS } from "../action";

const initialState = {
  "card-0": {
    text: "Last Episode",
    id: `card-0`,
    list: "list-0"
  }
};

const kartuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.TAMBAH_KARTU: {
      const { text, idDaftar, id } = action.payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: idDaftar
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_KARTU: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.text = newText;
      return { ...state, [`card-${id}`]: card };
    }

    case CONSTANTS.HAPUS_KARTU: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default kartuReducer;
