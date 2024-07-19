import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Registro from './pages/Registro.tsx';
import Modal from "./components/Modal.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Modal />
    <RouterProvider router={router} />
  </Provider>
)
