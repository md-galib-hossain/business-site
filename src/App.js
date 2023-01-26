import "./App.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/Routes";

function App() {
  return (
    <div className="w-full max-w[1440px] mx-auto bg-white">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
