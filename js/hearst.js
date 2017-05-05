


var jamModal;
jamModal = document.getElementById('jamModal');
jamModal.querySelector('.modal-close').addEventListener('click',function(){
    jamModal.style.display = 'none';
    // show map div
    $('#mapwrap').show();

});

document.getElementById('click').addEventListener('click',function(){
		jamModal.style.display = 'block';
    // hide map div
    $('#mapwrap').hide();
});



var maudesModal;
maudesModal = document.getElementById('maudesModal');
maudesModal.querySelector('.modal-close').addEventListener('click', function() {
  maudesModal.style.display = 'none';
});

document.getElementById('clickMaudes').addEventListener('click', function() {
  maudesModal.style.display = 'block';
})


var doughModal;
doughModal = document.getElementById('doughModal');
doughModal.querySelector('.modal-close').addEventListener('click', function() {
  doughModal.style.display = 'none';
});

document.getElementById('clickDough').addEventListener('click', function() {
  doughModal.style.display = 'block';
})


var flashModal;
flashModal = document.getElementById('flashModal');
flashModal.querySelector('.modal-close').addEventListener('click', function() {
  flashModal.style.display = 'none';
  // show map div
  $('#mapwrap').show();
});


document.getElementById('clickFlash').addEventListener('click', function() {
  flashModal.style.display = 'block';
  // hide map div
  $('#mapwrap').hide();
})



var burrModal;
burrModal = document.getElementById('burrModal');
burrModal.querySelector('.modal-close').addEventListener('click', function() {
  burrModal.style.display = 'none';
});

document.getElementById('clickburr').addEventListener('click', function() {
  burrModal.style.display = 'block';
})


var addictionModal;
addictionModal = document.getElementById('addictionModal');
addictionModal.querySelector('.modal-close').addEventListener('click', function() {
  addictionModal.style.display = 'none';
});

document.getElementById('clickaddiction').addEventListener('click', function() {
  addictionModal.style.display = 'block';
})



//$('#teambio').hide();
  // $('#aboutus').click(function() {
   //$('#teambio').slideToggle();
  // });
