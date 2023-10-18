import {needAuth, noAuh} from "../instance/Instance";


async function getMenus(loginUser) {

    localStorage.removeItem('menu');
    try{
        if(loginUser) {
            const response = await needAuth.get('/menu');
            localStorage.setItem('menu', JSON.stringify(response.data));
            return response
        }else{
            const response = await noAuh.get('/menu');
            localStorage.setItem('menu', JSON.stringify(response.data));
            return response
        }
    }catch (error){
        return error;
    }
}

export {getMenus};