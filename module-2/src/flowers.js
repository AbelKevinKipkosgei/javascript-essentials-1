//prices
let priceOfRose = 8;
let priceOfLily = 10;
let priceOfTulip = 2;

//quantity
let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

//total prices
let totalPriceOfRoses = priceOfRose * numberOfRoses;
let totalPriceOfLilies = priceOfLily * numberOfLilies;
let totalPriceOfTulips = priceOfTulip * numberOfTulips;

//total price of all items
let totalPrice = totalPriceOfRoses + totalPriceOfLilies + totalPriceOfTulips;

//output
console.log(`Rose - unit price: ${priceOfRose} , quantity: ${numberOfRoses} , value: ${totalPriceOfRoses}`);
console.log(`Lily - unit price: ${priceOfLily} , quantity: ${numberOfLilies} , value: ${totalPriceOfLilies}`);
console.log(`Tulip - unit price: ${priceOfTulip} , quantity: ${numberOfTulips} , value: ${totalPriceOfTulips}`);
console.log(`Total: ${totalPrice}`);