const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Side bar: menu header
const MenuBtn = $('.navbar__menu-right')
const xsBtnCloseSideBar = $('.xs-inner-right__icon-close > i')
const xsSideBar = $('.navbar__xs-inner-right')
const sideBarRight = $('.sidebar-right')
const sideBarCloseIcon = $('.sidebar__close-icon > i')

function OnOpenSideBar() {
    xsSideBar.style.transform = 'translateX(0)'
    sideBarRight.style.transform = 'translateX(0)'
}
MenuBtn.addEventListener('click', OnOpenSideBar)

function onCloseSideBar() {
    xsSideBar.style.transform = 'translateX(100%)'
    sideBarRight.style.transform = 'translateX(100%)'
}
xsBtnCloseSideBar.addEventListener('click', onCloseSideBar)
sideBarCloseIcon.addEventListener('click', onCloseSideBar)

// Click Slider: Item Holiday Packages

const sButtlet = $$('.item__holiday-packages--bullet')
const sImgSlider = $$('.carousel-item')

sButtlet.forEach((bullet, index) => {
    const imgSlider = sImgSlider[index]
    bullet.onclick = (e) => {
        $('.item__holiday-packages--bullet.active').classList.remove('active')
        $('.carousel-item.active').classList.remove('active')
        e.target.classList.add('active')
        imgSlider.classList.add('active')
        clearInterval(intervalSlider)
    }
})
let currentIndex = 0
const autoSlider = (index) => {
    if (index > sButtlet.length - 1) {
        index = 0
    } 
    if (index < 0) {
        index = sButtlet.length - 1
    }
    sButtlet.forEach(e => e.classList.remove('active'))
    sImgSlider.forEach(e => e.classList.remove('active'))
    sButtlet[currentIndex].classList.add('active')
    sImgSlider[currentIndex].classList.add('active')
    currentIndex = index
}
function slider() {
    autoSlider(currentIndex + 1)
}
const intervalSlider = setInterval(slider, 5000)



// Interval Slider: Item Holyday Packages
    // môi 5s sẽ đi tìm elm nào có active remove nó đi
    // tìm elm kế tiếp chưa có active thì thêm vào
    // nếu mà elm kế tiếp tiếp có index lớn hơn length-1 thì sẽ active vào elm đầu tiên


