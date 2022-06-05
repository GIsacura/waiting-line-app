import { useField } from "formik"
import './styles.css'

const TextInput = ({label, ...props}) => {
  const [field, meta] = useField(props) // Se le pasan las props al hook useField para que el asigne en el campo field el valor de la propiedad name

  return(
    <div>
      <label>{label}</label>
      <section>
        <input {...field} {...props}/> {/* Aca tambien podemos pasar el destructuring de las props para que si nosotros queremos cambiar el valor de las propiedades value, onChange y onBlur que le asigna Formik, se las pasamos por parametros al componente y el reasigna el valor */}
        {meta.touched && meta.error ? <div className="error-message">{meta.error}</div> : null}
      </section>
    </div>
  )
}

export default TextInput