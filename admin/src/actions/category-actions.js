import { categoryConstant } from './constants';
import axios from '../helpers/axios';
export const getAllCategory = () => {
	return async (dispatch) => {
		dispatch({
			type: categoryConstant.GET_ALL_CATEGORIES_REQUEST,
		});
		const res = await axios.get(`category/getcategory`);
		if (res.status === 201) {
			const { categoryList } = res.data;
			dispatch({
				type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
				payload: { category: categoryList },
			});
		} else {
			dispatch({
				type: categoryConstant.GET_ALL_CATEGORIES_FAILURE,
				payload: { error: res.data.error },
			});
		}
	};
};
export const addCategory = (form) => {
	return async (dispatch) => {
		dispatch({
			type: categoryConstant.GET_ALL_CATEGORIES_REQUEST,
		});
		const res = await axios.post(`category/create`,form);
		if (res.status === 201) {
			dispatch({
				type: categoryConstant.ADD_NEW_CATEGORIES_SUCCESS,
				payload: { category: res.data.category }
			});
		} else {
			dispatch({
				type: categoryConstant.ADD_NEW_CATEGORIES_FAILURE,
				payload: { error: res.data.error },
			});
		}
	}
}