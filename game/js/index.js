$(document).ready(function() {

  $('#wizard').hide();
  $('#king').hide();
  $("#lavahound").hide();
  $('#prince').hide();
  $("#baloon").hide();
  $("#pekka").hide();
  $("#fire1").hide();
  $("#fire2").hide();
 $("#fire3").hide();
 $("#fire4").hide();
  $("#fire5").hide();
  
  $('button').click(function() {
    alert("welcome to clash of shot");
    alert(" ready set go!!");
    $('h1').hide(); 
    $('a').hide();
    $('p').hide();
    $('button').hide();
    $('#wizard').show();
    $('#king').show();
    $("#lavahound").show();
    $("#baloon").show();
    $("#pekka").show();
});
 
  //Hound explode
 $('#lavahound').click(function() {
    $('#lavahound').hide();
    $('#fire5').show().hide(2000);  
    $('#lavahound').show(2000);
  });
  
  //Pekka Explode
    $('#pekka').click(function() {
    $('#pekka').hide();
    $('#fire3').show().hide(2000);  
    $('#pekka').show(2000);
  });
  
  //Balloon explode
    $('#baloon').click(function() {       $('#baloon').hide();
    $('#fire4').show().hide(2000);  
    $('#baloon').show(2000);
  });
  
  //King explode
 $('#king').click(function() {
    $('#king').hide();
    $('#fire2').show().hide(2000);  
    $('#king').show(2000);
  });
  
    //wizard explode
 $('#wizard').click(function() {
    $('#wizard').hide();
    $('#fire1').show().hide(2000);  
    $('#wizard').show(2000);
  });
    
      
 //Function to move Hound  
  function moveLavaRight() {
 $("#lavahound").animate({left: "+=250"}, 700, moveLavaLeft);}
  
 function moveLavaLeft() { 
 $("#lavahound").animate({left: "-=250"}, 700, moveLavaRight);  
 }
  moveLavaRight();
  
 //Move Balloon
  function movebaloonRight() {
 $("#baloon").animate({left: "+=450"}, 500, movebaloonLeft);}
  
 function movebaloonLeft() { 
 $("#baloon").animate({left: "-=450"}, 500, movebaloonRight);  
 }
  movebaloonRight();
  
  //Move Wizard
  function moveWizardRight() {
 $("#wizard").animate({left: "+=250"}, 500, moveWizardLeft);}
  

   function moveWizardLeft() { 
 $("#wizard").animate({left: "-=250"},500, moveWizardRight);  
 }
  moveWizardRight();
 
    //Move King
    function moveKingRight() {
 $("#king").animate({left: "+=250"}, 300, moveKingLeft);}
  

   function moveKingLeft() { 
 $("#king").animate({left: "-=250"},300, moveKingRight);  
 }
  moveKingRight();
  
      //Move Pekka
    function movepekkaRight() {
 $("#pekka").animate({left: "+=250"}, 500, movepekkaLeft);}
  

   function movepekkaLeft() { 
 $("#pekka").animate({left: "-=250"},500, movepekkaRight);  
 }
  movepekkaRight();
  
  
});