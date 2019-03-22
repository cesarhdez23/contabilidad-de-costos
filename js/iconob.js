$(document).ready(main);

var contador = 1;

function main(){
 $('.icon-search').click(function(){
  //$('nav').toggle();
 
 if(contador==1){
  $('.cajatxt').animate({
   left:'25%'
  });
  contador=0;
 } else {
  contador=1;
  $('.cajatxt').animate({
   left:'-100%'
  });
 }
  
 });
 
 $(window).resize(function(){
  if(window.innerWidth > 960) {
   $(".cajatxt").removeAttr("style");
  }
 });
}﻿



