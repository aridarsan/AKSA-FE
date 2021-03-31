import { CONSTANTS } from "../action";


const initialState = {
  "list-0" : {
    id: "list-0",
    cards: ["card-0"],
    title: "My List",
    // papan: "papan-0"
    
  }
}

const daftarReducer = (state = initialState, action) => {
  switch (action.type) {
    case  CONSTANTS.TAMBAH_DAFTAR: {
      const { title, id } = action.payload;
      const newDaftar = {
        title: title,
        id: `list-${id}`,
        kartu: []
      };

      const newState = { ...state, [`list-${id}`]: newDaftar };

      return newState;
    }

    case  CONSTANTS.TAMBAH_KARTU: {
      const { listID, id } = action.payload;
      console.log(listID)
      const list = state[listID];
      list.kartu.push(`card-${id}`);
      return { ...state, [listID]: list };
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
      const { listID, id } = action.payload;

      const list = state[listID];
      const newCards = list.cards.filter(cardID => cardID !== id);

      return { ...state, [listID]: { ...list, cards: newCards } };
    }

    case  CONSTANTS.EDIT_DAFTAR: {
      const { listID, newTitle } = action.payload;

      const list = state[listID];
      console.log(list)
      list.judul = newTitle;
      return { ...state, [listID]: list };
    }

    case  CONSTANTS.HAPUS_DAFTAR: {
      const { listID } = action.payload;
      const newState = state;
      delete newState[listID];
      return newState;
    }

    default:
      return state;
  }
};

export default daftarReducer;
