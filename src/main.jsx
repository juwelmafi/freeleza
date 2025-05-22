import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthPrivider from './providers/AuthPrivider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthPrivider>
      <Toaster position="bottom-right" reverseOrder={false} />
      <RouterProvider router={router} />
     </AuthPrivider>
  </StrictMode>,
)
