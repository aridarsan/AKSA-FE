import { CONSTANTS } from '../action'
// import uuid from "uuidv4";

export const tambahDaftar = (title) => {
  return (dispatch, getState) => {
    const boardId = getState().papanAktif
    const id = new Date().getTime()
    dispatch({
      type: CONSTANTS.TAMBAH_DAFTAR,
      payload: { title, boardId, id },
    })
  }
}

export const sort = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId, type) => {
  return (dispatch, getState) => {
    const boardId = getState().papanAktif
    dispatch({
      type: CONSTANTS.GESER,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        boardId,
      },
    })
  }
}

export const editJudul = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_DAFTAR,
    payload: {
      listID,
      newTitle,
    },
  }
}

export const hapusDaftar = (listID) => {
  return (dispatch, getState) => {
    const boardId = getState().papanAktif
    return dispatch({
      type: CONSTANTS.HAPUS_DAFTAR,
      payload: {
        listID,
        boardId,
      },
    })
  }
}
