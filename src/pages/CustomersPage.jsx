import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NavLink, Link } from 'react-router-dom';
import CardsGrid from "../components/CardsGrid";
import Pagination from "../components/Pagination";
import customerService from '../services/customerService';

const CustomersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const CUSTOMERS_PER_PAGE = 8;

  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['customers', currentPage],
    queryFn: () => customerService.getCustomers(currentPage, CUSTOMERS_PER_PAGE),
    keepPreviousData: true,
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-2">Carregando clientes...</p> 
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle me-2"></i>
        Erro ao carregar clientes: {error.message}
      </div>
    );
  }

  const { customers, total, totalPages } = data;
  console.log('CustomersPage customers:', customers);

  return (
    <div>
      <Link to="/create-customer" className="btn btn-primary mb-3">Cadastrar Cliente</Link>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Clientes</h1>
        <NavLink to="/clientes/novo" className="btn btn-success">
          <i className="bi bi-plus-circle me-2"></i>
          Adicionar Cliente
        </NavLink>
      </div>

      <p>
        <i className="bi bi-info-circle me-2"></i>
        Mostrando {customers.length} de {total} clientes - Página {currentPage} de {totalPages}
      </p>

      <CardsGrid
        items={customers}
        cols={4}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CustomersPage;
