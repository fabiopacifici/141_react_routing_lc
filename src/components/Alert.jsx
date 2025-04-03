import { useAlertContext } from "../contexts/alertContext"
export default function Alert() {
  // use the context and get the data and setter function
  const { alert, setAlert } = useAlertContext()
  // extract the type and message from the data alert
  const { type, message } = alert

  if (!message) return null

  return (
    <div
      className={`alert alert-${type || 'danger'}`}
      role="alert">
      <span onClick={() => setAlert({ type: '', message: '' })}>Close</span>
      <strong>{type}:</strong> {message}
    </div>
  )
}

