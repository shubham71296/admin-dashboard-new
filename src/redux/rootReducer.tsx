import authReducer from './reducers/authReducer';
import categoryReducer from './reducers/categoryReducer';
import sellerReducer from './reducers/sellerReducer';

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  seller: sellerReducer
};

export default rootReducer;
