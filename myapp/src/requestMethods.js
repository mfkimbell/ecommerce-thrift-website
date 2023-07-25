import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQ4MTExODdmOWI4YWUyMjkxZGRlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTk1OTU2NywiZXhwIjoxNjkwMjE4NzY3fQ.Ty_OqD2vjUmVRR9tQ8OEVZDVsm2SPvvwb27tkg7Ly3o"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});