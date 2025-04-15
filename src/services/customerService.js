import supabase from './supabase';

const customerService = {
  async getCustomers(page = 1, limit = 12) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await supabase
      .from('customers')
      .select('*', { count: 'exact' })
      .range(from, to)
      .order('name', { ascending: true });
    if (error) {
      console.error('Erro ao buscar clientes:', error); 
      throw error;
    }
    console.log('getCustomers data:', data);
    return {
      customers: data,
      total: count,
      totalPages: Math.ceil(count / limit)
    };
  },

  async getCustomerById(id) {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      console.error('Erro ao buscar cliente:', error);
      throw error;
    }
    console.log('getCustomerById data:', data);
    return data;
  },

  async createCustomer(customer) {
    const { data, error } = await supabase
      .from('customers')
      .insert([customer])
      .select();
    if (error) {
      console.error('Erro ao criar cliente:', error);
      throw error;
    }
    return data[0];
  },

  async updateCustomer(id, customer) {
    const { data, error } = await supabase
      .from('customers')
      .update(customer)
      .eq('id', id)
      .select();
    if (error) {
      console.error('Erro ao atualizar cliente:', error);message
      throw error;
    }
    return data[0];
  },

  async deleteCustomer(id) {
    const { error } = await supabase
      .from('customers')
      .delete()
      .eq('id', id);
    if (error) {
      console.error('Erro ao deletar cliente:', error);
      throw error;
    }
    return true;
  }
};

export default customerService;
