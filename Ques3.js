const storeInventory = {
    item1: 10, // price in USD
    item2: 20,
    item3: 30,
};

const exchangeRate = 80; // 1 USD to 80 INR

const convertedInventory = Object.entries(storeInventory).map(([item, price]) => {
    const convertedPrice = price * exchangeRate;
    return {
        [item]: convertedPrice };
});

console.log(convertedInventory);