import axios from "axios";


const headers ={ Authorization: `Bearer ${localStorage.getItem('token')}` }

export const API =axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers,
})


export function setAuthToken(token: string) {
    if(token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.common["Authorization"]
    }
  }