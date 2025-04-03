
import { createRoot } from 'react-dom/client'
import './index.css'
import * as bootstrap from 'bootstrap'

import App from './App.jsx'
import { AlertProvider } from './contexts/alertContext.jsx'

createRoot(document.getElementById('root')).render(
  <AlertProvider>
    <App />
  </AlertProvider>

)
