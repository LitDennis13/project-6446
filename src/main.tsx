import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { state } from "./state/state.js";

import router from "./routes.tsx";

import "./general-styles/index.css"
import "./general-styles/josh-comeau-css-reset.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={state}>
      <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>,
) 
