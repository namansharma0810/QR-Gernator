const newqrr=document.querySelector("#newqr");
const input=document.querySelector(".inp input");
const qrImage = document.querySelector('.outer img');
const firstSection = document.querySelector('.first');
const secondSection = document.querySelector('.sec');
const generateBtn = document.getElementById('ger');
const mode=document.querySelector("#mode");
let body=document.getElementsByTagName("body");

generateBtn.addEventListener("click",()=>{
    let qrval=input.value;
    if(qrval.length>0){
     const loadQRImage = new Promise((resolve, reject) => {
            qrImage.onload = () => resolve();
            qrImage.onerror = () => reject("QR image failed to load");

            qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrval;
        }).then(()=>{
                firstSection.classList.add("hidelast");
                secondSection.classList.remove("hidefirst");
            })
          .catch((error) => {
                console.error(error);
                alert("Could not generate QR code");
            });

     
    }
    else{
        alert("Enter the Text");
    }

});

newqrr.addEventListener("click",()=>{
    input.value="";
    firstSection.classList.remove("hidelast");
    secondSection.classList.add("hidefirst");
});




