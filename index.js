  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  const firstTwoDrivers = returnFirstTwoDrivers(drivers);
  //console.log(firstTwoDrivers);
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
  };
  const lastTwoDrivers = returnLastTwoDrivers(drivers);
//console.log(lastTwoDrivers);

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  console.log(selectingDrivers[0]); 
  console.log(selectingDrivers[1]);   
  console.log(selectingDrivers[0](drivers));
  console.log(selectingDrivers[1](drivers));
  const createFareMultiplier = multiplier => fare => fare * multiplier;
  const fareMultiplier = createFareMultiplier(2);
  console.log(typeof fareMultiplier);
  const fareQuintupler = createFareMultiplier(5);
  console.log(fareQuintupler(5))
  const fareDoubler = fare => fare * 2;
  console.log(fareDoubler(10)); 
  const fareTripler = fare => fare * 3;
  console.log(fareTripler(12)); 
  function selectDifferentDrivers(arrayOfDrivers, selectionFunction) {
    return selectionFunction(arrayOfDrivers);
  }
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

  
   
  
 
 
