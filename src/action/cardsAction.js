import { CONSTANTS } from '../action'
import uuid from 'uuidv4'

export const tambahKartu = (idDaftar, text, judul, assign, todo, priority, startDate, endDate, status) => {
  const id = uuid()
  return {
    type: CONSTANTS.TAMBAH_KARTU,
    payload: {
      text,
      idDaftar,
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
  idDaftar,
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
      idDaftar,
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

export const hapusKartu = (id, idDaftar) => {
  return {
    type: CONSTANTS.HAPUS_KARTU,
    payload: {
      id,
      idDaftar,
    },
  }
}
