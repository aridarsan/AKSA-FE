import { CONSTANTS } from "../action";
import uuid from "uuidv4";

export const tambahDaftar = title => {
  return (dispatch, getState) => {
    const idPapan = getState().papanAktif;
    const id = uuid();
    dispatch({
      type: CONSTANTS.TAMBAH_DAFTAR,
      payload: { title, idPapan, id }
    });
  };
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const idPapan = getState().papanAktif;
    dispatch({
      type: CONSTANTS.GESER,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        idPapan
      }
    })
  }
}

export const editJudul = ( idDaftar, newJudul) => {
  return {
    type: CONSTANTS.EDIT_DAFTAR,
    payload: {
      idDaftar,
      newJudul
    }
  };
};

export const hapusDaftar = (idDaftar) => {
  return (dispatch, getState) => {
    const idPapan = getState().papanAktif;
    return dispatch({
      type: CONSTANTS.HAPUS_DAFTAR,
      payload: {
        idDaftar,
        idPapan
      }
    });
  };
};