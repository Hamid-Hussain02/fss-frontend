import { configureStore } from "@reduxjs/toolkit";
import adminLoginReducer from "./slices/adminLogin-slice";
import clientsReducer from "./slices/client-slice";
// import reservationsReducer from "./slices/reservations-slice";
// import customerReducer from './slices/cutomer-slice'

export const store = configureStore({
  reducer: {
    login: adminLoginReducer,
    clients: clientsReducer,
    // reservations:reservationsReducer,
    // userReservation:customerReducer
  },
});
