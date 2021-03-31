import { CONSTANTS } from '../action'
// import uuid from 'uuidv4'

export const setPapanAktif = (id) => {
  return {
    type: CONSTANTS.PAPAN_AKTIF,
    payload: {
      id,
    },
  }
}

export const tambahPapan = (title) => {
  const id = new Date().getTime()
  return {
    type: CONSTANTS.TAMBAH_PAPAN,
    payload: {
      title,
      id,
    },
  }
}
