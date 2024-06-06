const navigation = document.getElementById('navMobile');
const navBut = document.getElementById('hiddenIcone');
const nayBeOpen = document.getElementById('apearIcone');
const main = document.getElementById('Main');
function openNav() {
    navigation.style.display='block';
    navBut.style.display='none';
    nayBeOpen.style.display='block';
    main.style.opacity ='0.2';
}
function closeNav() {
    navigation.style.display='none';
    navBut.style.display='block';
    nayBeOpen.style.display='none';
    main.style.opacity ='1';
}

function changeImage(newImage) {
    document.getElementById('imgLarge').src = newImage;
  }