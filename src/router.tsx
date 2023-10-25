import {   createHashRouter} from "react-router-dom";
import App from './App.tsx'



export default   createHashRouter([
  {
    path: "/",
    element:( <>首页<App/></>),
  },
  {
    path: "/register",
    element: <div >register页面</div>,
  },
  {
    path: "/login",
    element: <div >dengru</div>,
  },
  {
    path: "/register",
    element: <div >register页面</div>,
  },

])
