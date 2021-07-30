import { userConstant } from '../actions/constants';

const initState = {
    message:'',
    error:null,
    loading:false
};
export default (state = { initState }, action) => {
	switch (action.type) {
		case userConstant.USER_REGISTER_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;
		case userConstant.USER_REGISTER_SUCCESS:
			state = {
				...state,
                loading:false,
                message:action.payload.message
			};
			break;
		case userConstant.USER_REGISTER_FAILURE:
			state={
                ...state,
                loading:false,                
                message:action.payload.error
			};
			break;
	}
	return state;
};
