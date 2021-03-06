

function getTotalInUSD(currencies, marketData) {

    let converted = currencies
        .map(item => {
            if(item.name === 'USD') {
                return item.quantity; 
            } else {
                return item.quantity * marketData[item.name].price;
            }
        })
        .reduce((total, item) =>  total + item)
        .toFixed(2);
    return parseFloat(converted);
}

module.exports = { 
    getTotalInUSD
};

