import React, { useContext } from 'react';
import { deleteClient, getClients } from '../../API';
import AppContext from '../../context/AppContext';
import './styles.css'

const ClientCard = ({id, name}) => {
  const {addClient1, addClient2 } = useContext(AppContext)
  let { updateList } = useContext(AppContext)
  const deleted = async () =>{
    const response1 = deleteClient(id)
    const response = await getClients()
    addClient1([...response.data.line1])
    addClient2([...response.data.line2])
    updateList = ''
  }
  return (
    <article>
      <h4>{id}</h4>
      <p>{name}</p>
      <button className='delete' onClick={() => deleted()}>Delete</button>
    </article>
  );
};

export default ClientCard;