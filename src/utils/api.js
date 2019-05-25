export const URL_API = "http://127.0.0.1:3000";
import axios from 'axios';

export const devopsAPI = axios.create({
  baseURL: URL_API,
});

export function setJWT(jwt) {
  if (jwt !== null) {
    devopsAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  }
}


export async function apiGet(url) {
  return new Promise((resolve, reject) => {
    devopsAPI.get(URL_API.concat(url)).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
});
}
  
export async function apiPost(url, payload) {
  return new Promise((resolve, reject) => {
    devopsAPI.post(URL_API.concat(url), payload).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

export async function apiPut(url, payload) {
  return new Promise((resolve, reject) => {
    devopsAPI.put(URL_API.concat(url), payload).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

export async function apiPatch(url, payload) {
  return new Promise((resolve, reject) => {
    devopsAPI.patch(URL_API.concat(url), payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
