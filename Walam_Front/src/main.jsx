import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/index'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './api/apiSlice.js'
import store from './api/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ApiProvider api={apiSlice} store={store}>
    <RouterProvider router={router} />
  </ApiProvider>

)
