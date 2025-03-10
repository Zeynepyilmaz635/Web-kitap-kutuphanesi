/**
 * const buton=document.querySelector("#buttonId");
buton.addEventListener("dblclick",run3);
function run3(e){
    console.log(e.target.textContent + " adlı butona çift tıklandı")
}

const min = 1; // Minimum değer
const max = 100; // Maximum değer
const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
dizi.includes(2)

var secilenLi = document.getElementById("secilenLi");

// Yeni metin içeriğini belirleyin
var yeniMetin = "Yeni metin içeriği";

// li elementinin içeriğini değiştirin
secilenLi.innerHTML = yeniMetin;
 */
addId=[];

const signUpButton=document.querySelector("#signUpId");
signUpButton.addEventListener("dblclick" , signUpFunc);
function signUpFunc(e){
    
    const min=10000;
    const max=100000;
    const randId=Math.floor(Math.random()*(max - min + 1 )) + min;
    if(addId.includes(2)){

    }else{
        console.log("ıd alındı ve diziye eklendi")
        addId.push(randId);
        const idSignUpWrite=document.querySelector("#idSignUp");
        idSignUpWrite.innerHTML=randId;
        console.log(addId);
    }
    

}