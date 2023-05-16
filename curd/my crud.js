let price=document.getElementById('pricee')
let taxes=document.getElementById('taxes')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let total=document.getElementById('total')
let count=document.getElementById('count')
let category=document.getElementById('category')
let submit=document.getElementById('submit')
let title=document.getElementById('title')
function getprice(){
if(price.value !=''){
   let totall= (+price.value + +taxes.value + +ads.value)- +discount.value
   total.innerHTML=totall;
   total.style.background='green'

}else{
    total.style.background='red'

}

}
let data=[]
 submit.onclick = function(){
    let datapro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value,

    }
    localStorage.setItem('product', JSON.stringify(data))

 }
