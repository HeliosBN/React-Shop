import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import CreateProductPage from './CreateProductPage';
import CustomersPage from './CustomersPage';
import CreateCustomerPage from './CreateCustomerPage'; // Importar a nova página

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartItemCount(prevCount => prevCount + 1);
    toast.success(`${product.title} adicionado ao carrinho!`, {
      icon: '🛒',
      duration: 2000,
    });
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header cartCount={cartItemCount} />
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/produtos"
              element={<ProductsPage onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/produtos/novo"
              element={<CreateProductPage />}
            />
            {/* Rota para a página de clientes */}
            <Route
              path="/clientes"
              element={<CustomersPage />}
            />
            {/* Rota para criar novo cliente */}
            <Route
              path="/clientes/novo"
              element={<CreateCustomerPage />}
            />
          </Routes>
        </main>
        <Footer />
        
        {/* Componente Toaster para mostrar notificações */}
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
