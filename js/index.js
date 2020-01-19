var qwe = 0;
var timer = null;
var asd3 = 0;
var lun=-1;
var flag = 0;

//轮播图片集合
var imgs = ['./imgs/lun-one.jpg','./imgs/lun-two.jpg', './imgs/lun-three.jpg','./imgs/lun-four.jpg'];
window.onload=function(){
  qwe = 1; 
  setTime();
}

function setTime(){
  timer = window.setInterval("lunbo()",5000); //轮播图片的切换时间为5s
}

function lunbo() {
  if(lun >=3){
    lun=-1;
  }
  if(qwe==1){
    lun++;
    qwe=0;
  }
  lun++;
  document.getElementById("lunbo").setAttribute("src",imgs[lun]);
  if( lun == 1 ) {
    document.getElementById("img-word").setAttribute("style","display:block");
  }else if(lun == 3){
    document.getElementById("img-word-one").setAttribute("style","display:block");
  }else {
    document.getElementById("img-word-one").setAttribute("style","display:none");
    document.getElementById("img-word").setAttribute("style","display:none");
  }

  var list = document.getElementsByClassName("lunbo-item");
  list[lun].setAttribute("style","background-color:#ff6a00");
  for(var i=0; i<list.length; i++) {
    if(i==lun){
      continue;
    }
    list[i].setAttribute("style","background-color:#f4f4f4");
  }
  if(lun>=3) {
    lun=-1;
  }

}

function lunboclick(index) {
  qwe=0;
  document.getElementById("lunbo").setAttribute("src",imgs[index]);
  var list = document.getElementsByClassName("lunbo-item");
  if( index == 1 ) {
    document.getElementById("img-word").setAttribute("style","display:block");
  }else if(index == 3){
    document.getElementById("img-word-one").setAttribute("style","display:block");
  }else {
    document.getElementById("img-word-one").setAttribute("style","display:none");
    document.getElementById("img-word").setAttribute("style","display:none");
  }

  if( index == 3) {
    document.getElementById("img-word-one").setAttribute("style","display:block");
  }else {
    document.getElementById("img-word-one").setAttribute("style","display:none");
  }
  
  for(var i = 0; i<list.length; i++){
    if(i==index){
      list[i].setAttribute("style","background-color:#ff6a00");
    }else{
      list[i].setAttribute("style","background-color:#f4f4f4");
    }
  }
  lun = index;
  
  clearInterval(timer);
  setTime();
}

function lunboColorqwe(index){
  document.getElementsByClassName("lunbo-item")[index].setAttribute("style","background-color:#ff6a00");
}

function lunboColorasd(index){
  if(index != lun){
    document.getElementsByClassName("lunbo-item")[index].setAttribute("style","background-color:#f4f4f4");
  }
}

function quanbu() {
  document.getElementById("quanbu").setAttribute("style","font-size: 14px;padding-top: 10px;color:#fff;height:31px;background-color:#ff6a00; cursor: pointer;");
}

function quanbuzou(){
  document.getElementById("quanbu").setAttribute("style","font-size: 14px;padding-top: 10px;color:#ff6a00;height:31px; cursor: pointer;");
}


function zxcvcb() {
  var list = document.getElementsByClassName("strong-color");
  for(var i=0; i<list.length;i++){
    list[i].setAttribute("style","color:#000;font-size: 16px;");
  }
}

function aszx(index) {
  var list = document.getElementsByClassName("strong-color");
  list[index].setAttribute("style","color:#ff6a00;font-size: 16px;");
  for(var i=0; i<list.length;i++){
    if(i==index){
      continue;
    }
    list[i].setAttribute("style","color:#000;font-size: 16px;");
  }
  
}

function qweasdzxc() {
  document.getElementsByClassName("top-right")[0].setAttribute("style", "display:none");
  document.getElementsByClassName("top-right")[1].setAttribute("style", "display:none");
  document.getElementsByClassName("top-right")[2].setAttribute("style", "display:none");

  var list = document.getElementsByClassName("left-list");
  for(var i=0; i<list.length; i++) {
    list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
  }
  document.getElementById("qweasdyy").setAttribute("style","display: block;border-right: 3px solid #f4f4f4;padding:5px 0;font-size: 15px;letter-spacing: 1px;height:20px;background-color: #ff6a00;color: #fff;")

}

