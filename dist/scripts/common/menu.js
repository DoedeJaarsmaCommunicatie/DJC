(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,"default",(function(){return u}));var u=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"menu",void 0),i(this,"hamburger",void 0),this.setMenu(n),this.setBurger(t)}var n,t,u;return n=e,(t=[{key:"init",value:function(){this.addBurgerListener(),this.addBodyListener()}},{key:"addBurgerListener",value:function(){var e=this;this.hamburger.addEventListener("click",(function(n){return e.burgerEventListener(n)}))}},{key:"addBodyListener",value:function(){var e=this;document.body.addEventListener("click",(function(n){return e.bodyEventListener(n)}))}},{key:"burgerEventListener",value:function(n){this.menu.classList.remove(e.INACTIVE_CLASS)}},{key:"bodyEventListener",value:function(n){n.target===this.menu||this.menu.contains(n.target)||n.target===this.hamburger||this.hamburger.contains(n.target)||this.menu.classList.remove(e.INACTIVE_CLASS)}},{key:"setMenu",value:function(e){e instanceof HTMLElement||(e=document.querySelector(e)||function(e){throw new Error("Menu not found")}()),this.menu=e}},{key:"setBurger",value:function(e){e instanceof HTMLElement||(e=document.querySelector(e)||function(e){throw new Error("Hamburger not found")}()),this.hamburger=e}}])&&r(n.prototype,t),u&&r(n,u),e}();i(u,"INACTIVE_CLASS","hidden")}]]);