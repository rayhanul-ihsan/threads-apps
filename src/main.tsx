import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom' 
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './stores/rootReducer.ts'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: rootReducer,
  
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <ChakraProvider theme={ex}>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
