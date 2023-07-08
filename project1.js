




// clock ()


setInterval(setClock,1000)

const hoverHand = document.querySelector('[data-hover-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')



function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoverRatio = (minutesRatio + currentDate.getHours()) / 12


    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hoverHand,hoverRatio)


}



function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}




setClock()



