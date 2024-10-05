import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Login from "./components/Login";
import Mail from "./components/Mail";
import Navbar from "./components/Navbar";
import SendEmail from "./components/SendEmail";
import Signup from "./components/Signup";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
]);
function App() {
  return (
    <>
      <div className="bg-[#f6f8fc] h-screen">
        <Navbar />
        <RouterProvider router={appRouter} />
        <div className="absolute w-[30%] bottom-0 right-20 z-10">
          <SendEmail />
        </div>
       <Toaster/>
      </div>
    </>
  );
}

export default App;
