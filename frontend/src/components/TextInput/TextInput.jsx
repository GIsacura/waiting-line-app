import { useField } from "formik"
import './styles.css'

const TextInput = ({label, ...props}) => {
  const [field, meta] = useField(props) 

  return(
    <div>
      <label>{label}</label>
      <section>
        <input {...field} {...props}/>
        {meta.touched && meta.error ? <div className="error-message">{meta.error}</div> : null}
      </section>
    </div>
  )
}

export default TextInput