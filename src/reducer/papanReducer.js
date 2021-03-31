import { CONSTANTS } from "../action";

const initialState = {
  "board-0": {
    id: "board-0",
    title: "myboard",
    lists: ["list-0"],
  }
};

const papanReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case CONSTANTS.TAMBAH_DAFTAR: {
      const { boardId, id } = action.payload;
      const board = state[boardId];
      console.log(board)
      const newIdDaftar = `list-${id}`;
      const newLists = [...board.lists, newIdDaftar];
      board.lists = newLists;
      return { ...state, [boardId]: board };
    }

    case CONSTANTS.GESER: {
      const { boardId } = action.payload;
      const board = state[boardId];
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

        return { ...state, [boardId]: board };
      }
      return state;
    }

    case CONSTANTS.HAPUS_DAFTAR: {
      const { listID, boardId } = action.payload;
      const board = state[boardId];
      const lists = board.lists;
      const newLists = lists.filter(id => id !== listID);
      board.lists = newLists;
      return { ...state, [boardId]: board };
    }

    case CONSTANTS.TAMBAH_PAPAN: {
      const { title, id } = action.payload;
      const newID = `board-${id}`;
      const newBoard = {
        id: newID,
        title,
        lists: []
      };

      return { ...state, [newID]: newBoard };
    }

    default:
      return state;
  }
};

export default papanReducer;
