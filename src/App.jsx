import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Product from "./pages/Product";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/home/product/:id' element={<Product />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </main>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;
