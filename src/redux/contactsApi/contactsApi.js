
import axios from 'axios';

// axios.defaults.baseURL = 'https://64231374001cb9fc20378b18.mockapi.io/'

export const  allContactsApi = async ()=>{
    const result = await axios.get('https://64231374001cb9fc20378b18.mockapi.io/contacts')
    return result.data
}

export const  addContactApi = async (contact)=>{
    const result = await axios.post('contacts', contact)
    return result.data
}



export const  deleteContactApi = async (id)=>{
    const result = await axios.delete(`contacts/${id}`)
    return result.data
}

export const  registerUserApi = async (objUser)=>{
    const result = await axios.post(`https://connections-api.herokuapp.com/users/signup`, objUser )
    return result.data
}
export const  loginUserApi = async (objUser)=>{
    const result = await axios.post(`https://connections-api.herokuapp.com/users/login`, objUser )
    return result.data
}
export const addContactsUser = async (objUser)=>{
    const result = await axios.post(`https://connections-api.herokuapp.com//contacts`, objUser )
    return result.data
}

export const getContactsUser = async ()=>{
    const result = await axios.get(`https://connections-api.herokuapp.com/contacts`)
    return result.data
}
export const deleteContactsUser = async (id)=>{
    const result = await axios.delete(`https://connections-api.herokuapp.com//contacts${id}` )
    return result.data
}