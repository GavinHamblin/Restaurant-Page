//imports

import _ from 'lodash';
import './style.css'
import chickenSandwich from './img/chicken-sandwich.jpeg'
import chickenFeast from './img/chicken-feast.jpg'
import chickenAngel from './img/chicken-angel.jpg'
import chickenPhone from './img/chicken-phone.jpg'

//DOM selectors

const mainImg = document.querySelector('#img')

const contentDiv = document.querySelector('#content')
const contentText = document.querySelector('#contentText')

const homeButton = document.querySelector('#homeBtn')
const menuButton = document.querySelector('#menuBtn')
const aboutButton = document.querySelector('#aboutBtn')
const contactButton = document.querySelector('#contactBtn')

//default DOM build

const mainHeading = document.createElement('h1')
const mainParagraph = document.createElement('p')

//event listeners

window.onload = buildHome();

homeButton.addEventListener('click', buildHome)

menuButton.addEventListener('click', buildMenu)

aboutButton.addEventListener('click', buildAbout)

contactButton.addEventListener('click', buildContant)

// build page functions

function buildHome() {
    mainParagraph.innerHTML = ''

    mainHeading.innerHTML= "Nature's Artpiece"
    mainParagraph.innerHTML= 
    "Mother nature's creations have beauty beyond what we can comprehend. <br> Undeniably, nature's greatest artpiece is the chicken sandwich."

    mainImg.src = chickenSandwich

    contentText.prepend(mainHeading)
    contentText.appendChild(mainParagraph)
}

function buildMenu() {
    mainParagraph.innerHTML = ''
    
    const menuList1 = document.createElement('p')
    const menuList2 = document.createElement('p')
    const menuList3 = document.createElement('p')
    const menuList4 = document.createElement('p')

    mainHeading.innerHTML= "Menu"
    menuList1.innerHTML= "Classic Chicken Sandwich - $48.99"
    menuList2.innerHTML= "Spicy Chicken Sandwich - $68.99"
    menuList3.innerHTML= "Chicken Sandwich made with Beef - $12.99"
    menuList4.innerHTML= "Dangerous Chicken Sandwich - $114.99"

    mainImg.src = chickenFeast

    contentText.prepend(mainHeading)
    mainParagraph.appendChild(menuList1)
    mainParagraph.appendChild(menuList2)
    mainParagraph.appendChild(menuList3)
    mainParagraph.appendChild(menuList4)
}

function buildAbout() {
    mainHeading.innerHTML = "Heaven's Purpose"
    
    mainParagraph.innerHTML = "The purpose of Heavenly Chicken is to crush our competitors' desire to breathe fresh air! <br> Our chicken cannot be competed with. Anybody who threatens our purpose will face the wrath of God."

    contentText.prepend(mainHeading)

    mainImg.src = chickenAngel
    
}

function buildContant() {
    mainHeading.innerHTML = "Contact"
    mainParagraph.innerHTML = ''

    const phoneNumber = document.createElement('h5')
    const phoneNumberInfo = document.createElement('p')

    const address = document.createElement('h5')
    const addressInfo = document.createElement('p')

    const hours = document.createElement('h5')
    const hoursInfo = document.createElement('p')

    phoneNumber.innerHTML = "Phone Number"
    phoneNumberInfo.innerHTML = "Prayer"

    address.innerHTML = "Store Address"
    addressInfo.innerHTML = "777 Heaven's Gate CT, Atlantis, Moon"

    hours.innerHTML = "Store Hours"
    hoursInfo.innerHTML = "Always."

    mainImg.src = chickenPhone

    mainParagraph.appendChild(phoneNumber)
    phoneNumber.appendChild(phoneNumberInfo)
    mainParagraph.appendChild(hours)
    hours.appendChild(hoursInfo)
    mainParagraph.appendChild(address)
    address.appendChild(addressInfo)
}
