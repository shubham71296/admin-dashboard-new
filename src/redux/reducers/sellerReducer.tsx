import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ApiResponseError {
  message: string;
}

interface Seller {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "seller";
  status?: string;
  payment?: string;
  image?: string;
}

interface ApiResponseSuccess {
  message: string;
  sellers: Seller[];
}

interface SellerState {
  successMessage: string;
  errorMessage: string;
  loader: boolean;
  sellers: Seller[];
}

const initialState: SellerState = {
  successMessage: "",
  errorMessage: "",
  loader: false,
  sellers: [],
};

export const get_all_sellers = createAsyncThunk<
  ApiResponseSuccess,
  void,
  { rejectValue: ApiResponseError }
>("seller/get_all_sellers", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get(
      "http://localhost:5000/api/get-all-sellers",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue({
      message: error.response.data.message || "Unknown error occurred",
    });
  }
});

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_all_sellers.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(get_all_sellers.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.sellers = action.payload.sellers;
      })
      .addCase(get_all_sellers.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage =
          action.payload?.message || "Failed to fetch sellers.";
      });
  },
});

export const { clearMessages } = sellerSlice.actions;
export default sellerSlice.reducer;
