import { apiPost, apiGet } from '@/utils/api';

export async function loginPost(username, password) {
    try{
        const res = await apiPost('/user/get-token',{'identifiant':username,'password': password});
        return res;
    }
    catch (error) {
        console.log(error)
        return {"status" : 403};
    }
    
}

export async function getDatasFromUp(up) {
    try {
        const res = await apiGet(`/up/${up}`);
        return res;
    } catch (error) {
        console.log(error)
        return {"status": 500};
    }
}
export async function getDatasFromUpWithMesures(up, mesure) {
    try {
        const res = await apiGet(`/up/${up}/${mesure}`);
        return res;
    } catch (error) {
        console.log(error)
        return {"status": 500};
    }
}