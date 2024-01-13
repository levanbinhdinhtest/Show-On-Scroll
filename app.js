let animationElements = document.querySelectorAll('.show-on-scroll')
console.log(animationElements)

function toggleAnimationElementInWindow(element){
    let rectH1 = element.getClientRects()[0]
    // console.log(rectH1)
    // console.log(rectH1.top)
    // console.log(rectH1.bottom)
    let heightScreen = window.innerHeight

    if(!(rectH1.bottom < 0|| rectH1.top > heightScreen))
    {
        element.classList.add('start')
    }
    else{
        element.classList.remove('start')
    }

}

function checkAnimation(){
    animationElements.forEach(el=>{
        toggleAnimationElementInWindow(el)
    })
}

window.onscroll = checkAnimation
// console.log(window.onscroll)