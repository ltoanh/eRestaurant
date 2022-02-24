const formatProductAddToCart = (product, quality) => {
  return {
    'product': {
      'id': product.id,
      'name': product.name,
      'thumbnail_src': product.thumbnail_src,
      'price': product.price,
    },
    'quality': parseInt(quality),
  }
};



export default formatProductAddToCart;