function rightShow(index) {

  var list = document.getElementsByClassName("left-list");
  document.getElementById("qweasdyy").setAttribute("style","display: block;border-right: 3px solid #fff;padding:5px 0;font-size: 15px;letter-spacing: 1px;height:20px;background-color: #ff6a00;color: #fff;")

  if(index==0){
    list[index].setAttribute("style", "box-shadow: 1px 0 20px rgb(216, 213, 213);border-right:0px solid #fff");
    document.getElementsByClassName("top-right")[0].setAttribute("style", "display:block");
    document.getElementsByClassName("top-right")[1].setAttribute("style", "display:none");
    document.getElementsByClassName("top-right")[2].setAttribute("style", "display:none");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style","box-shadow: 0 0 0 #999");
    }
  }else if(index==1){
    list[index].setAttribute("style", "box-shadow: 1px 0 20px rgb(216, 213, 213);border-right:0px solid #fff");
    document.getElementsByClassName("top-right")[1].setAttribute("style", "display:block");
    document.getElementsByClassName("top-right")[0].setAttribute("style", "display:none");
    document.getElementsByClassName("top-right")[2].setAttribute("style", "display:none");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==2){
    list[index].setAttribute("style", "box-shadow: 1px 0 20px rgb(216, 213, 213);border-right:0px solid #fff");
    document.getElementsByClassName("top-right")[2].setAttribute("style", "display:block");
    document.getElementsByClassName("top-right")[0].setAttribute("style", "display:none");
    document.getElementsByClassName("top-right")[1].setAttribute("style", "display:none");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==3){
    list[index].setAttribute("style", "box-shadow: 1px 0 20px rgb(216, 213, 213);border-right:0px solid #fff");
    document.getElementsByClassName("top-right")[0].setAttribute("style", "display:block");
    document.getElementsByClassName("top-right")[1].setAttribute("style", "display:none");
    document.getElementsByClassName("top-right")[2].setAttribute("style", "display:none");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==4){
    list[index].setAttribute("style", "box-shadow: 1px 0 20px rgb(216, 213, 213);border-right:0px solid #fff");
    document.getElementsByClassName("top-right")[1].setAttribute("style", "display:block");
    document.getElementsByClassName("top-right")[0].setAttribute("style", "display:none");
    document.getElementsByClassName("top-right")[2].setAttribute("style", "display:none");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==5){
    list[index].setAttribute("style", "box-shadow: 1px 0 20px rgb(216, 213, 213);border-right:0px solid #fff");
    document.getElementsByClassName("top-right")[2].setAttribute("style", "display:block");
    document.getElementsByClassName("top-right")[0].setAttribute("style", "display:none");
    document.getElementsByClassName("top-right")[1].setAttribute("style", "display:none");
    for(var i=0; i<list.length; i++) {
      if(index==i){
        continue;
      }
      list[i].setAttribute("style", "box-shadow: 0 0 0 #999");
    }
  }else if(index==6){
    list[index].setAttribute("style", "box-shadow: 1px 0 20px rgb(216, 213, 213);border-right:0px solid #fff");
    document.getElementsByClassName("top-right")[0].setAttribute("style", "display:block");
    document.getElementsByClassName("top-right")[1].setAttribute("style", "display:none");
    document.getElementsByClassName("top-right")[2].setAttribute("style", "display:none");
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
  for(var i=0; i<list.length; i++) {
    if(index==0){
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:none");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==1) {
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:none");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index == 2 ){
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:none");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
      continue;
    }else if(index==3) {
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:none");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==4) {
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:none");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==5) {
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:none");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==6) {
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:none");
      for(var j=0;j<list.length; j++) {
        if(j==index) {
          list[j].setAttribute("style","background-color:#fff;color:#ff6a00");
        }else{
          list[j].setAttribute("style","background-color:#ff6a00;color:#fff");
        }
      }
    }else if(index==7) {
      document.getElementsByClassName("demo-right")[1].setAttribute("style","display:block");
      document.getElementsByClassName("demo-right")[0].setAttribute("style","display:none");
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

var eightColorImg = 1; 

function colorShow(index) {
  if(index == 1 && index != eightColorImg) {
    document.getElementById("guonei-text").setAttribute("style","color:#fe6a00");
  }else if( index == 2 && index != eightColorImg) {
    document.getElementById("quanqiu-text").setAttribute("style","color:#fe6a00");
  }
}

function colorNone(index) {
  if(index == 1 && eightColorImg == 2) {
    document.getElementById("guonei-text").setAttribute("style","color:#fff");
  }else if( index == 2 && eightColorImg == 1) {
    document.getElementById("quanqiu-text").setAttribute("style","color:#fff");
  }

}

function dataShow(index) {
  eightColorImg = index;
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

function oneColorChange(index) {
  document.getElementsByClassName("body-bottom-center1-list1-span")[index].setAttribute("style","font-size: 18px;color:#fe6a00");
}

function oneColorNone(index){
  document.getElementsByClassName("body-bottom-center1-list1-span")[index].setAttribute("style","font-size: 18px;color:#000");
}

function searchqwe() {
  searchT = document.getElementById("seatch-text").innerHTML;
  document.getElementById("seatch-text").innerHTML = "";
}

var searchT = "请输入";
function searchblur() {
  document.getElementById("seatch-text").innerHTML = searchT;
}

function searchShowHide(index) {
  document.getElementsByClassName("demo-right-top")[index].innerHTML = "";
}

function searchShowShow(index) {
  document.getElementsByClassName("demo-right-top")[index].innerHTML = "搜索云产品";
}