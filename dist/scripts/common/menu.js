(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,"default",(function(){return i}));var i=function(){function e(n,t,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"options",{blockBodyScroll:!1}),o(this,"menu",void 0),o(this,"hamburger",void 0),this.setWrapper(n),this.setMenu(t),this.setBurger(r)}var n,t,i;return n=e,(t=[{key:"init",value:function(){this.addBurgerListener(),this.addBodyListener()}},{key:"addBurgerListener",value:function(){var e=this;this.hamburger.addEventListener("click",(function(n){return e.burgerEventListener(n)}))}},{key:"addBodyListener",value:function(){var e=this;document.body.addEventListener("click",(function(n){return e.bodyEventListener(n)}))}},{key:"burgerEventListener",value:function(n){this.wrapper.classList.remove(e.INACTIVE_CLASS),this.options.blockBodyScroll&&this.disableBodyScroll()}},{key:"bodyEventListener",value:function(n){n.target===this.menu||this.menu.contains(n.target)||n.target===this.hamburger||this.hamburger.contains(n.target)||(this.wrapper.classList.add(e.INACTIVE_CLASS),this.options.blockBodyScroll&&this.enableBodyScroll())}},{key:"setMenu",value:function(e){e instanceof HTMLElement||(e=document.querySelector(e)||function(e){throw new Error("Menu not found")}()),this.menu=e}},{key:"setBurger",value:function(e){e instanceof HTMLElement||(e=document.querySelector(e)||function(e){throw new Error("Hamburger not found")}()),this.hamburger=e}},{key:"setWrapper",value:function(e){e instanceof HTMLElement||(e=document.querySelector(e)||function(e){throw new Error("Wrapper not found")}()),this.wrapper=e}},{key:"enableBodyBlockFlag",value:function(){return this.options.blockBodyScroll=!0,this}},{key:"disableBodyScroll",value:function(){document.body.style.overflow="hidden"}},{key:"enableBodyScroll",value:function(){document.body.style.overflow=null}}])&&r(n.prototype,t),i&&r(n,i),e}();o(i,"INACTIVE_CLASS","hidden")}]]);