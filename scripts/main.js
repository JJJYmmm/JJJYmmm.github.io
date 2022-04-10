let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jfif') {
      myImage.setAttribute('src', 'images/firefox2.jfif');
    } else {
      myImage.setAttribute('src', 'images/firefox.jfif');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

myButton.onclick = function() {
setUserName();
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}