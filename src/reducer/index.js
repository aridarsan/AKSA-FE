import { combineReducers } from "redux";
import daftarReducer from "./daftarReducer";
import kartuReducer from "./kartuReducer";
import papanReducer from "./papanReducer";
import papanOrderReducer from "./papanOrderReducer";
import papanAktifReducer from "./papanAktifReducer";

export default combineReducers({
  lists: daftarReducer,
  cards: kartuReducer,
  boards: papanReducer,
  boardOrder: papanOrderReducer,
  activeBoard: papanAktifReducer
});