var h = document.getElementsByTagName('html')[0];
var b = document.getElementById('submit');


function jschg(){
  h.setAttribute('class', 'hasjs');   
}

function btnClick(){	
  b.style.backgroundColor = 'black';
  b.style.color = 'white';
	
  var name = document.getElementsByName('fname_field')[0].value + ' ' + document.getElementsByName('lname_field')[0].value;
  alert('The account for subscriber ' + name + ' has been created');
}

function radiofocus(i){
  document.getElementsByTagName('label')[i+4].style.color = 'orange';
}

function radioblur(i){
  document.getElementsByTagName('label')[i+4].style.color = 'black';
}

window.addEventListener('load', jschg);
b.addEventListener('click', btnClick);

document.getElementsByName('news_field')[0].addEventListener('focus', function(){radiofocus(0);});
document.getElementsByName('news_field')[1].addEventListener('focus', function(){radiofocus(1);});
document.getElementsByName('news_field')[2].addEventListener('focus', function(){radiofocus(2);});
document.getElementsByName('news_field')[3].addEventListener('focus', function(){radiofocus(3);});

document.getElementsByName('news_field')[0].addEventListener('blur', function(){radioblur(0);});
document.getElementsByName('news_field')[1].addEventListener('blur', function(){radioblur(1);});
document.getElementsByName('news_field')[2].addEventListener('blur', function(){radioblur(2);});
document.getElementsByName('news_field')[3].addEventListener('blur', function(){radioblur(3);});
