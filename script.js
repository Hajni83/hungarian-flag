$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    var a = 250;
    var b = 50;
    var cw = 450;
    var ch = 300;
    context.fillStyle='red';
    context.fillRect(cw-(b+ch),b+20,a,b);
    context.fillStyle='white';
    context.fillRect(cw-(b+ch),b+70,a,b);
    context.fillStyle='green';
    context.fillRect(cw-(b+ch),b+120,a,b);
  });