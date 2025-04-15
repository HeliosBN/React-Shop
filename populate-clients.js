import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const clients = [
  {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    birth_date: '1990-05-15',
    profile_image: 'https://picsum.photos/200/200?random=1'
  },
  {
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '(11) 98888-8888',
    birth_date: '1985-08-22',
    profile_image: 'https://picsum.photos/200/200?random=2'
  },
  {
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    phone: '(11) 97777-7777',
    birth_date: '1992-03-10',
    profile_image: 'https://picsum.photos/200/200?random=3'
  },
  {
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '(11) 96666-6666',
    birth_date: '1988-11-30',
    profile_image: 'https://picsum.photos/200/200?random=4'
  },
  {
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@email.com',
    phone: '(11) 95555-5555',
    birth_date: '1995-07-18',
    profile_image: 'https://picsum.photos/200/200?random=5'
  },
  {
    name: 'Juliana Lima',
    email: 'juliana.lima@email.com',
    phone: '(11) 94444-4444',
    birth_date: '1993-01-25',
    profile_image: 'https://picsum.photos/200/200?random=6'
  },
  {
    name: 'Lucas Souza',
    email: 'lucas.souza@email.com',
    phone: '(11) 93333-3333',
    birth_date: '1991-09-12',
    profile_image: 'https://picsum.photos/200/200?random=7'
  },
  {
    name: 'Mariana Alves',
    email: 'mariana.alves@email.com',
    phone: '(11) 92222-2222',
    birth_date: '1987-04-05',
    profile_image: 'https://picsum.photos/200/200?random=8'
  },
  {
    name: 'Rafael Pereira',
    email: 'rafael.pereira@email.com',
    phone: '(11) 91111-1111',
    birth_date: '1994-12-20',
    profile_image: 'https://picsum.photos/200/200?random=9'
  },
  {
    name: 'Beatriz Rodrigues',
    email: 'beatriz.rodrigues@email.com',
    phone: '(11) 90000-0000',
    birth_date: '1996-06-08',
    profile_image: 'https://picsum.photos/200/200?random=10'
  },
  {
    name: 'Fernando Santos',
    email: 'fernando.santos@email.com',
    phone: '(11) 99999-8888',
    birth_date: '1989-02-14',
    profile_image: 'https://picsum.photos/200/200?random=11'
  },
  {
    name: 'Camila Oliveira',
    email: 'camila.oliveira@email.com',
    phone: '(11) 98888-7777',
    birth_date: '1997-10-03',
    profile_image: 'https://picsum.photos/200/200?random=12'
  },
  {
    name: 'Gustavo Costa',
    email: 'gustavo.costa@email.com',
    phone: '(11) 97777-6666',
    birth_date: '1993-08-17',
    profile_image: 'https://picsum.photos/200/200?random=13'
  },
  {
    name: 'Isabela Ferreira',
    email: 'isabela.ferreira@email.com',
    phone: '(11) 96666-5555',
    birth_date: '1990-04-28',
    profile_image: 'https://picsum.photos/200/200?random=14'
  },
  {
    name: 'Thiago Lima',
    email: 'thiago.lima@email.com',
    phone: '(11) 95555-4444',
    birth_date: '1986-12-01',
    profile_image: 'https://picsum.photos/200/200?random=15'
  },
  {
    name: 'Laura Souza',
    email: 'laura.souza@email.com',
    phone: '(11) 94444-3333',
    birth_date: '1995-09-19',
    profile_image: 'https://picsum.photos/200/200?random=16'
  },
  {
    name: 'Bruno Alves',
    email: 'bruno.alves@email.com',
    phone: '(11) 93333-2222',
    birth_date: '1992-07-07',
    profile_image: 'https://picsum.photos/200/200?random=17'
  },
  {
    name: 'Carolina Pereira',
    email: 'carolina.pereira@email.com',
    phone: '(11) 92222-1111',
    birth_date: '1988-03-23',
    profile_image: 'https://picsum.photos/200/200?random=18'
  },
  {
    name: 'Diego Rodrigues',
    email: 'diego.rodrigues@email.com',
    phone: '(11) 91111-0000',
    birth_date: '1994-11-09',
    profile_image: 'https://picsum.photos/200/200?random=19'
  },
  {
    name: 'Amanda Santos',
    email: 'amanda.santos@email.com',
    phone: '(11) 90000-9999',
    birth_date: '1991-05-31',
    profile_image: 'https://picsum.photos/200/200?random=20'
  }
];

async function insertClients() {
  for (const client of clients) {
    const { data, error } = await supabase
      .from('customers')
      .insert([client])
      .select();
    
    if (error) {
      console.error('Erro ao inserir cliente:', client.name, error);
    } else {
      console.log('Cliente inserido com sucesso:', client.name);
    }
  }
}

insertClients()
  .then(() => console.log('Todos os clientes foram inseridos!'))
  .catch(err => console.error('Erro:', err)); 