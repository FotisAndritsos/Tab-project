const btns = document.querySelectorAll('button');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');

btns.forEach(btn => {

   btn.addEventListener('click', event => {
        if( event.target.id === "btnOne" ){
            event.target.classList.add('active');
            btnTwo.classList.remove('active');
            btnThree.classList.remove('active');
            img1.style.display = "block";
            img2.style.display = "none";
            img3.style.display = "none";
        }else if(event.target.id === "btnTwo"){
            event.target.classList.add('active');
            btnOne.classList.remove('active');
            btnThree.classList.remove('active');
            img1.style.display = "none";
            img2.style.display = "block";
            img3.style.display = "none";
        }else if(event.target.id === "btnThree"){
            event.target.classList.add('active');
            btnTwo.classList.remove('active');
            btnOne.classList.remove('active');
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "block";
        }     
   });

})