$(document).ready(main);

var contador = 1;

function main(){
 $('.icon-menu3').click(function(){
  //$('nav').toggle();
 
 if(contador==1){
  $('nav').animate({
   left:'0'
  });
  contador=0;
 } else {
  contador=1;
  $('nav').animate({
   left:'-100%'
  });
 }
  
 });
 
 $(window).resize(function(){
  if(window.innerWidth > 960) {
   $("nav").removeAttr("style");
  }
 });
}﻿