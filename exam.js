// [id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];

// 1)Print all car brands.

console.log('Print all car brands');
carBooking.forEach(item => {
    console.log(item[1]);
});
console.log(`--------------------------`);


// 2)Print total number of cars available.

console.log('Print total number of cars available.');
totalca = carBooking.map(tca=>tca[5]).reduce((ca1,ca2)=>ca1+ca2)
console.log(totalca);
console.log(`--------------------------`);


// 3)Print Sedan cars details.

console.log(`Print Sedan cars details.`);
console.log(carBooking.find(car=>car[3]=='sedan'));
console.log(`--------------------------`);

// 4)Print cars with price per day greater than 60.

console.log('Print cars with price per day greater than 60.');
carBooking.filter(item => item[4]>60).forEach(pp=>console.log(pp[2]))
console.log(`--------------------------`);

// 5)Print details of "jeep wrangler'.

console.log('Print details of "jeep wrangler"');
console.log(carBooking.find(car=>car[2]=='Wrangler'));
console.log(`--------------------------`);

// 6)Sort cars based on the descending order of the price per day.

console.log('Sort cars based on the descending order of the price per day.');
carBooking.sort((ppd1,ppd2)=>ppd2[4]-ppd1[4]).forEach(item=>console.log(item))
console.log(`--------------------------`);

// 7)Sort cars based on ascending order of available cars.

console.log('Sort cars based on ascending order of available cars.');
carBooking.sort((ac1,ac2)=>ac1[5]-ac2[5]).forEach(item=>console.log(item))
console.log(`--------------------------`);

// 8)Find the car with the most available cars.

console.log('Find the car with the most available cars.');
mac=carBooking.reduce((item1,item2)=>item1[5]>item2[5]?item1:item2)
console.log(mac);
console.log(`--------------------------`);

// 9)Calculate the revenue if all cars are rented for a day.

console.log('Calculate the revenue if all cars are rented for a day.');
totalrev = carBooking.map(rr=>rr[4]).reduce((r1,r2)=>r1+r2)
console.log(totalrev);
console.log(`--------------------------`);

// 10)Count the number of sedan cars.



// 11)Print all unique car brands.

console.log('Print all unique car brands.');
carBooking.forEach(item => {
    console.log(item[1]);
});
console.log(`--------------------------`);

// 12)Find the total number of available cars for all types.

console.log('Find the total number of available cars for all types.');
totalav = carBooking.map(ta=>ta[5]).reduce((r1,r2)=>r1+r2)
console.log(totalav);
console.log(`--------------------------`);

// 13)Find the cars with least availability

console.log('Find the cars with least availability');
lA=carBooking.reduce((item1,item2)=>item1[5]<item2[5]?item1:item2)
console.log(lA);
console.log(`--------------------------`);

// 14)Check if there is any car with a price per day of exactly 55

console.log('Check if there is any car with a price per day of exactly 55');
ppd=carBooking.some(item=>item[2]=55)
console.log(ppd?'yes':'no');
console.log(`--------------------------`);