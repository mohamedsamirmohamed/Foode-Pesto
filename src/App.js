import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Chefs from './Components/Chefs/Chefs';
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Faqs from "./Components/Faqs/faqs";
import AllProducts from "./Components/AllProducts/AllProducts";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails";
import Cart from "./Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/chefs", element: <Chefs /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faqs", element: <Faqs /> },
      { path: "/all-products", element: <AllProducts /> },
      { path: "/product/:id", element: <ProductsDetails /> },
      { path: "/cart", element: <Cart /> }
    ]
  }
], {
  future: {
    v7_startTransition: true,  
    v7_relativeSplatPath: true
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
