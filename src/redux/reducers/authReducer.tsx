import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface Credentials {
  name?: string;
  email: string;
  password: string;
}

interface ApiResponseSuccess {
  token: string;
  message: string;
}

interface ApiResponseError {
  message: string;
}


interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "seller";
  status?: string;
  payment?: string;
  image?: string;
}

interface ApiUserInfoSuccess {
  message: string;
  user: User;
}

interface DecodedToken {
  id: string;
  role: string;
  exp: number;
  iat?: number;
}

const returnRole = (token: string) => {
  if (token) {
    const decodeToken = jwtDecode<DecodedToken>(token);
    const expireTime = new Date(decodeToken.exp * 1000);
    if (new Date() > expireTime) {
      localStorage.removeItem("accessToken");
      return "";
    } else {
      return decodeToken.role;
    }
  } else {
    return "";
  }
};

interface AuthState {
  successMessage: string;
  errorMessage: string;
  loader: boolean;
  userInfo: User | null;
  role: string;
  token: string;
}

const initialState: AuthState = {
  successMessage: "",
  errorMessage: "",
  loader: false,
  userInfo: null,
  role: returnRole(localStorage.getItem("accessToken") || ""),
  token: "",
};

export const admin_login = createAsyncThunk<
  ApiResponseSuccess,
  Credentials,
  { rejectValue: ApiResponseError }
>("auth/admin_login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/admin-login",
      credentials
    );
    const token = response.data.token;
    localStorage.setItem("accessToken", token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue({
      message: error.response.data.message,
    });
  }
});

export const seller_resigter = createAsyncThunk<
  ApiResponseSuccess,
  Credentials,
  { rejectValue: ApiResponseError }
>("auth/seller_resigter", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/seller-signup",
      credentials
    );
    const token = response.data.token;
    localStorage.setItem("accessToken", token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue({
      message: error.response.data.message,
    });
  }
});

export const seller_login = createAsyncThunk<
  ApiResponseSuccess,
  Credentials,
  { rejectValue: ApiResponseError }
>("auth/seller_login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/seller-login",
      credentials
    );
    const token = response.data.token;
    localStorage.setItem("accessToken", token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue({
      message: error.response.data.message,
    });
  }
});

export const user_info = createAsyncThunk<
ApiUserInfoSuccess,
string,
{ rejectValue: ApiResponseError }
>(
  "auth/user_info",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
      });
    }
  }
);




const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.token = action.payload.token;
        state.role = returnRole(action.payload.token);
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })

      .addCase(seller_resigter.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(seller_resigter.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.token = action.payload.token;
        state.role = returnRole(action.payload.token);
      })
      .addCase(seller_resigter.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })

      .addCase(seller_login.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(seller_login.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.token = action.payload.token;
        state.role = returnRole(action.payload.token);
      })
      .addCase(seller_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })


      .addCase(user_info.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(user_info.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.userInfo = action.payload.user;
      })
      .addCase(user_info.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.message || "Something went wrong";
      });

      
  },
});

export const { clearMessages } = authSlice.actions;
export default authSlice.reducer;
