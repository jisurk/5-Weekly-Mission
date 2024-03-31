import { BASE_URL } from '../utills/constantSetting.js';

export const getFolderInfo = async () => {

    try{
        const response = await fetch(`${BASE_URL}/api/sample/folder`);
        if(!response.ok){
            throw new Error(`${response.status}`);
        }

        const result = await response.json();
        return result;
    }catch(error){
        alert(`${error.message}에러 발생!`);
        return false;
    }

}