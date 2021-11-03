var h = document.getElementsByTagName('html')[0];
var b = document.getElementById('submit');


function jschg(){
  h.setAttribute('class', 'hasjs');   
}

function btnClick(){	
  b.style.backgroundColor = 'black';
  b.style.color = 'white';
	
  var name = document.getElementsByName('fname')[0].value + ' ' + document.getElementsByName('lname')[0].value;
  alert('You have successfully subscribed to the newsletter!');
}

function radiofocus(i){
  document.getElementsByTagName('label')[i+4].style.color = 'grey';
}

function radioblur(i){
  document.getElementsByTagName('label')[i+4].style.color = 'black';
}

window.addEventListener('load', jschg);
b.addEventListener('click', btnClick);

document.getElementsByName('sms')[0].addEventListener('focus', function(){radiofocus(0);});
document.getElementsByName('email')[1].addEventListener('focus', function(){radiofocus(1);});
document.getElementsByName('both')[2].addEventListener('focus', function(){radiofocus(2);});
document.getElementsByName('sms')[3].addEventListener('focus', function(){radiofocus(3);});

document.getElementsByName('sms')[0].addEventListener('blur', function(){radioblur(0);});
document.getElementsByName('email')[1].addEventListener('blur', function(){radioblur(1);});
document.getElementsByName('both')[2].addEventListener('blur', function(){radioblur(2);});
document.getElementsByName('sms')[3].addEventListener('blur', function(){radioblur(3);});
