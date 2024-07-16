  let loginform = document.querySelector(".login-container");
  let lock = document.querySelector(".login-blur");
  let locker = document.querySelector(".locker");
  let over = document.querySelector("body");
  let frgt = document.querySelector(".frgt_password_container");
  let register = document.querySelector(".register_container");

  function login() {
    if(window.getComputedStyle(loginform).visibility === "hidden"){
      loginform.style.visibility = "visible";
      loginform.style.opacity = 1;
      loginform.style.top = "290px";
      lock.style.opacity = 0.2;
      locker.style.zIndex = 10;
      over.style.overflow = "hidden";
    } 
    else {
      loginform.style.visibility = "hidden";
      loginform.style.opacity = 0;
      loginform.style.top = "200px";
      lock.style.opacity = 1;
      locker.style.zIndex = -1;
      over.style.overflow = "auto";
    }
  }

  function esc() {
    loginform.style.visibility = "hidden";
    loginform.style.opacity = 0;
    loginform.style.top = "200px";
    lock.style.opacity = 1;
    locker.style.zIndex = -1;
    over.style.overflow = "auto";

    frgt.style.visibility = "hidden";
    frgt.style.opacity = 0;
    frgt.style.top = "200px";

    register.style.visibility = "hidden";
    register.style.opacity = 0;
    register.style.top = "200px";
  }
  
  function frgtPass() {
    loginform.style.visibility = "hidden";
    loginform.style.opacity = 0;
    loginform.style.top = "200px";
    frgt.style.visibility = "visible";
    frgt.style.opacity = 1;
    frgt.style.top = "337px";
  }

  function BackToLogin() {
    frgt.style.visibility = "hidden";
    frgt.style.opacity = 0;
    frgt.style.top = "200px";

    loginform.style.visibility = "visible";
    loginform.style.opacity = 1;
    loginform.style.top = "290px";

    register.style.visibility = "hidden";
    register.style.opacity = 0;
    register.style.top = "200px";
  }

  function registerform() {
    loginform.style.visibility = "hidden";
    loginform.style.opacity = 0;
    loginform.style.top = "200px";

    register.style.visibility = "visible";
    register.style.opacity = 1;
    register.style.top = "253px";
  }

