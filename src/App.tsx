import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routers } from "./routers";
const router = createBrowserRouter(routers);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
