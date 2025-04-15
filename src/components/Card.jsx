const Card = ({ image, title, description, onAddToCartClick, isProduct }) => {
  console.log('Card image:', image);
  return (
    <div className="col">
      <div className="card h-100">
        {/* Área da imagem com altura fixa */}
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <img 
            src={image} 
            className="card-img-top" 
            alt={title}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </div>
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
        </div>
        
        {isProduct && (
          <div className="card-footer">
            <button 
              onClick={onAddToCartClick} 
              className="btn btn-success w-100"
            >
              <i className="bi bi-cart-plus me-2"></i>
              Adicionar ao Carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
