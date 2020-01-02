
function colorShow(index) {
 
  if(index == 1) {
    document.getElementById("guonei-text").setAttribute("style","color:#fe6a00");
  }else if( index == 2) {
    document.getElementById("quanqiu-text").setAttribute("style","color:#fe6a00");
  }
}

function colorNone(index) {
  if(index == 1) {
    document.getElementById("guonei-text").setAttribute("style","color:#fff");
  }else if( index == 2) {
    document.getElementById("quanqiu-text").setAttribute("style","color:#fff");
  }

}

function dataShow(index) {
  var img = document.getElementById("data-show");
  if(index == 2) {
    img.setAttribute("src", "./imgs/quanqiu.jpg");
    var line = document.getElementById("quanqiu");
    line.setAttribute("style", "width:100px;border-bottom: solid 2px #fe6a00;color: #fe6a00;")
    document.getElementById("guonei").setAttribute("style", "width:100px;border-bottom: solid 2px hsla(0,0%,100%,.3);");
    document.getElementById("guonei-text").setAttribute("style", "color:#fff");
    document.getElementById("quanqiu-text").setAttribute("style","color:#fe6a00");
  }else {
    img.setAttribute("src", "./imgs/guonei.jpg");
    var line = document.getElementById("guonei");
    line.setAttribute("style", "width:100px;border-bottom: solid 2px #fe6a00;color: #fe6a00;")
    document.getElementById("quanqiu").setAttribute("style", "width:100px;border-bottom: solid 2px hsla(0,0%,100%,.3);");
    document.getElementById("quanqiu-text").setAttribute("style", "color:#fff");
    document.getElementById("guonei-text").setAttribute("style","color:#fe6a00");
  }   
}

function huan(index) {
  var imgs = document.getElementsByClassName("imgs");
  var divs = document.getElementsByClassName("body-five-top-list");

  divs[index].setAttribute("style", " border-bottom: 2px solid #ff6a00;color:#ff6a00;");
  for(var i=0; i<divs.length; i++) {
    if (i==index) {
      continue;
    }
    divs[i].setAttribute("style", "border-bottom: 2px solid #ebebef;color:#000;");
  }
  if(index == 0){  
    for(var i=0; i<imgs.length; i++) {
      imgs[i].setAttribute("src", "./imgs/one-"+i+".jpg");
    }
  }else if(index==1){
   
    for(var i=0; i<imgs.length; i++) {
      imgs[i].setAttribute("src", "./imgs/two-"+i+".jpg");
    }
  }else if(index==2){
   
    for(var i=0; i<imgs.length; i++) {
      imgs[i].setAttribute("src", "./imgs/three-"+i+".jpg");
    }
  }else if(index==3){
  
    for(var i=0; i<imgs.length; i++) {
      imgs[i].setAttribute("src", "./imgs/four-"+i+".jpg");
    }
  }else if(index==4){
  
    for(var i=0; i<imgs.length; i++) {
      imgs[i].setAttribute("src", "./imgs/five-"+i+".jpg");
    }
  }else if(index==5){
  
    for(var i=0; i<imgs.length; i++) {
      imgs[i].setAttribute("src", "./imgs/six-"+i+".jpg");
    }
  }else if(index==6){
    for(var i=0; i<imgs.length; i++) {
      imgs[i].setAttribute("src", "./imgs/seven-"+i+".jpg");
    }
  }
}

function fudong(index) {
  var obj = document.getElementsByClassName("dudong");
  obj[index - 1].setAttribute("style", "display:none;");
  document.getElementsByClassName("two-button")[index - 1].setAttribute("style", "display:block;")
}

function gomove(index) {
  var obj = document.getElementsByClassName("two-button");
  obj[index - 1].setAttribute("style", "display:none;");
  document.getElementsByClassName("dudong")[index - 1].setAttribute("style", "display:block;text-align: left;margin-left: 20px;")
}
