import React, { Suspense } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
const EntryLayout = React.lazy(
  () => import("../layouts/EntryLayout/EntryLayout")
);
const LandingLayout = React.lazy(
  () => import("../layouts/LandingLayout/LandingLayout")
);

const Product = React.lazy(() => import("../pages/Product/Product"));

const Cart = React.lazy(() => import("../pages/Cart/Cart"));

const About = React.lazy(() => import("../pages/About/About"));

const ProductDetails = React.lazy(
  () => import("../pages/ProductDetails/ProductDetails")
);

const index = () => {
  const routes = createBrowserRouter([
    {
      element: (
        <Suspense fallback={"...loading"}>
          <EntryLayout />
        </Suspense>
      ),
      path: "/",
    },

    {
      element: (
        <Suspense fallback={"...loading"}>
          <LandingLayout />
        </Suspense>
      ),
      path: "/home",
      children: [
        {
          path: "",
          element: <Navigate to={"product"} />,
        },
        {
          element: (
            <Suspense fallback={"...loading"}>
              <Product />
            </Suspense>
          ),
          path: "product",
        },
        {
          element: (
            <Suspense fallback={"...loading"}>
              <ProductDetails />
            </Suspense>
          ),
          path: "product/:id",
        },
        {
          element: (
            <Suspense fallback={"...loading"}>
              <About />
            </Suspense>
          ),
          path: "about",
        },
        {
          element: (
            <Suspense fallback={"...loading"}>
              <Cart />
            </Suspense>
          ),
          path: "cart",
        },
      ],
    },
    {
      element: "Page Not Found",
      path: "*",
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default index;
