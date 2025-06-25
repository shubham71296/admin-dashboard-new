import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const initialState = {
  successMessage: "",
  errorMessage: "",
  loader: false,
  categories: [],
};

export const category_add = createAsyncThunk(
  "category/category_add",
  async (
    credentials: { categoryName: string; imageFile: File | null },
    { rejectWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("category_name", credentials.categoryName);
      if (credentials.imageFile) {
        formData.append("category_image", credentials.imageFile);
      }
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:5000/api/add_category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          },
        }
      );
      console.log("yyyyyyyyyyyyyyy",response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
      });
    }
  }
);

export const get_category = createAsyncThunk(
  "category/get_category",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("http://localhost:5000/api/get_category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.categories;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to fetch categories",
      });
    }
  }
);

export const category_update = createAsyncThunk(
  "category/category_update",
  async (
    credentials: {categoryId: string; categoryName: string; imageFile: File | null },
    { rejectWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("category_id", credentials.categoryId);
      formData.append("category_name", credentials.categoryName);
      if (credentials.imageFile) {
        formData.append("category_image", credentials.imageFile);
      }
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:5000/api/update_category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          },
        }
      );
      console.log("updateeeeeeeyyyyyyyyyyyyyyy",response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
      });
    }
  }
);


const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(category_add.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(category_add.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload?.message;
      })
      .addCase(category_add.rejected, (state, action:any) => {
        state.loader = false;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })

      .addCase(get_category.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(get_category.fulfilled, (state, action) => {
        state.loader = false;
        state.categories = action.payload;
      })
      .addCase(get_category.rejected, (state, action:any) => {
        state.loader = false;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })
//category_update
      .addCase(category_update.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(category_update.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload?.message;
      })
      .addCase(category_update.rejected, (state, action:any) => {
        state.loader = false;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })
  },
});

export const { clearMessages } = categorySlice.actions;
export default categorySlice.reducer;
