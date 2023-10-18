import {noAuh} from "../instance/Instance";


async function useLogin(loginUser) {
    localStorage.removeItem('accessToken');
    try{
        const response = await noAuh.post('/user/authentication', loginUser);
        const user ={
            "id":response.data.id,
            "name":response.data.name,
            "birth":response.data.birth,
            "joinDate":response.data.joinDate,
            "gender":response.data.gender,
            "success":true,
            "accessToken":response.data.accessToken
        }
        localStorage.setItem('accessToken',response.data.accessToken);
        localStorage.setItem('loginUser',JSON.stringify(user));
        return user;
    }catch (error){
        return error;
    }
}

async function tokenVaildation() {
    const token = localStorage.getItem('accessToken');
    try{
        return  await noAuh.post('/user/tokenVaildation', token);
    }catch (error){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('loginUser');
        return error;
    }
}

async function userJoin(loginUser) {
    try{
        const response = await noAuh.post('/user/create', loginUser);
        localStorage.setItem('accessToken',response.data);
        return response;
    }catch (error){
        return error;
    }
}

export {useLogin,tokenVaildation, userJoin };