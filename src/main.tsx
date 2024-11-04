import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import "./index.css"


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "team",
        element: <h1>Hi team</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
