let currentDisplay='';
document.querySelector('#display').value=currentDisplay;

function update(n){
  currentDisplay = currentDisplay + n; 
  document.querySelector('#display').value=currentDisplay;
}

function clearr(){
  currentDisplay='';
  document.querySelector('#display').value=currentDisplay;
}

function display(){
  try{
    let result =eval(currentDisplay);
    currentDisplay=result;
    document.querySelector('#display').value=currentDisplay;
  }
  catch(error) {
    alert(error);
  }
}