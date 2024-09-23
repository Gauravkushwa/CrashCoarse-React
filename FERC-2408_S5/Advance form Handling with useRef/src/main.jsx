import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from './components/Form.jsx'
import FormSubmission from './components/formSubmission.jsx'
import InputValidation from './components/inputValidation.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
    <InputValidation />
    <FormSubmission />
  </StrictMode>,
)
