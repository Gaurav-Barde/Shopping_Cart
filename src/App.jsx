import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./pages/Store";
import CartProvider from "./CartContext";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorBoundary";
import ViewCart from "./components/ViewCart";
import MainContainer from "./components/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <NavBar />
        <MainContainer />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/",
        element: <Store />,
      },
      {
        path: "viewcart",
        element: <ViewCart />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider children={"Children"}>
      <div className="p-16">
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </CartProvider>
  );
}

export default App;
