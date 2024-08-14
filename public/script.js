const bannerListItems = document.querySelectorAll('.banner-list-item')
console.log(bannerListItems)

if (window.matchMedia('(min-width: 1024px)').matches) {
    bannerListItems.forEach((item) => {
        item.textContent = item.textContent + " | "
    })
}