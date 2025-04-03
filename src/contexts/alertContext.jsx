import { createContext, useContext, useState } from "react";


const AlertContext = createContext();


// create a custom prodvider component
function AlertProvider({ children }) {

  const [alert, setAlert] = useState({ type: '', message: '' })


  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  )


}

// create a custom hook
function useAlertContext() {
  return useContext(AlertContext)
}

// export the data

export { useAlertContext, AlertProvider }