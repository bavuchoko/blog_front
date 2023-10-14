import {needAuthApi, noAuhApi} from "../instance/Instance";


async function getMenus(loginUser) {

    localStorage.removeItem('menu');
    try{
        if(loginUser) {
            const response = await needAuthApi.get('/menu');
            localStorage.setItem('menu', JSON.stringify(response.data));
            return response
        }else{
            const response = await noAuhApi.get('/menu');
            localStorage.setItem('menu', JSON.stringify(response.data));
            return response
        }
    }catch (error){
        return error;
    }
}

export {getMenus};