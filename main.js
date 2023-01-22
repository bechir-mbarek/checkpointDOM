var plus = document.getElementsByClassName("plus-btn")
console.log(plus)
var value = document.getElementsByClassName("Quant")
for (let x=0 ; x < plus.length ; x++ ){
    plus[x].addEventListener("click", function(){
        value[x].value++
        totalprice()
    })
}
var minusBTN=document.querySelectorAll(".minus-btn")


for(let y=0; y<minusBTN.length;y++){
    minusBTN[y].addEventListener("click",function(){
        if(minusBTN[y].nextElementSibling.value>1){
            minusBTN[y].nextElementSibling.value--
            totalprice()
        }
        
    })
    }
var deleteBtn=document.querySelectorAll(".delete")
for(let b=0 ; b<deleteBtn.length ; b++){
    deleteBtn[b].addEventListener("click", function(){
        deleteBtn[b].parentElement.remove()
        totalprice()
    })
}
var heart=document.getElementsByClassName("like")
console.log(heart)
for (let k=0 ; k<heart.length ; k++){
    heart[k].addEventListener("click",function(){
        if(heart[k].style.color==="red"){
            heart[k].style.color="black"
        }
        else{
            heart [k].style.color="red"
        }
    })
}
function totalprice(){
    let Quan = document.querySelectorAll(".Quant")
    var price = document.querySelectorAll(".price")
    let final = document.querySelector("#finalPrice")
    let sum = 0
    for(let w=0; w<price.length;w++){
        sum += price[w].innerHTML*Quan[w].value
        

    }
    console.log(sum)
 
final.value = sum}


