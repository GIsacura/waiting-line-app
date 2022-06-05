import axios from 'axios'
import { useContext } from 'react'
import AppContext from '../context/AppContext'
import initialState from './useInitialState'

const API_URL = 'http://localhost:3001/api/v1/'


export const getClients = async () =>{
  //Conection to backend to get the list of clients
  const response = await axios(`${API_URL}clients`)
  
  return response
}

export const addClient = async (values) => {
  //Conection to backend to add a client
  const response = await axios.post(`${API_URL}clients`, values)

  return response
}

export const deleteClient = async (id) => {
  //Conection to backend to delete a client by sending the id 
  const response = await axios.delete(`${API_URL}clients/${id}`)

  return response
}
