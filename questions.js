
const arrows = document.querySelectorAll(".q-arrows")

arrows.forEach(function(arrow){
    arrow.addEventListener("click", function(e){
       const thisArrow = e.currentTarget.parentElement.parentElement
       thisArrow.classList.toggle("ghost-show-answer")
    })
})