import { Formik, Form } from 'formik'
import { addClient, getClients } from '../../API'
import TextInput from '../TextInput/TextInput'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import './styles.css'

const validate = (values) =>{
  const errors = {}

  if(!values.id){
    errors.id = 'Requerido'
  }

  if(!values.name){
    errors.name = 'Requerido'
  }

  return errors
}

function FormContainer() {
  const {addClient1, addClient2 } = useContext(AppContext)
  let { updateList } = useContext(AppContext)
  const submitForm = async values =>{
    addClient(values)
    const response = await getClients()
    addClient1([...response.data.line1])
    addClient2([...response.data.line2])
    updateList = ''
  }

  return (
    <Formik
      initialValues={{
        id: '',
        name: ''
      }}
      validate={validate}
      onSubmit={values => submitForm(values)}
    >
      <Form className='form'>
        <TextInput name='id' label="Id"/>
        <TextInput name='name' label="Nombre"/>
        <button type='submit'>Guardar</button>
      </Form>

    </Formik>
  )
}

export default FormContainer
