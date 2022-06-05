import React, { useContext } from 'react';
import { deleteClient, getClients } from '../../API';
import AppContext from '../../context/AppContext';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ClientCard = ({id, name, order}) => {
  const {addClient1, addClient2 } = useContext(AppContext)
  let { updateList } = useContext(AppContext)
  const deleted = async () =>{
    await deleteClient(id)
    const response = await getClients()
    addClient1([...response.data.line1])
    addClient2([...response.data.line2])
    updateList = ''
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