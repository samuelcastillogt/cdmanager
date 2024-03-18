import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
