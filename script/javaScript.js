document.getElementById('botonFooter').addEventListener('click', function(){
    document.getElementById('footer').style.display = 'block';
    document.getElementById('botonFooter').style.display = 'none';
    document.getElementById('volver').style.display = 'block';
})

document.getElementById('volver').addEventListener('click', function(){
    document.getElementById('footer').style.display = 'none';
    document.getElementById('botonFooter').style.display = 'block';
    document.getElementById('volver').style.display = 'none';
})