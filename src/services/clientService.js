import supabase from './supabase';

const clientService = {
  // Obter clientes com paginação
  async getClients(page = 1, limit = 10) {
    console.log('Iniciando busca de clientes...');
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    
    console.log('URL do Supabase:', process.env.VITE_SUPABASE_URL);
    
    const { data, error, count } = await supabase
      .from('customers')
      .select('*', { count: 'exact' })
      .range(from, to)
      .order('id', { ascending: true });
    
    if (error) {
      console.error('Erro ao buscar clientes:', error);
      throw error;
    }
    
    console.log('Dados retornados:', data);
    console.log('Total de registros:', count);
    
    return { 
      clients: data, 
      total: count,
      totalPages: Math.ceil(count / limit)
    };
  },
  
  // Obter um cliente pelo ID
  async getClientById(id) {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Erro ao buscar cliente:', error);
      throw error;
    }
    
    return data;
  },
  
  // Criar um novo cliente
  async createClient(client) {
    const { data, error } = await supabase
      .from('customers')
      .insert([client])
      .select();
    
    if (error) {
      console.error('Erro ao criar cliente:', error);
      throw error;
    }
    
    return data[0];
  },
  
  // Atualizar um cliente existente
  async updateClient(id, client) {
    const { data, error } = await supabase
      .from('customers')
      .update(client)
      .eq('id', id)
      .select();
    
    if (error) {
      console.error('Erro ao atualizar cliente:', error);
      throw error;
    }
    
    return data[0];
  },
  
  // Deletar um cliente
  async deleteClient(id) {
    const { error } = await supabase
      .from('customers')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Erro ao deletar cliente:', error);
      throw error;
    }
  }
};

export default clientService; 