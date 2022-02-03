const formatProductAddToCart = (product, quality) => {
  return {
    'product': {
      'id': product.id,
      'name': product.name,
      'thumbnail_src': product.thumbnail_src,
    },
    'quality': quality,
  }
};



export default formatProductAddToCart;
