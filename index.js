let credit_number = document.getElementById('credit-number');


credit_number.addEventListener('keyup',() => {
    let number4 = (credit_number.value).slice(0,5);
    if(5000 >= number4){
        document.getElementById('master').src = "images/master.png";
    }
    else{
        document.getElementById('master').src = "images/visa.png";

    }
})


const img = ["images/Airpods.png","images/air1.png","images/air3.png"]


Array.from(document.getElementsByClassName('card_img')).forEach((ele,i) =>{
    ele.addEventListener('click',() =>{
        document.getElementById('poster').src = img[i];
        document.getElementsByClassName("card_img")[i].style.boxShadow = "0px 0px 20px rgb(0,0,0,0.2)"  
    })
})
