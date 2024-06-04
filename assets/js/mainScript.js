const navigation = document.getElementById('navMobile');
const navBut = document.getElementById('hiddenIcone');
const nayBeOpen = document.getElementById('apearIcone');
function openNav() {
    navigation.style.display='block';
    navBut.style.display='none';
    nayBeOpen.style.display='block';
}
function closeNav() {
    navigation.style.display='none';
    navBut.style.display='block';
    nayBeOpen.style.display='none';
}