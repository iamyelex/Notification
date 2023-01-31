"use strict";

const markAllRead = document.querySelector("#header-p2");
const mainContainer = document.querySelectorAll(".main-container");
const dot = document.querySelectorAll('i');
const notificationNumber = document.querySelector('.header-span');

// USING THE READ ALL BUTTON 
markAllRead.addEventListener('click', function(){
    mainContainer.forEach((ctn) => {
        if (ctn.classList.contains("unread")){
            ctn.classList.remove("unread");
            ctn.classList.add('read');
        // console.log(ctn);
    }
      });
    
    dot.forEach((dot)=> dot.style.display = "none");
    result = 0;
    notificationNumber.textContent = result;
    // console.log(notificationNumber);
    notificationNumber.classList.add('hidden');
})

// CALCULATING NUMBER OF NOTIFICATIONS 
let number = [];
mainContainer.forEach((curr, i) => {
    if(curr.classList.contains('unread')){
        number.push(curr);
    }
}
)
let result = number.length;
notificationNumber.textContent = result;

// ADDING AND REMOVING NOTIFICATION BY CLICKING ON IT 
mainContainer.forEach((ctn) => 
ctn.addEventListener('click', function() {
    ctn.classList.toggle('unread')
    ctn.classList.toggle('read')

    if(ctn.classList.contains('unread')){
        result++
        notificationNumber.textContent = result;

        if(result > 0) {
            notificationNumber.classList.remove('hidden')
        }; 
    }

    if(ctn.classList.contains('read')){
        result--
        notificationNumber.textContent = result;
        if(result === 0) notificationNumber.classList.add('hidden');
    }
}))



const a = document.querySelector('.fa-solid');

console.log(a);