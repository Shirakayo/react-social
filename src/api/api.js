import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f135cd82-6a06-4035-b35c-5e4affe1ac79"}
});


export const getUsers = (currentPage= 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const getProfile = (userId) => {
    return instance.get(  `profile/ + ${userId}`)
}

export const getFollowDelete = (id) => {
    return (
        instance.delete('follow/' + id,  {
    }).then(response => response.data))
}
export const getFollowPost = (id) => {
    return (
        instance.post('follow/' + id, {}, {
    }).then(response => response.data))
}

export const getLogin = () => {
    return (
        instance.get(`auth/me`, {
        }).then(response => response.data)
    )
}