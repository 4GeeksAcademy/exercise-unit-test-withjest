let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
 const fromDollarToYen = (dollar) => {
    return (dollar * 156.5)
    
}
    const fromEuroToDollar = (euro) => {
    return (euro * 1.07)
 }
 
 const fromYenToPound = (yen) => {
    return (yen * 0.87)
 }


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };