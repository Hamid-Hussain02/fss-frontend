import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customAxios } from "../../services/auth-header";

export const getAllClients = createAsyncThunk(
  "Clients/getAllClients",
  async () => {
    console.log("loginasync");

    const response = await customAxios.get(
      `${process.env.REACT_APP_BASE_URL}user/`
    );
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

// export const updateUser = createAsyncThunk(
//   "userReservation/updateUser",
//   async (payload) => {
//     console.log("getuserreservation");

//     const response = await customAxios.post(
//       `${process.env.REACT_APP_BASE_URL}user/update`,
//       { id: payload.id, name: payload.name, contact: payload.contact }
//     );
//     console.log(response);
//     // localStorage.setItem('token',response.data.token)
//     return response.data;
//   }
// );

const initialState = {
  users: [],
  //   loginResponse: false,
  //   token: "",
  //   updateUserResponse: false,
};

const clientsSlice = createSlice({
  name: "Clients",
  initialState,
  reducers: {
    loggedIn: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {
    [getAllClients.pending]: () => {
      console.log("Pending");
    },
    [getAllClients.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully", payload);

      return {
        ...state,
        users: payload,
      };
    },
    [getAllClients.rejected]: () => {
      console.log("Rejected");
    },

    // [updateUser.pending]: () => {
    //   console.log("Pending");
    // },
    // [updateUser.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully", payload);

    //   return { ...state, updateUserResponse: true };
    // },
    // [updateUser.rejected]: () => {
    //   console.log("Rejected");
    //   return { updateUserResponse: false };
    // },
  },
});

// export const getLoginResponse = (state) => state.loginResponse;
export const getLogedInUser = (state) => state.user;
export default clientsSlice.reducer;
