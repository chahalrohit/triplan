const formatNumber = (n: string) : string => {
    // format number 1000000 to 1,234,567
    const string = n.replace(/\,/g, '');
    const number = String(Number(string));
    return number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

const formatAmount = (amount: string) : string  => {
    if (amount.indexOf('.') >= 0) {
      const [ leftSide, rightSide ] = amount.split('.');
      return `${formatNumber(leftSide)}.${rightSide.substring(0,2)}`
    } else if (amount.length > 19) {
      return `${formatNumber(amount.substring(0,19))}`;
    } else {
      return `${formatNumber(amount)}`;
    }
}

const formatAmountOnBlur = (amount: string) : string => {
    return amount;
}

export {
    formatNumber,
    formatAmount,
    formatAmountOnBlur
}