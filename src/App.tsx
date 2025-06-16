import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_info } from "./redux/reducers/authReducer";
import type { RootState, AppDispatch } from "./redux/store";
import Router from "./router/Router";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && !userInfo) {
      dispatch(user_info(token));
    }
  }, []);

  return <Router />;
};

export default App;
