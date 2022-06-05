import React, { useContext } from 'react';
import { deleteClient, getClients } from '../../API';
import AppContext from '../../context/AppContext';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ClientCard = ({id, name, order}) => {
  const {addClient1, addClient2 } = useContext(AppContext)

  const deleted = async () =>{

    //Function to delete a client from a list
    await deleteClient(id)

    // Updating the list of clients
    const response = await getClients()
    addClient1([...response.data.line1])
    addClient2([...response.data.line2])

  }
  return (
    <article>
      <h6>{order}</h6>
      <h4>{id}</h4>
      <p>{name}</p>
      <span className='delete' onClick={() => deleted()}>
        <FontAwesomeIcon icon={faXmark}/>
      </span>
    </article>
  );
};

export default ClientCard;