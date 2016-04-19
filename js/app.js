var hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8];

var appendBody = document.getElementById('append-table-row');
var stores = [];

function randomNumber(min,max){
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

function storeDataCreator(name, min, max, avgCookiePerCust){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiePerCust = avgCookiePerCust;
  this.resultsArray = [];
  this.storeCount = 0;
  this.cookiesPerHour = function(){
    for(var i = 0; i < hours.length - 4; i++){
      var time = 'am';
      var randomNum = randomNumber(this.min, this.max);
      var cookiesPurchasedEachHour = Math.floor(this.avgCookiePerCust * randomNum);
      if(i > 5)
      {
        time = 'pm';
      }
      this.resultsArray.push(cookiesPurchasedEachHour);
      this.storeCount += cookiesPurchasedEachHour;
    }
  };
  this.cookiesPerHour();
};

function makeLocationRow(storeDataCreator){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = storeDataCreator.name;
  tr.appendChild(th);
  for(var i = 0; i < storeDataCreator.resultsArray.length; i++){
    var td = document.createElement('td');
    td.textContent = storeDataCreator.resultsArray[i];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.textContent = storeDataCreator.storeCount;
  tr.appendChild(td);
  appendBody.appendChild(tr);
}

stores.push(new storeDataCreator('Pike Place', 17, 88, 5.2));
stores.push(new storeDataCreator('Seatac Airport', 6, 24, 1.2));
stores.push(new storeDataCreator('Southcenter', 11, 38, 1.9));
stores.push(new storeDataCreator('Bellevue Square', 20, 48, 3.3));
stores.push(new storeDataCreator('Alki', 3, 24, 2.6));

for(var i = 0; i < stores.length; i++){
  makeLocationRow(stores[i]);
}
