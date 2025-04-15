# React Shop

Projeto de e-commerce desenvolvido com React e Supabase.

## Funcionalidades

- Listagem de produtos
- Listagem de clientes
- Cadastro de novos produtos
- Cadastro de novos clientes
- Carrinho de compras

## Tecnologias Utilizadas

- React
- React Router
- Supabase
- Bootstrap
- React Hot Toast

## Configuração do Ambiente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/react-shop.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com:
```
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── pages/         # Páginas da aplicação
  ├── services/      # Serviços (API, etc)
  └── main.jsx       # Ponto de entrada
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.