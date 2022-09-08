document.addEventListener('click',function(e){
    const lamp=document.querySelector('#space_lamp')
    console.dir(e.target)
    if(lamp.id===e.target.id){
        lamp.classList.toggle('on')
    }
})