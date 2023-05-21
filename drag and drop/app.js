let btn=document.getElementById('btn')
let inp=document.getElementById('inp')
let boxs=document.querySelectorAll('.box')
let items=document.querySelectorAll('.item')

let drag=''
let datapro=[]

if(localStorage.value!=null){
    datapro = JSON.parse(localStorage.value)

}else{
datapro=[]
}
btn.onclick=function(){
    if(inp.value!=''){
        boxs[0].innerHTML +=`
        
        <p class="item" draggable='true'>${inp.value}</p>
        `

       

    }
  let newpro={
    inp:inp.value
  }
  datapro.push(newpro)

console.log(datapro)
localStorage.setItem('value',JSON.stringify(datapro))

    dragiteam()


        inp.value=''
       

}



function dragiteam(){
    let items=document.querySelectorAll('.item')
    items.forEach(ite=>{
        ite.addEventListener('dragstart',function(){
            // console.log('drag start')
            drag=ite
            ite.style.opacity='0.01'
           ite.style.background='rgb(47, 32, 22)'

        })

        ite.addEventListener('dragend',function(){
            console.log('drag end')
            ite.style.opacity='1'
           ite.style.background='rgb(47, 32, 99)'


        })

       
        boxs.forEach(boxx=> {
            boxx.addEventListener('dragover',function(i){
                console.log('drag end')
                boxx.style.background='green'
                boxx.style.color='#fff'
                i.preventDefault()
         
            })

            boxx.addEventListener('dragleave',function(){
                console.log('drag end')
                boxx.style.background='#fff'
                boxx.style.color='black'
         
            })

            boxx.addEventListener('drop',function(){
                console.log('drag end')
                boxx.append(drag)
                boxx.style.background='#fff'
                boxx.style.color='black'
                // clear()
         
            })

        })
    })
      
    }

    function clear(){
        localStorage.clear()
    }