
var flag = 0;


function qweasdzxc() {
  document.getElementById("img-top-right").setAttribute("style", "display:none");
  var list = document.getElementsByClassName("left-list");
  for(var i=0; i<list.length; i++) {
    list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
  }
}

function rightShow(index) {

  var list = document.getElementsByClassName("left-list");

  if(index==0){
    list[index].setAttribute("style", "box-shadow: 1px 0 7px #999;border-right:0px solid #fff");
    document.getElementById("img-top-right").setAttribute("style","display:block");
    document.getElementById("top-right").setAttribute("src", "./imgs/right-1.jpg");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style","border-right:1px solid #000");
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==1){
    list[index].setAttribute("style", "box-shadow: 1px 0 7px #999;border-right:0px solid #fff");
    document.getElementById("img-top-right").setAttribute("style","display:block");
    document.getElementById("top-right").setAttribute("src", "./imgs/right-2.jpg");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==2){
    list[index].setAttribute("style", "box-shadow: 1px 0 7px #999;border-right:0px solid #fff");
    document.getElementById("img-top-right").setAttribute("style","display:block");
    document.getElementById("top-right").setAttribute("src", "./imgs/right-1.jpg");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==3){
    list[index].setAttribute("style", "box-shadow: 1px 0 7px #999;border-right:0px solid #fff");
    document.getElementById("img-top-right").setAttribute("style","display:block");
    document.getElementById("top-right").setAttribute("src", "./imgs/right-2.jpg");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==4){
    list[index].setAttribute("style", "box-shadow: 1px 0 7px #999;border-right:0px solid #fff");
    document.getElementById("img-top-right").setAttribute("style","display:block");
    document.getElementById("top-right").setAttribute("src", "./imgs/right-1.jpg");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==5){
    list[index].setAttribute("style", "box-shadow: 1px 0 7px #999;border-right:0px solid #fff");
    document.getElementById("img-top-right").setAttribute("style","display:block");
    document.getElementById("top-right").setAttribute("src", "./imgs/right-2.jpg");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==6){
    list[index].setAttribute("style", "box-shadow: 1px 0 7px #999;border-right:0px solid #fff");
    document.getElementById("img-top-right").setAttribute("style","display:block;box-shadow:0 0 5px #gray");
    document.getElementById("top-right").setAttribute("src", "./imgs/right-1.jpg");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  } 
  
  
  
}

function showTopRight(index){

  flag = index;
  var list = document.getElementsByClassName("demo-left-list");
  var show = document.getElementById("up-shop");
  var img = document.getElementById("imgshow");
  for(var i=0; i<list.length; i++) {
    if(index==0){
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-1.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==1) {
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-2.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index == 2 ){
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-1.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
      continue;
    }else if(index==3) {
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-2.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==4) {
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-1.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==5) {
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-2.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==6) {
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-1.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==7) {
      show.setAttribute("style", "display:block;");
      img.setAttribute("src", "./imgs/show-2.jpg");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }  
  }
}

function imgShow() {
  var list = document.getElementsByClassName("demo-left-list");
  list[flag].setAttribute("style", "background-color:#fff;color:#ff6a00")
}



//隐藏导航
function hideTopRight() {
  document.getElementById("demoshow").setAttribute("style", "display:none");
  document.getElementById("qweasd").setAttribute("style","color:#gray");
  
}
//显示导航
function showqwe(index) {

  var list = document.getElementsByClassName("head-bottom-list-li");
  list[index].setAttribute("style","color:#ff6a00");

  if(index==1){
    document.getElementById("demoshow").setAttribute("style", "display:block");
    list[index].setAttribute("style","color:#ff6a00");
    for(var i=0; i<list.length; i++){
      if(i==index){
        continue;
      }
      list[i].setAttribute("style","color:gray");
    }
  }else{
    document.getElementById("demoshow").setAttribute("style", "display:none");
    list[index].setAttribute("style","color:#ff6a00");
    for(var i=0; i<list.length; i++){
      if(i==index){
        continue;
      }
      list[i].setAttribute("style","color:gray");
    }

  }

}

function blist() {
  document.getElementById("demoshow").setAttribute("style", "display:none");
  document.getElementById("qweasd").setAttribute("style","color:gray");
}


function searchTopText(index) {
  var lis = document.getElementsByClassName("nav-li");
  lis[index].setAttribute("style","background-color:#ff6a00;color:#fff");
  for(var i=0; i<lis.length; i++) {
    if(i==index) {
      continue;
    }
    lis[i].setAttribute("style","background-color:#fff;color:#000")
  }

  if(index == 0) {
    document.getElementsByClassName("head-search")[0].innerHTML = "请输入"
  }else if(index == 1){
    document.getElementsByClassName("head-search")[0].innerHTML = "请输入您想要的域名"
  }else if(index == 2){
    document.getElementsByClassName("head-search")[0].innerHTML = "请输入您想要的商标"
  }else if(index == 3){
    document.getElementsByClassName("head-search")[0].innerHTML = "请输入公司名"
  }

  
}

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
