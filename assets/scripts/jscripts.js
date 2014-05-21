var fadeInTimer;
var autoMoveTimer;
var fadeInTimerPart;
var autoMoveTimerPart;
var curDisplay=-1;
var parDisplay=-1;

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_displayStatusMsg(msgStr)  { //v3.0
	status=msgStr; document.MM_returnValue = true;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function mmLoadMenus() {
  if (window.mm_menu_0703172323_0) return;
  window.mm_menu_0703172323_0 = new Menu("root",126,17,"Verdana, Arial, Helvetica, sans-serif",11,"#333333","#cc0000","#f2f2f2","#ffffff","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0703172323_0.addMenuItem("ACT!&nbsp;By&nbsp;SAGE&nbsp;2006","window.open('products.asp#act', '_self');");
  mm_menu_0703172323_0.addMenuItem("SAGE&nbsp;Pastel&nbsp;Partner","window.open('products.asp?current2=true#sage', '_self');");
   mm_menu_0703172323_0.hideOnMouseOut=true;
   mm_menu_0703172323_0.menuBorder=1;
   mm_menu_0703172323_0.menuLiteBgColor='#ffffff';
   mm_menu_0703172323_0.menuBorderBgColor='#555555';
   mm_menu_0703172323_0.bgColor='#555555';

  mm_menu_0703172323_0.writeMenus();
} // mmLoadMenus()

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_displayStatusMsg(msgStr)  { //v3.0
	status=msgStr; document.MM_returnValue = true;
}


function autoDisplay()
{
	//Photo of the week
	obj = document.getElementById("banner_image");
	if (curDisplay >= 0 && curDisplay < (chkImgId.length - 1))
	{
		curDisplay++;
	}
	else
	{
		curDisplay = 0;
	}

	obj.src = "media/photo_week/"+slideshow[chkImgId[curDisplay]];
	fadeIn(obj.name,0);		
}

function autoDisplayPart()
{

	//Participation
	part = document.getElementById("participation");
	
	if (parDisplay >= 0 && parDisplay < (participation.length - 1))
	{
		parDisplay++;
	}
	else
	{
		parDisplay = 0;
	}

	part.src = "media/participation/"+participation[parDisplay];
	
	if(participation[parDisplay] == "big_hearted.jpg"){
	document.getElementById("divPart1").style.display="block";
	document.getElementById("divPart2").style.display="none";
	}else{		
	document.getElementById("divPart2").style.display="block";
	document.getElementById("divPart1").style.display="none";
	}
	fadeInPart(part.name,0);

}

function fadeIn(objId,opacity) 
{
 
 	var i =1;
	if (document.getElementById) 
	{
		obj = document.getElementById(objId);
		
		if (opacity <= 100) 
		{
			setOpacity(obj, opacity);
			opacity += 25; // the level of darkness (100 - high, 0 - low)
			fadeInTimer = window.setTimeout("fadeIn('"+objId+"',"+opacity+") ", 100);
		}
		else
		{
			document.getElementById(objId + "_base").src = obj.src;
			autoMoveTimer = window.setTimeout("autoDisplay()", 5000);
		}
	}
}

function fadeInPart(objId,opacity) 
{
 
 	var i =1;
	if (document.getElementById) 
	{
		obj = document.getElementById(objId);
		
		if (opacity <= 100) 
		{
			setOpacity(obj, opacity);
			opacity += 25; // the level of darkness (100 - high, 0 - low)
			fadeInTimerPart = window.setTimeout("fadeInPart('"+objId+"',"+opacity+") ", 100);
		}
		else
		{
			document.getElementById(objId + "_base").src = obj.src;
			autoMoveTimerPart = window.setTimeout("autoDisplayPart()", 5000);
		}
	}
}

function setOpacity(obj, opacity) {

  opacity = (opacity == 100)?99.999:opacity;

  // IE/Win
  obj.style.filter = "alpha(opacity:"+opacity+")";

  // Safari<1.2, Konqueror
  obj.style.KHTMLOpacity = opacity/100;

  // Older Mozilla and Firefox
  obj.style.MozOpacity = opacity/100;

  // Safari 1.2, newer Firefox and Mozilla, CSS3
  obj.style.opacity = opacity/100;
}

function setPopUpHeight()
{
	var innerHeight;
	
	if (window.innerHeight != null)
	{
		innerHeight = Number(window.innerHeight);
	}
	else
	{
		innerHeight = Number(document.body.offsetHeight);
	}
	
	if (document.body.offsetHeight != null && window.innerHeight != null)
	{
		if (Number(document.body.offsetHeight) > Number(window.innerHeight))
		{
			document.getElementById('divPopUp').style.height = (Number(document.body.offsetHeight)) + 'px';
		}
		else
		{
			document.getElementById('divPopUp').style.height = (Number(window.innerHeight)) + 'px';
		}
	}
	else if (document.body.offsetHeight != null)
	{
		if (document.getElementById('divPopUp').style.height < Number(document.body.offsetHeight))
		{
    		document.getElementById('divPopUp').style.height = (Number(document.body.offsetHeight)) + 'px';
		}
	}
	else
	{
		if (document.getElementById('divPopUp').style.height < Number(window.innerHeight))
		{
			document.getElementById('divPopUp').style.height = (Number(window.innerHeight)) + 'px';
		}
	}
    
	if (219 < innerHeight)
	{
		document.getElementById("divPopUpSpace").style.height = ((innerHeight - 219)/2) + 'px';
	}
}

function setPopUp(id)
{	
	document.getElementById("divPopUpImage").innerHTML = "";
	document.getElementById("divPopUpTitle").innerHTML = "";
	document.getElementById("divPopUpDes").innerHTML = "";
	document.getElementById("divPopUpURL").innerHTML = "";
	if (popupImage[id] != null && popupImage[id] != "")
	{
		document.getElementById("divPopUpImage").innerHTML = "<img src='programmes/featured/" + popupImage[id] + "' border=0 />";
	}
	
	if (popupTitle[id] != null && popupTitle[id] != "")
	{
		document.getElementById("divPopUpTitle").innerHTML = popupTitle[id];
	}
	
	if (popupDes[id] != null && popupDes[id] != "")
	{
		document.getElementById("divPopUpDes").innerHTML = popupDes[id];
	}
	
	if (popupURL[id] != null && popupURL[id] != "")
	{
		document.getElementById("divPopUpURL").innerHTML = "<img src='images/icon_learnmore.png' border=0 />&nbsp;<a id='popupURL' href='http://" + popupURL[id] + "' target='_self'>Learn More</a>";
	}
}

// Removes leading whitespaces
function ltrim(value) {

    var re = /\s*((\S+\s*)*)/;
    return value.replace(re, "$1");

}

// Removes ending whitespaces
function rtrim(value) {

    var re = /((\s*\S+)*)\s*/;
    return value.replace(re, "$1");

}

// Removes leading and ending whitespaces
function trim(value) {

    return ltrim(rtrim(value));

}

function checkInput(type, value)
{
	var i = 0;
	var val = value.split(' ');
	var inputName = "";
	var myExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	for (i = 0;i < val.length;i++)
	{
		inputName = inputName + val[i];
	}
	
	document.getElementById("em" + inputName).innerHTML = "";
	for (i = 0;i < type.length;i++)
	{
		switch (type.charAt(i))
		{
			case 'V':
			{
				if (trim(document.getElementById("tb" + inputName).value) == "") 
				{ 
					document.getElementById("em" + inputName).innerHTML = "&nbsp;&nbsp;* " + value + " is required!";
				}
				break;
			}
			case 'E':
			{
				if (myExp.test(document.getElementById("tb" + inputName).value) == false) 
				{ 
					document.getElementById("em" + inputName).innerHTML = "&nbsp;&nbsp;* Invalid email address!"; 
				}
				break;
			}
			case 'N':
			{
				if (isNaN(document.getElementById("tb" + inputName).value)) 
				{ 
					document.getElementById("em" + inputName).innerHTML = "&nbsp;&nbsp;* " + value + " must be in number!";
				}
				break;
			}
		}
	}
}