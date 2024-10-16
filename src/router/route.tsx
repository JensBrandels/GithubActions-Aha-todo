import { createBrowserRouter } from "react-router-dom";

//Page imports
import LandingPage from "../pages/LandingPage.tsx";
import TodosPage from "../pages/TodosPage.tsx";

function isProduction() {
  console.log(import.meta.env);
  if (import.meta.env.PROD) return { basename: import.meta.env.BASE_URL };
  else return {};
}

const router = createBrowserRouter(
  [
    {
      path: "/", //startsidan
      element: <LandingPage />,
    },
    {
      path: "/todos", //sidan för todos
      element: <TodosPage />,
    },
  ],
  isProduction()
);

export default router;
