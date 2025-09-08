import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThirdwebProvider } from 'thirdweb/react'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThirdwebProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ThirdwebProvider>
  </StrictMode>,
)
