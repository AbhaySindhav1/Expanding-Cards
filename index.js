const main_container = document.querySelector(".main-container")
const img = document.querySelectorAll(".img")
const imgdivs = document.querySelectorAll(".imgdiv")

imgdivs.forEach(imgdiv => {
    imgdiv.addEventListener('click', () => {
        removeactiveclass()
        imgdiv.classList.add("active")

    })

})

const removeactiveclass = () => {
    imgdivs.forEach(imgdiv => {
        imgdiv.classList.remove("active")
    })
}