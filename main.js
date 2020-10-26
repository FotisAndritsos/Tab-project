const btns = document.querySelectorAll('button');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');


btns.forEach(btn => {

   btn.addEventListener('click', event => {
        if( event.target.id === "btnOne" ){
            event.target.classList.add('active');
            img1.style.display = "block";
            img2.style.display = "none";
            img3.style.display = "none";
        }else if(event.target.id === "btnTwo"){
            event.target.classList.add('active');
            img1.style.display = "none";
            img2.style.display = "block";
            img3.style.display = "none";
        }else if(event.target.id === "btnThree"){
            event.target.classList.add('active');
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "block";
        }
           
        
   });

})