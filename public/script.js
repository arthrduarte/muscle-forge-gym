const bannerListItems = document.querySelectorAll('.banner-list-item')
console.log(bannerListItems)

if (window.matchMedia('(min-width: 1024px)').matches) {
    bannerListItems.forEach((item) => {
        item.textContent = item.textContent + " | "
    })
}

document.getElementById('burger-menu').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});
