let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let mountains3=document.getElementById('mountains3')
let mountains4=document.getElementById('mountains4')
let river=document.getElementById('river')
let boat=document.getElementById('boat')
let mountains7=document.getElementById('mountains7')
let moon1=document.querySelector('.moon1')
let main1=document.querySelector('.main')


window.onscroll=function(){
    let value = scrollY
    stars.style.left=value +'px'
    moon.style.top=value *3 +'px'
    mountains3.style.top=value *1.5 +'px'
    mountains4.style.top=value *1 +'px'
    river.style.top=value +'px'
    boat.style.top=value +'px'
    boat.style.left=value +'px'
    boat.style.left=value +'px'
    moon1.style.fontSize=value +'px'
    if(scrollY>=118){
    moon1.style.fontSize=118 +'px'
    moon1.style.position='fixed'
    if(scrollY>=443){
        moon1.style.display='none'

    }else{
        moon1.style.display='block'
    }
    if(scrollY>=150){
    
    main1.style.background='linear-gradient(#376281,#10001f)'
    }else{
    main1.style.background='linear-gradient(#200016,#10001f)'

    }



}

}