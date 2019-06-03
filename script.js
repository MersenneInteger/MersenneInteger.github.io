var menuState = false;;

//open menu
document.querySelector('.open-slide').addEventListener('click', function (){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('side-menu').style.marginLeft = '0px';
  if(!menuState) {
    menuState = true;
  } else {
    menuState = false;
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('side-menu').style.marginLeft = '0px';  
  }
});

//close menu
document.querySelector('.btn-close').addEventListener('click', function (){
  document.getElementById('side-menu').style.width = '0px';
  document.getElementById('side-menu').style.marginLeft = '0px';
  menuState = false;
});
