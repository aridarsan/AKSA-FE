import { CONSTANTS } from "../action";

const initialState = {
  "board-0": {
    id: "board-0",
    lists: ["list-0"],
    title: "myboard"
  }
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.TAMBAH_DAFTAR: {
      const { idPapan, id } = action.payload;
      const board = state[idPapan];
      const newIdDaftar = `list-${id}`;
      const newLists = [...board.lists, newIdDaftar];
      board.lists = newLists;
      return { ...state, [idPapan]: board };
    }

    case CONSTANTS.GESER: {
      const { idPapan } = action.payload;
      const board = state[idPapan];
      const lists = board.lists;
      const {
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = action.payload;

      // draggin lists around
      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.lists = lists;

        return { ...state, [idPapan]: board };
      }
      return state;
    }
    case CONSTANTS.HAPUS_DAFTAR: {
      const { listID, idPapan } = action.payload;
      const board = state[idPapan];
      const lists = board.lists;
      const newLists = lists.filter(id => id !== listID);
      board.lists = newLists;
      return { ...state, [idPapan]: board };
    }

    case CONSTANTS.TAMBAH_PAPAN: {
      const { judul, id } = action.payload;
      const newID = `board-${id}`;
      const newBoard = {
        id: newID,
        judul,
        lists: []
      };

      return { ...state, [newID]: newBoard };
    }

    default:
      return state;
  }
};

export default boardsReducer;
