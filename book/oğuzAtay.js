const booksName1=document.querySelector("#oğuzAtayBooks1");
booksName1.addEventListener("dblclick",run1);
function run1(e){
    console.log("dfg");
    console.log(e.target.textContent);
}
const booksName2=document.querySelector("#oğuzAtayBooks2");
booksName2.addEventListener("dblclick",run2);
function run2(a){
    console.log(a.target.textContent);
}
const booksName3=document.querySelector("#oğuzAtayBooks3");
booksName3.addEventListener("dblclick",run3);
function run3(b){
    console.log(b.target.textContent);
}

const zey=document.querySelector(".navbar-brand");
zey.addEventListener("dblclick" , zeyf);
function zeyf(z){
    console.log(e.target.Id);
}



function oluştur(imgSrc, hText , kAdi) {
    // Yeni bir img elementi oluşturun
    const imgElement = document.createElement("img");
    //imgElement.id = "imgId";
    imgElement.className = "card-img-top";
    imgElement.src = imgSrc; // Resim yolunu çift tırnak içinde vermelisiniz.
    imgElement.style.height = "150px"; // Img elementine boyutu bu şekilde ayarlayın
    imgElement.style.width = "150px";

    const divİçElement = document.createElement("div");
    divİçElement.className = "card-body";

    const hElement = document.createElement("h5");
    
    hElement.innerHTML = hText; // Başlık metni

    const butonElement = document.createElement("button");
    //butonElement.id = "butonId";
    butonElement.className="butonClassZey";
    
    //!butonElement.innerHTML = "Detaylı incele.."; // Örnek bir buton metni

    const aElement=document.createElement("a");
    aElement.id=kAdi;
    aElement.className=hText;
    aElement.href="http://127.0.0.1:5500/book/see.html";
    aElement.target="_blank";
    aElement.innerHTML = "Detaylı incele..";


    butonElement.appendChild(aElement);

    // img elementini bir div elementine ekleyin
    const divDışElement = document.createElement("div");
    divDışElement.className = "card";
   
    

    divDışElement.appendChild(imgElement);
    divDışElement.appendChild(divİçElement);
    divİçElement.appendChild(hElement);
    divİçElement.appendChild(butonElement);

    // Belirtilen div elementini sayfaya ekleyin
    const div1 = document.querySelector(".zeyoz");
    div1.appendChild(divDışElement);
}




oluştur("tutunamayanlar.jpg", "Oğuz Atay" , "Tutunamayanlar");
oluştur("tehlikeliOyunlar.jpg", "Oğuz Atay" , "TehlikeliOyunlar");
oluştur("korkuyuBeklerken.jpg", "Oğuz Atay" , "KorkuyuBeklerken");
oluştur("günlük.jpg", "Oğuz Atay" , "Günlük");



