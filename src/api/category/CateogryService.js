import {needAuth, noAuh} from "../instance/Instance";


async function getCategoryList() {
    localStorage.removeItem('category');
    try{
        const response = await noAuh.get('/category');
        localStorage.setItem('category', JSON.stringify(response.data._embedded.categoryDtoList));
        return response
    }catch (error){
        return error;
    }
}


async function createCategory(category) {
    localStorage.removeItem('category');
    try{
        const response = await noAuh.post('/category', category);
        localStorage.setItem('category', JSON.stringify(response.data));
        return response
    }catch (error){
        return error;
    }
}

export {getCategoryList, createCategory};