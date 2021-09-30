import axios from '../helpers/axios';
export const addProduct = (form) => {
    for(let h of form){
        console.log(h);
    }
    
	return async (dispatch) => {
        const res = await axios.post(`product/create`,form);
        console.log(res);
        
    }
}