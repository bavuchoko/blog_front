import {needAuthApi, noAuhApi} from "../instance/Instance";


async function createContent(content) {
    try {
        const response = await needAuthApi.post('/content/create', content);
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}

async function deleteContentGame(id) {
    try {
        const response = await needAuthApi.delete('/content/delete/' + id);
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }

}

async function getContentList(loginUser) {
    try {
        const params ={
            sort: 'createDate,desc'
        }
        if(loginUser){
            return await needAuthApi.get('/content',
                {
                    params: params
                }
            );
        }else{
            return await noAuhApi.get('/content',
                {
                    params: params
                }
            );
        }
    } catch (error){
        return error;
    }
}

async function getContentInfo(contentId, loginUser) {
    try {
        if(loginUser) {
            return await needAuthApi.get('/content/' + contentId);
        }else{
            return await noAuhApi.get('/content/' + contentId);
        }
    }catch (error){
        return error;
    }
}



export {createContent, deleteContentGame, getContentList, getContentInfo};