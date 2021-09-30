import authReducer from './auth-reducers';
import userReducer from './user-reducers';
import productReducer from './product-reducers';
import categoryReducer from './category-reducers';
import orderReducer from './order-reducers';
import {combineReducers} from 'redux';

const rootReducers = combineReducers ({
    auth: authReducer,
    user: userReducer,
    category:categoryReducer,
    order:orderReducer,
    product:productReducer
});

export default rootReducers;