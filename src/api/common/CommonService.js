import {noAuh} from "../instance/Instance";




async function getNotice() {
    try {
        const response = await noAuh.get('/notice/recent');
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}



async function getRecentContent() {
    try {
        const response = await noAuh.get('/content/recent');
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}




async function getRecentReply() {
    try {
        const response = await noAuh.get('/reply/recent');
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}


async function getVisitCount() {
    try {
        const response = await noAuh.get('/visit');
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}

async function getLinks() {
    try {
        const response = await noAuh.get('/links');
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}

async function getTags() {
    try {
        const response = await noAuh.get('/visit');
        if (response.status === 200) {
            return response;
        }
    }catch (error){
        return error
    }
}
export {getNotice ,getRecentContent, getRecentReply, getVisitCount, getLinks, getTags};