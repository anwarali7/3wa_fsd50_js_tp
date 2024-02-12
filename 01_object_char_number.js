const sumTTC = {
  precision: 100,

  calculate: (prices, tva = .2) => {

    const total = prices.reduce((acc, curr) => acc + curr, 0) * (1 + tva);

    const totalRounded = Math.round(total * sumTTC.precision) / sumTTC.precision;

    return totalRounded
  },

  setPrecision: (precision) => {
    sumTTC.precision = precision;
  }
}

const products = [100, 200, 55.123, 154.2];

console.log(sumTTC.calculate(products));
sumTTC.setPrecision(1000);
console.log(sumTTC.calculate(products));


const charUtils = {
  count: (str) => {
    return [...str].reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc;
    }, {})
  },

  searchChar: (str, char) => {
    return str.includes(char);
  },

  searchStr: (str, searchStr) => {
    return str.includes(searchStr);
  },

  replaceStr: (str, removeChar) => {
    return str.replace(removeChar, "");
  }
}

let str = "hello world";
console.log(charUtils.count(str));
console.log(charUtils.searchChar(str, "o"));
console.log(charUtils.searchChar(str, "5"));
console.log(charUtils.searchStr(str, "world"));
console.log(charUtils.replaceStr(str, "hello "));

const charUtils2 = {
  count: (str) => {
    const countObject = charUtils.count(str);
    return Object.values(countObject);
  }
}

console.log(charUtils2.count(str));