function result() {
  const text1 = document.getElementById('in1').value.toUpperCase();
  const text2 = document.getElementById('in2').value;
  const text3 = document.getElementById('in3').value;
  const output = text1 + '-' + text2 + ':' + text3;

  const ul = document.querySelector('.todo');
  var li = document.createElement('li');
  li.style.listStyleType = 'none';
  li.style.fontWeight = 'bold';
  li.style.color = 'red';
  li.innerText = output;
  ul.append(li);
}
const button = document.getElementById('btn1');
button.addEventListener('click', result);

const searchbutton = document.getElementById('btn2');
searchbutton.addEventListener('click', myFunction);

function myFunction() {
  const searchInput = document.getElementById('filter');
  let listitem = document.getElementsByTagName('li');
  let unorderlist = document.getElementsByTagName('ul');
  for (let i = 0; i < listitem.length; i++) {
    const value = listitem[i].innerText;
    const res = value.split('-');
    if (res[0] === searchInput.value.toUpperCase()) {
      var list = document.createElement('li');
      list.style.listStyleType = 'none';
      list.style.fontWeight = 'bold';
      list.innerText = value;
      console.log(list);
      unorderlist[0].innerHTML = '';
      unorderlist[0].append(list);
    }
  }
 
}
