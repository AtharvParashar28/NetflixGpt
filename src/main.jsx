import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'


createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
      <RouterProvider router={router}/>
    </Provider>
)

// Removed strict mode
// <StrictMode>
