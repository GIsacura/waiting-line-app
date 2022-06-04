import axios from 'axios'
import { useContext } from 'react'
import AppContext from '../context/AppContext'
import initialState from './useInitialState'

const API_URL = 'http://localhost:3001/api/v1/'


export const getClients = async () =>{
  const response = await axios(`${API_URL}clients`)
  // console.log("getClients:", response)

  return response
}

export const addClient = async (values) => {
  const response = await axios.post(`${API_URL}clients`, values)
  console.log("addClients:", response)

  return response
}

export const deleteClient = async (id) => {
  const response = await axios.delete(`${API_URL}clients/${id}`)

  return response
}
