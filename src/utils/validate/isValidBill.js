const isValidBill = (bill) => {
  if(!bill.selectedCard || Object.keys(bill.cart).length === 0){
    return false;
  }
  return true;
}

export default isValidBill;