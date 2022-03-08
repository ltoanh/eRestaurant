const avgTotalRating = (arr) => {
  let result = arr.reduce((total, val) => (total += val.rating_star), 0) / arr.length;

  if(isNaN(result)){
    return "Chưa có đánh giá"
  }
  return result.toFixed(2);
};

export default avgTotalRating;