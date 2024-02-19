import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom' 
// import {ThemeProvider} from './providers/themeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider>
      </ThemeProvider> */}
        <ChakraProvider>
          <App />
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
