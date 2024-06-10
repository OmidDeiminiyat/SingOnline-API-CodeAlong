function profilerecived(name, image, desc) {

    console.log(name);
    console.log(image);
    console.log(desc);

    const profile = document.getElementById('profile');
   
    const secondPage = document.getElementById('secondPage');
  const firstPage = document.getElementById('Main');
  const firstColumn = document.getElementById('firstColumn');
  const secondColumn = document.getElementById('secondColumn');
  const thirdColumn = document.getElementById('ThirdOne');
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    navigation.style.display='none';
    secondOpac.style.opacity='1';
    firstColumn.style.display = 'none'
    thirdColumn.style.display = 'none';
    secondColumn.style.display = 'none';


    profile.style.display = 'block';

    let myProof = `<div class="myFigs">
    <figure>
        <img src="assets/images/playList/${image}" alt="">
        <figcaption>
            <h1>${name}</h1>
            <p>${desc}</p>
        </figcaption>
    </figure>
</div>`
profile.innerHTML = myProof;

}


