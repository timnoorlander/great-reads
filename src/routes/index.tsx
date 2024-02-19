import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { GenericError } from "../components/layout/GenericError";
import { MainLayout } from "../components/layout/MainLayout";
import { paths } from "../constants/paths";
import { Home } from "./home";
import { Books } from "./books";
import { Book } from "./book";

const router = createBrowserRouter([
  {
    path: paths.ROOT,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    errorElement: <GenericError />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: paths.BOOKS,
        element: <Books />,
      },
      {
        path: paths.BOOK,
        element: <Book />,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
