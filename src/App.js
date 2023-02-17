import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./page/User";
import Admin from "./page/Admin";
import Error from "./page/Error";
import About from "./page/About";
import SingleProduct from "./page/SingleProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateProductForm from "./page/Admin/CreateProductForm";
import UpdateProductForm from "./page/Admin/UpdateProductForm";
import useGetAllProductInfo from "./hooks/useGetAllProductInfo";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4rotrYEwEO2Sb7ECCtwKXJrM0ZuO4Ob8",
  authDomain: "sp-06-p01-product.firebaseapp.com",
  projectId: "sp-06-p01-product",
  storageBucket: "sp-06-p01-product.appspot.com",
  messagingSenderId: "5642757489",
  appId: "1:5642757489:web:4333031ae3429b6d3482d0",
  measurementId: "G-ZSRFRR1KFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
    const { colors, sizes, categories } = useGetAllProductInfo();
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/admin" element={<Admin />} />
                <Route
                    path="/admin/create-product"
                    element={
                        <CreateProductForm
                            sizes={sizes}
                            colors={colors}
                            categories={categories}
                        />
                    }
                />
                {/* <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/admin/create-product" element={<CreateProductForm />} /> */}
                <Route
                    path="/products/:id"
                    element={<SingleProduct colors={colors} sizes={sizes} />}
                />

                <Route
                    path="/admin/update-product/:productId"
                    element={<UpdateProductForm />}
                />
                <Route path="/about" element={<About />} />
                {/* <Route exact path="/cocktail/:id">
                    <SingleCocktail />
                </Route> */}
                <Route path="/error" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
