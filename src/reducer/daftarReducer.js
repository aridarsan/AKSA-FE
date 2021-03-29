import {  CONSTANTS } from "./action";


const initialState = {
  "list-0" : {
    id: "list-0",
    kartu: ["card-0"],
    judul: "My List",
    papan: "papan-0"
    
  }
}

const daftarReducer = (state = initialState, action) => {
  switch (action.type) {
    case  CONSTANTS.TAMBAH_DAFTAR: {
      const { judul, id } = action.payload;
      const newDaftar = {
        judul: judul,
        id: `list-${id}`,
        kartu: []
      };

      const newState = { ...state, [`list-${id}`]: newDaftar };

      return newState;
    }

    case  CONSTANTS.TAMBAH_KARTU: {
      const { idDafar, id } = action.payload;
      const list = state[idDafar];
      list.cards.push(`card-${id}`);
      return { ...state, [idDafar]: list };
    }

    case  CONSTANTS.GESER:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = action.payload;

      // draggin lists around - the listOrderReducer should handle this
      if (type === "list") {
        return state;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        return { ...state, [droppableIdStart]: list };
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd
        };
      }
      return state;

    case  CONSTANTS.HAPUS_KARTU: {
      const { idDafar, id } = action.payload;

      const list = state[idDafar];
      const newCards = list.cards.filter(cardID => cardID !== id);

      return { ...state, [idDafar]: { ...list, cards: newCards } };
    }

    case  CONSTANTS.EDIT_LIST_TITLE: {
      const { idDafar, newTitle } = action.payload;

      const list = state[idDafar];
      list.title = newTitle;
      return { ...state, [idDafar]: list };
    }

    case  CONSTANTS.DELETE_LIST: {
      const { idDafar } = action.payload;
      const newState = state;
      delete newState[idDafar];
      return newState;
    }

    default:
      return state;
  }
};

export default daftarReducer;
