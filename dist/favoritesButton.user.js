// ==UserScript==
// @name         Favorites Button
// @version      1.0.0
// @author       ureshii-ww
// @description  Adds the favorites button to the left sidebar
// @homepage     https://dtf.ru/u/197370-le-mort-joyeux
// @supportURL   https://dtf.ru/u/197370-le-mort-joyeux
// @match        https://dtf.ru/*
// @icon         https://www.google.com/s2/favicons?domain=dtf.ru
// @updateURL    https://github.com/ureshii-ww/dtf-favorites-button/raw/master/dist/favoritesButton.user.js
// @downloadURL  https://github.com/ureshii-ww/dtf-favorites-button/raw/master/dist/favoritesButton.user.js
// @run-at       document-end
// @grant        none
// @license      https://www.gnu.org/licenses/gpl-3.0.en.html
// @website      https://dtf.ru/u/197370-le-mort-joyeux
// ==/UserScript==

(()=>{var e,n,t,i;e=function(){var e=document.createElement("div");e.classList.add("sidebar-tree-list-item");var n=document.createElement("a");return n.setAttribute("href","/u/me/favorites"),n.classList.add("sidebar-tree-list-item__link"),n.innerHTML='\n    <svg height="24" width="24" class="sidebar-tree-list-item__icon icon">\n      <use xlink:href="#v_favorite"/>\n    </svg>\n    <p class="sidebar-tree-list-item__name">Закладки</p>\n  ',e.appendChild(n),e}(),n=setInterval((function(){var t=document.getElementsByClassName("sidebar-tree-list")[0];t&&(t.appendChild(e),clearInterval(n))}),100),t=["\n    .sidebar-tree-list-item {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n      height: 44px;\n      font-size: 16px;\n      cursor: pointer;\n      margin-bottom: 3px;\n      border-radius: 8px;\n    }\n  ","\n    .sidebar-tree-list-item__link {\n      height: 100%;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n      height: auto;\n      -ms-flex-positive: 2;\n      flex-grow: 2;\n      padding: 0 13px;\n    }\n  ","\n    .sidebar-tree-list-item .icon {\n      position: static;\n      color: #595959;\n      stroke-color: currentColor;\n      margin-right: 12px;\n    }\n  ","\n    .sidebar-tree-list-item__name {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 111px;\n    }\n  "],i=document.createElement("style"),document.head.appendChild(i),t.forEach((function(e){i.sheet.insertRule(e)}))})();