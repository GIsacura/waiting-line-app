import { Formik, Form } from 'formik'
import { addClient, getClients } from '../../API'
import TextInput from '../TextInput/TextInput'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import './styles.css'

//Function to validate the form's inputs
const validate = (values) =>{
  const errors = {}

  const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

  //Validating id
  if(!values.id){
    errors.id = 'Required'
  }else if(values.id.length > 8 || values.id.length < 6){
    errors.id = 'The id must have 6 character min and 8 character max'
  }

  //Validating name
  if(!values.name){
    errors.name = 'Required'
  }else if(values.name.length < 2){
    errors.name = 'The id must have 2 character min'
  }else if(!regex.test(values.name)){
    errors.name = 'Insert a valid name'
  }

  return errors
}

function FormContainer() {
  const {addClient1, addClient2 } = useContext(AppContext)
  const submitForm = async values =>{
    //Function to add a client to a list
    await addClient(values)
    // Updating the list
    const response = await getClients()
    addClient1([...response.data.line1])
    addClient2([...response.data.line2])
  }

  return (
    <Formik
      initialValues={{
        id: '',
        name: ''
      }}
      validate={validate} // Calling the validation function
      onSubmit={values => submitForm(values)}
    >
      <Form className='form'>
        <TextInput name='id' label="Id"/>
        <TextInput name='name' label="Name"/>
        <button type='submit'>Add</button>
      </Form>

    </Formik>
  )
}

export default FormContainer
