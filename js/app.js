var headers = [ 'LOCATION', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM','TOTAL'];
var appendBody = document.getElementById('append-table-row');
var stores = [];

function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function storeLocation(name, min, max, avgCooksPerCustomer){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCooksPerCustomer = avgCooksPerCustomer;
  this.storeArray = [];
  this.storeCount = 0;
  this.avgPurchasePerHr = function(){
    for(var i = 0; i < headers.length - 2; i++) {
      var randomInt = getRandomInt(this.min,this.max);
      var results = Math.floor(randomInt * this.avgCooksPerCustomer);
      this.storeArray.push(results);
      this.storeCount += results;
    };
  };
  this.avgPurchasePerHr();
}
function tableHeader(){
  var tr = document.createElement('tr');
  for(var i = 0; i < headers.length; i++)
  {
    var th = document.createElement('th');
    th.textContent = headers[i];
    tr.appendChild(th);
  }
  appendBody.appendChild(tr);
}

function makeRow(storeObj){

  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = storeObj.name;
  tr.appendChild(td);
  for(var i = 0; i < storeObj.storeArray.length; i++){
    td = document.createElement('td');
    td.textContent = storeObj.storeArray[i];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.textContent = storeObj.storeCount;
  tr.appendChild(td);
  appendBody.appendChild(tr);
}

stores.push(new storeLocation('Pike Place',17,88,5.2));
stores.push(new storeLocation('Seatac Airport',6,24,1.2));
stores.push(new storeLocation('Southcenter',11,38,1.9));
stores.push(new storeLocation('Bellevue Square',20,48,3.3));
stores.push(new storeLocation('Alki',3,24,2.6));

tableHeader();
for(var i = 0; i < stores.length; i++) {
  makeRow(stores[i]);
}

var salesForm = document.getElementById('submission_form');

function handleFormInputs(event){
  event.preventDefault();

  var location = event.target.storLocation.value;
  var minCusty = event.target.minCustomer.value;
  var maxCusty = event.target.maxCustomer.value;
  var avgCusty = event.target.avgCustomer.value;
  var storeFound = false;

  for(var i = 0; i < stores.length; i++){
    if(location === stores[i].name){
      stores[i].min = minCusty;
      stores[i].max = maxCusty;
      stores[i].avgCooksPerCustomer = avgCusty;
      stores[i].storeArray = [];
      stores[i].storeCount = 0;
      stores[i].avgPurchasePerHr();
      storeFound = true;
    }
  }
  if(storeFound === true){
    var tableBody = document.getElementById('append-table-row');
    tableBody.innerHTML = '';
    tableHeader();
    for(var i = 0; i < stores.length; i++){
      makeRow(stores[i]);
    }
  }

  if(!storeFound){
    var newObj = new storeLocation(location,minCusty,maxCusty,avgCusty);
    stores.push(newObj);
    makeRow(newObj);
  }
  location = null;
}

salesForm.addEventListener('submit', handleFormInputs);
