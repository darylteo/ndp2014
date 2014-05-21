// JavaScript Document
var windowWidth = window.screen.width;

var doResize = false;
function test2(val)
{
	if (Number(windowWidth) != Number(window.screen.width))
	{
		var pathArray = window.location.pathname.split( '/' );
		var secondLevelLocation = pathArray[0];
		location.href=secondLevelLocation;
	}
	else
	{
		doResize = false;
	}
}
if (window.addEventListener)
{
 window.addEventListener('resize', function(event)
 {
	if (doResize == false)
	{
		doResize = true;
		setTimeout("test2('2')",500);
	}
	
 });
}
else
{
 window.onresize = function(event) 
 {
 	//if (windowWidth != window.screen.width)
	//{		
	if (doResize == false)
	{
		doResize = true;
		//test2();
		setTimeout("test2('1')",500);
	}
	//alert(windowWidth+" "+window.screen.width);
 		//location.href="test3.htm";
	//}
 }
}

$(function(){
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

  var ww = ( $(window).width() < window.screen.width ) ? $(window).width() : window.screen.width; //get proper width
 // var ww = window.screen.width;
  var mw = 1200; // min width of site
  var ratio =  ww / mw; //calculate ratio

  if( ww < mw){ //smaller than minimum size
   $('#Viewport').attr('content', 'initial-scale=' + ratio + ', user-scalable=yes, width=' + ww);
   //$('#Viewport').attr('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + ww);
  }else{ //regular size
   $('#Viewport').attr('content', 'initial-scale=1.0, maximum-scale=2, minimum-scale=1.0, user-scalable=yes, width=' + ww);
  }
}
});
