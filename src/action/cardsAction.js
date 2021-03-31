import { CONSTANTS } from '../action'
// import uuid from 'uuidv4'

export const tambahKartu = (listID, text, judul, assign, todo, priority, startDate, endDate, status) => {
  const id = new Date().getTime()
  return {
    type: CONSTANTS.TAMBAH_KARTU,
    payload: {
      text,
      listID,
      id,
      judul,
      assign,
      todo,
      priority,
      startDate,
      endDate,
      status,
    },
  }
}

export const editKartu = (
  id,
  listID,
  newText,
  newJudul,
  newAssign,
  newTodo,
  newPriority,
  newStartDate,
  newEndDate,
  newStatus
) => {
  return {
    type: CONSTANTS.EDIT_KARTU,
    payload: {
      id,
      listID,
      newText,
      newJudul,
      newAssign,
      newTodo,
      newPriority,
      newStartDate,
      newEndDate,
      newStatus,
    },
  }
}

export const hapusKartu = (id, listID) => {
  return {
    type: CONSTANTS.HAPUS_KARTU,
    payload: {
      id,
      listID,
    },
  }
}
