import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/route.tsx";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
