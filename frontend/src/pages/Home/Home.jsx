import { useContext, useEffect } from 'react'
import ClientCard from '../../components/ClientCard/ClientCard'
import FormContainer from '../../components/Form/FormContainer'
import { getClients } from '../../API'
import AppContext from '../../context/AppContext'
import './index.css'


function Home() {
  const {line1, line2, addClient1, addClient2 } = useContext(AppContext)

  useEffect(() => async () => {
    // Geting the list of clients from the api
    const response = await getClients()
    addClient1([...response.data.line1])
    addClient2([...response.data.line2])
  },[])

  return (
    <section className='App'>
      <h1>Waiting line App</h1>
      <FormContainer/>

      <section className='lines'>
        <section className='line-container'>
          <h2>Line 1</h2>
          <span>(2min)</span>
          {line1.length > 0 && <section className='line'>
            {line1.map(item =>(
              <ClientCard order={line1.indexOf(item) + 1} id={item.id} name={item.name} key={item.id}/>
            ))}
          </section>}
        </section>
        <section className='line-container'>
          <h2>Line 2</h2>
          <span>(3min)</span>
          {line2.length > 0 && <section className='line'>
            {line2.map(item =>(
              <ClientCard order={line2.indexOf(item) + 1} id={item.id} name={item.name} key={item.id}/>
            ))}
          </section>}
        </section>
      </section>
    </section>
  )
}

export default Home
