let display = document.getElementById("display");
let rar = document.querySelectorAll(".zz");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let off = document.querySelector(".off");
console.log(rar);

rar.forEach(function(btn){
    btn.addEventListener('click',function(g){
        let value=g.target.value
        display.value +=value
      

    

        
    })

    equal.addEventListener('click',function(){
        if(display.value=== ''){
            display.value=''
        }else{
            let ans=eval(display.value)
            display.value=ans
        }
        
    })

    clear.addEventListener('click',function(){
        display.value=''
    })

    off.addEventListener('click',function(){
        display.value=''
    })
})




