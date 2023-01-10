const si = document.querySelector('#si');

si.addEventListener('click',function () {
    swal('Sele envio tu respuesta a ronal')
});

const no = document.querySelector ('#no');

no.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    no.style.setProperty('top',randomY+'%');
    no.style.setProperty('left',randomX+'%');
    no.style.setProperty('transform',`translate(-($randomX)%,$-(randomY)%)`);
    
    no.addEventListener('click',function () {
        swal('Por fin lo superaste')
    });
})