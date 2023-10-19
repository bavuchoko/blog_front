import {needAuth, noAuh} from "../instance/Instance";


async function createContent(content) {
    try {
        const response = await needAuth.post('/content/create', content);
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}

async function deleteContentGame(id) {
    try {
        const response = await needAuth.delete('/content/delete/' + id);
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }

}

async function getContentList(loginUser, queryString) {
    try {
        const params ={
            category : queryString,
            sort: 'createDate,desc'
        }
        if(loginUser){
            return await needAuth.get('/content'+queryString,
                {
                    params: params
                }
            );
        }else{
            return await noAuh.get('/content',
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
            return await needAuth.get('/content/' + contentId);
        }else{
            return await noAuh.get('/content/' + contentId);
        }
    }catch (error){
        return error;
    }
}



export {createContent, deleteContentGame, getContentList, getContentInfo};