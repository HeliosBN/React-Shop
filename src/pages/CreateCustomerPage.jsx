import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import customerService from '../services/customerService';
import { toast } from 'react-hot-toast';

const CreateCustomerPage = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: '',
    birth: '',
    email: '',
    phone_number: '',
    image_url: ''
  });

  const [errors, setErrors] = useState({});

  const createCustomerMutation = useMutation({
    mutationFn: customerService.createCustomer, // Assuming createCustomer function exists
    onSuccess: () => {
      toast.success('Cliente criado com sucesso!', {
        duration: 3000,
        icon: '👤',
      });
      navigate('/clientes');
    },
    onError: (error) => {
      console.error("Erro detalhado:", error);
      const errorMessage = error?.message || 'Ocorreu um erro desconhecido.';
      toast.error(`Erro ao criar cliente: ${errorMessage}`, {
        duration: 5000,
      });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!customer.name.trim()) {
      newErrors.name = 'O nome é obrigatório';
    }

    if (!customer.email.trim()) {
      newErrors.email = 'O email é obrigatório';
    } else if (!emailRegex.test(customer.email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!customer.birth) {
      newErrors.birth = 'A data de nascimento é obrigatória';
    }

    if (!customer.phone_number.trim()) {
      newErrors.phone_number = 'O telefone é obrigatório';
    }

    if (!customer.image_url.trim()) {
      newErrors.image_url = 'A URL da imagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      createCustomerMutation.mutate(customer);
    } else {
      toast.error('Por favor, corrija os erros no formulário.', { duration: 3000 });
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-header bg-success text-white">
            <h2 className="mb-0">Cadastrar Novo Cliente</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} noValidate> 
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome Completo</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  value={customer.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={customer.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="birth" className="form-label">Data de Nascimento</label>
                <input
                  type="date"
                  className={`form-control ${errors.birth ? 'is-invalid' : ''}`}
                  id="birth"
                  name="birth"
                  value={customer.birth}
                  onChange={handleChange}
                  required
                />
                {errors.birth && <div className="invalid-feedback">{errors.birth}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">Telefone</label> 
                <input
                  type="tel"
                  className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
                  id="phone_number"
                  name="phone_number"
                  value={customer.phone_number}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  required
                />
                 {errors.phone_number && <div className="invalid-feedback">{errors.phone_number}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="image_url" className="form-label">URL da Imagem</label>
                <input
                  type="url"
                  className={`form-control ${errors.image_url ? 'is-invalid' : ''}`}
                  id="image_url"
                  name="image_url"
                  value={customer.image_url}
                  onChange={handleChange}
                  placeholder="https://picsum.photos/300/200"
                  required
                />
                {errors.image_url && <div className="invalid-feedback">{errors.image_url}</div>}
              </div>

      
              <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/clientes')}
                  disabled={createCustomerMutation.isLoading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={createCustomerMutation.isLoading}
                >
                  {createCustomerMutation.isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Salvando...
                    </>
                  ) : 'Cadastrar Cliente'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomerPage;
