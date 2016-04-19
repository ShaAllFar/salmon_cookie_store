var hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8];
var totalCookies = 0;
var resultsArray = [];
function randomNumber(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
};
var pikePlace = {
  locationName: 'Pike Place',
  minCust: 17,
  maxCust: 88,
  avgCookiePerCust: 5.2,
  cookiesPerHour: function(minCust,maxCust){
    for(var i = 0; i < hours.length; i++){
      var time = 'am';
      var randomNum = randomNumber(minCust,maxCust);
      var cookiesPurchasedEachHour = Math.floor(this.avgCookiePerCust) * randomNum;
      if(i > 5)
      {
        time = 'pm';
      }
      console.log(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      resultsArray.push(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      totalCookies += cookiesPurchasedEachHour;
    }
    console.log('Total: ' + totalCookies + ' cookies');
    resultsArray.push('Total: ' + totalCookies + ' cookies');
  }
};
pikePlace.cookiesPerHour(pikePlace.minCust,pikePlace.maxCust);
var storeInfoEl = document.getElementById('pike-store-info');
for(var i = 0; i < resultsArray.length; i++)
{
  var newLiEl = document.createElement('li');
  newLiEl.textContent = resultsArray[i];
  storeInfoEl.appendChild(newLiEl);
}
//second location
resultsArray = [];
totalCookies = 0;
var seatacAirport = {
  locationName: 'Seatac Airport',
  minCust: 6,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  cookiesPerHour: function(minCust,maxCust){
    for(var i = 0; i < hours.length; i++){
      var time = 'am';
      var randomNum = randomNumber(minCust,maxCust);
      var cookiesPurchasedEachHour = Math.floor(this.avgCookiePerCust) * randomNum;
      if(i > 5)
      {
        time = 'pm';
      }
      console.log(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      resultsArray.push(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      totalCookies += cookiesPurchasedEachHour;
    }
    console.log('Total: ' + totalCookies + ' cookies');
    resultsArray.push('Total: ' + totalCookies + ' cookies');
  }
};
seatacAirport.cookiesPerHour(seatacAirport.minCust,seatacAirport.maxCust);
var storeInfoEl = document.getElementById('seatac-store-info');
for(var i = 0; i < resultsArray.length; i++)
{
  var newLiEl = document.createElement('li');
  newLiEl.textContent = resultsArray[i];
  storeInfoEl.appendChild(newLiEl);
}
//southcenter location 3
resultsArray = [];
totalCookies = 0;
var southcenter = {
  locationName: 'Southcenter',
  minCust: 6,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  cookiesPerHour: function(minCust,maxCust){
    for(var i = 0; i < hours.length; i++){
      var time = 'am';
      var randomNum = randomNumber(minCust,maxCust);
      var cookiesPurchasedEachHour = Math.floor(this.avgCookiePerCust) * randomNum;
      if(i > 5)
      {
        time = 'pm';
      }
      console.log(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      resultsArray.push(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      totalCookies += cookiesPurchasedEachHour;
    }
    console.log('Total: ' + totalCookies + ' cookies');
    resultsArray.push('Total: ' + totalCookies + ' cookies');
  }
};
southcenter.cookiesPerHour(southcenter.minCust,southcenter.maxCust);
var storeInfoEl = document.getElementById('southcenter-store-info');
for(var i = 0; i < resultsArray.length; i++)
{
  var newLiEl = document.createElement('li');
  newLiEl.textContent = resultsArray[i];
  storeInfoEl.appendChild(newLiEl);
}
//bellevue location
resultsArray = [];
totalCookies = 0;
var bellevue = {
  locationName: 'bellevue',
  minCust: 6,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  cookiesPerHour: function(minCust,maxCust){
    for(var i = 0; i < hours.length; i++){
      var time = 'am';
      var randomNum = randomNumber(minCust,maxCust);
      var cookiesPurchasedEachHour = Math.floor(this.avgCookiePerCust) * randomNum;
      if(i > 5)
      {
        time = 'pm';
      }
      console.log(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      resultsArray.push(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      totalCookies += cookiesPurchasedEachHour;
    }
    console.log('Total: ' + totalCookies + ' cookies');
    resultsArray.push('Total: ' + totalCookies + ' cookies');
  }
};
bellevue.cookiesPerHour(bellevue.minCust,bellevue.maxCust);
var storeInfoEl = document.getElementById('bellevue-store-info');
for(var i = 0; i < resultsArray.length; i++)
{
  var newLiEl = document.createElement('li');
  newLiEl.textContent = resultsArray[i];
  storeInfoEl.appendChild(newLiEl);
}
//alki location
resultsArray = [];
totalCookies = 0;
var alki = {
  locationName: 'Alki',
  minCust: 6,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  cookiesPerHour: function(minCust,maxCust){
    for(var i = 0; i < hours.length; i++){
      var time = 'am';
      var randomNum = randomNumber(minCust,maxCust);
      var cookiesPurchasedEachHour = Math.floor(this.avgCookiePerCust) * randomNum;
      if(i > 5)
      {
        time = 'pm';
      }
      console.log(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      resultsArray.push(hours[i] + ' ' + time + ': ' + cookiesPurchasedEachHour + ' cookies');
      totalCookies += cookiesPurchasedEachHour;
    }
    console.log('Total: ' + totalCookies + ' cookies');
    resultsArray.push('Total: ' + totalCookies + ' cookies');
  }
};
alki.cookiesPerHour(alki.minCust,alki.maxCust);
var storeInfoEl = document.getElementById('alki-store-info');
for(var i = 0; i < resultsArray.length; i++)
{
  var newLiEl = document.createElement('li');
  newLiEl.textContent = resultsArray[i];
  storeInfoEl.appendChild(newLiEl);
}
