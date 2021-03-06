/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./task5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./task5/App.js":
/*!**********************!*\
  !*** ./task5/App.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const imageBlock = __webpack_require__(/*! ./components/ImageBox */ \"./task5/components/ImageBox.js\");\r\nconst localStore = __webpack_require__(/*! ./LocalStore */ \"./task5/LocalStore.js\");\r\nconst MAINPAGE = __webpack_require__(/*! ./components/MainPage */ \"./task5/components/MainPage.js\");\r\nconst { PhotoPost } = __webpack_require__(/*! ./PostLogic */ \"./task5/PostLogic.js\");\r\nconst userStore = __webpack_require__(/*! ./resources/UserStore */ \"./task5/resources/UserStore.js\");\r\n\r\nfunction logOn(event) {\r\n    event.preventDefault();\r\n    localStore.username = document.getElementById(\"inputNickname\").value;\r\n    localStore.password = document.getElementById(\"inputPassword\").value;\r\n    console.log(localStore);\r\n    document.body.innerHTML = MAINPAGE;\r\n\r\n    document.getElementById(\"globalUserName\").innerHTML = localStore.username;\r\n    document.getElementById(\"userMenuTitle\").innerHTML = localStore.username;\r\n    localStore.photoPosts.addPhotoPost(new PhotoPost('Alfa_di', '2018-02-23T23:02:42', 'Hello', '#space', 'https://www.nasa.gov/sites/default/files/blackhole_2.jpg', '1'));\r\n    localStore.photoPosts.addPhotoPost(new PhotoPost('Q', '2018-02-23T22:01:40', 'For the future', '#space#love#welcome2103', 'https://www.nasa.gov/sites/default/files/cygx1_ill.jpg', '2'));\r\n    console.log(localStore.photoPosts);\r\n    localStore.photoPosts.addPhotoPost(new PhotoPost('Galante', '2018-02-23T22:01:40', 'For the future', '#boom#supernova', 'https://tribesofcreation.files.wordpress.com/2010/03/grand_universe_by_antifan_real1.jpg', '3'));\r\n    localStore.photoPosts.getPhotoPosts().map((el) => {\r\n        addPhotoPostToDOM(el, localStore.username);\r\n        return;\r\n    })\r\n\r\n    let b = document.getElementsByClassName(\"filter-info\")[0];\r\n    let a = document.getElementsByClassName(\"search-btn\")[0];\r\n    let d = document.getElementsByClassName(\"like-btn\");\r\n    let c = document.getElementsByClassName(\"menu-btn\")[0];\r\n    let f = document.getElementsByClassName(\"edit-btn\");\r\n    let g = document.getElementsByClassName(\"delete-btn\");\r\n\r\n    c.addEventListener(\"click\", userMenu);\r\n    a.addEventListener(\"click\", filter);\r\n\r\n    for (let i = 0; i < d.length; i++) {\r\n        d[i].setAttribute(\"like\", \"0\");\r\n        d[i].addEventListener(\"click\", like);\r\n    }\r\n    for (let i = 0; i < f.length; i++) {\r\n        f[i].addEventListener(\"click\", editPost);\r\n    }\r\n    for (let i = 0; i < g.length; i++) {\r\n        g[i].addEventListener(\"click\", deletePost);\r\n    }\r\n}\r\n\r\nfunction like(e) {\r\n    e.preventDefault();\r\n    const ind = e.currentTarget.getAttribute(\"ind\");\r\n    const arr = document.getElementsByClassName(\"like-count\");\r\n    const counter = e.currentTarget.parentNode.children[2];\r\n    const elem = localStore.photoPosts.arr.find((e) => e.id === ind);\r\n    console.log(elem);\r\n    if (e.target.getAttribute(\"like\") === \"0\") {\r\n        e.target.src = \"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png\";\r\n        e.target.setAttribute(\"like\", \"1\");\r\n        elem.arrLiker.push(localStore.username);\r\n        counter.innerHTML = `<b class=\"like-count\">${(Number.parseInt(counter.innerHTML.match(/>\\d+/)[0].substring(1)) + 1)}</b>`;\r\n    }\r\n    else {\r\n        e.target.src = \"http://icons.iconarchive.com/icons/icons8/ios7/512/Messaging-Like-icon.png\";\r\n        e.target.setAttribute(\"like\", \"0\");\r\n        elem.arrLiker.splice(elem.arrLiker.indexOf(localStore.username), 1);\r\n        counter.innerHTML = `<b class=\"like-count\">${(Number.parseInt(counter.innerHTML.match(/>\\d+/)[0].substring(1)) - 1)}</b>`;\r\n    }\r\n}\r\n\r\nfunction filter(e) {\r\n    e.preventDefault();\r\n    const elem = document.getElementById('filterBlock');\r\n    if (elem.style.display === 'grid') {\r\n        elem.style.display = 'none';\r\n    }\r\n    else {\r\n        elem.style.display = 'grid';\r\n    }\r\n}\r\n\r\nfunction userMenu(e) {\r\n    e.preventDefault();\r\n    const elem = document.getElementById('userMenu');\r\n    if (elem.style.display === 'grid') {\r\n        elem.style.display = 'none';\r\n    }\r\n    else {\r\n        elem.style.display = 'grid';\r\n    }\r\n}\r\n\r\nfunction addPhotoPostToDOM(photoPost, user) {\r\n    let edit = \"\";\r\n    if (user === photoPost.author) {\r\n        edit = `<img ind=${photoPost.id} class=\"edit-btn\" src=\"https://image.freepik.com/free-icon/no-translate-detected_318-61160.jpg\"></img>\r\n            <div></div>\r\n            <img ind=${photoPost.id} class=\"delete-btn\" src=\"https://www.shareicon.net/data/2016/09/01/822390_delete_512x512.png\"></img>\r\n            `\r\n    }\r\n    let staff = document.getElementById(\"staff\");\r\n    staff.innerHTML = staff.innerHTML + imageBlock(photoPost, edit);\r\n}\r\n\r\nfunction editPost(e) {\r\n    e.preventDefault();\r\n    const i = e.currentTarget.getAttribute('ind');\r\n    console.log(i);\r\n}\r\n\r\nfunction deletePost(e) {\r\n    e.preventDefault();\r\n    const i = e.currentTarget.getAttribute('ind');\r\n    const ind = localStore.photoPosts.arr.findIndex((e) => e.id === i);\r\n    localStore.photoPosts.arr.splice(ind,1);\r\n    console.log(`li[key=${i}]`);\r\n    const elem=document.querySelector(`li[key=\"${i}\"]`);\r\n    elem.style.height=\"-20px\";\r\n    setTimeout(()=>elem.parentNode.removeChild(elem),300);\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    filter,\r\n    like,\r\n    logOn,\r\n    userMenu,\r\n    addPhotoPostToDOM,\r\n    editPost,\r\n    deletePost,\r\n}\n\n//# sourceURL=webpack:///./task5/App.js?");

/***/ }),

/***/ "./task5/LocalStore.js":
/*!*****************************!*\
  !*** ./task5/LocalStore.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {PhotoArr}= __webpack_require__(/*! ./PostLogic */ \"./task5/PostLogic.js\");\r\nlet photoPosts = new PhotoArr();\r\nconst localStore = {\r\n    username: \"\",\r\n    photoPosts,\r\n};\r\n\r\nmodule.exports =localStore;\n\n//# sourceURL=webpack:///./task5/LocalStore.js?");

/***/ }),

/***/ "./task5/PostLogic.js":
/*!****************************!*\
  !*** ./task5/PostLogic.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class PhotoPost {\r\n    constructor(author, createdAt, description, hashtags, photoLink, id) {\r\n        this.description = description;\r\n        this.createdAt = new Date(createdAt);\r\n        this.author = author;\r\n        this.photoLink = photoLink;\r\n        this.arrHash = hashtags.split(\"#\").slice(1);\r\n        this.arrLiker = new Array();\r\n        this.id = id;\r\n    }\r\n}\r\n\r\nclass PhotoArr {\r\n    constructor() {\r\n        this.arr = [];\r\n    }\r\n    addPhotoPost(photoPost) {\r\n        if (this.validatePhotoPost(photoPost)) {\r\n            this.arr.push(photoPost);\r\n        }\r\n        else {\r\n            console.log('invalid photoPost');\r\n        }\r\n    }\r\n    validatePhotoPost(photoPost) {\r\n        if (typeof photoPost.author !== 'string' ||\r\n            typeof photoPost.description !== 'string' ||\r\n            !photoPost.createdAt ||\r\n            !photoPost.author ||\r\n            !photoPost.photoLink ||\r\n            typeof photoPost.photoLink !== 'string' ||\r\n            typeof photoPost.id !== 'string' ||\r\n            !Array.isArray(photoPost.arrHash) ||\r\n            !(photoPost.createdAt instanceof Date) ||\r\n            !photoPost.id) {\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    editPhotoPost(id, ToEdit) {\r\n        const ind = this.arr.findIndex((elem) => elem.id === id)\r\n        if (ind === -1) {\r\n            console.log(\"No element with such id\");\r\n            return false;\r\n        }\r\n        let clone = Object.assign({}, this.arr[ind]);\r\n        console.log(clone);\r\n        for (let prop in ToEdit) {\r\n            if (clone.hasOwnProperty(prop)) {//А если в редакции будет плохая property,\r\n                clone[prop] = ToEdit[prop];//стоит её добавить в properties фотопоста и тащить дальше?\r\n            }\r\n            else {\r\n                console.log(\"Invalid edition\");\r\n                return false;\r\n            }\r\n        }\r\n        if (this.validatePhotoPost(clone)) {\r\n            this.arr[ind] = clone;\r\n        }\r\n        else {\r\n            console.log(\"Invalid edition\");\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    getPhotoPosts(skip = 0, top = 10, filterConfig) {\r\n        let edit = [];\r\n        console.log('edit',edit);\r\n        if (!filterConfig) {\r\n            edit = this.arr;\r\n        }\r\n        else {\r\n            for (let prop in filterConfig) {\r\n                if (!this.arr[0].hasOwnProperty(prop)) {\r\n                    console.log(\"Invalid filter\");\r\n                    return;\r\n                }\r\n            }\r\n            edit = this.arr.filter((elem) => {\r\n                for (let prop in filterConfig) {\r\n                    if (elem[prop] !== filterConfig[prop]) {\r\n                        return false;\r\n                    }\r\n                }\r\n                return true;\r\n            })\r\n        }\r\n        console.log('edit',edit);\r\n        edit.sort((a, b) => -(a.createdAt - b.createdAt));\r\n        return edit.slice(skip, Math.min(edit.length, skip + top));\r\n    }\r\n\r\n    removePhotoPost(id) {\r\n        const ind = this.arr.findIndex((elem) => elem.id === id);\r\n        if (ind === -1) {\r\n            console.log(\"No element with such id\");\r\n            return false;\r\n        }\r\n        this.arr.splice(ind, 1);\r\n        return true;\r\n    }\r\n\r\n    getPhotoPost(id) {\r\n        const ind = this.arr.findIndex((elem) => elem.id === id);\r\n        if (ind === -1) {\r\n            console.log(\"No element with such id\");\r\n            return;\r\n        }\r\n        return this.arr[ind];\r\n    }\r\n    \r\n}\r\n\r\nmodule.exports = {\r\n    PhotoArr,\r\n    PhotoPost,\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./task5/PostLogic.js?");

/***/ }),

/***/ "./task5/components/ImageBox.js":
/*!**************************************!*\
  !*** ./task5/components/ImageBox.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (photoPost,editmatch) {\r\n    let date=photoPost.createdAt.toString().match(/.+GMT/)[0];\r\n    date=date.substring(4,date.length-4);\r\n    return (\r\n        `<li key=${photoPost.id} class=\"image-box\">\r\n            <div class=\"image-head\">\r\n                <div class=\"header-width-limiter\">\r\n                    <h2>${photoPost.author}</h2>\r\n                </div>\r\n                ${editmatch}\r\n            </div>\r\n            <img class=\"image-staff\" src=${photoPost.photoLink}></img>\r\n            <div class=\"image-like\">\r\n                <img ind=${photoPost.id} class=\"like-btn\" src=\"http://icons.iconarchive.com/icons/icons8/ios7/512/Messaging-Like-icon.png\"></img>\r\n                <div></div>\r\n                <div class=\"like-text\">\r\n                    <b class=\"like-count\">${photoPost.arrLiker.length}</b>\r\n                </div>\r\n            </div>\r\n            <div class=\"image-info\">\r\n                <span>\r\n                    <b>${photoPost.author}:</b>\r\n                    <span class=\"image-desc\">${photoPost.description}</span>\r\n                    ${photoPost.arrHash.map((e)=>{\r\n                        return `<a class=\"hashtag\" href=\"#${e}\">#${e}</a>`\r\n                    })}\r\n                </span>\r\n                <span class=\"date\">${date}</span>\r\n            </div>\r\n        </li>`\r\n    )\r\n}\n\n//# sourceURL=webpack:///./task5/components/ImageBox.js?");

/***/ }),

/***/ "./task5/components/MainPage.js":
/*!**************************************!*\
  !*** ./task5/components/MainPage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports =`<div id=\"filterBlock\" class=\"filter-info\">\r\n    <h2>Filter</h2>\r\n    <input id=\"filterInput\" type=\"text\" placeholder=\"Search...\">\r\n        <div>\r\n            <div>From:</div>\r\n            <input id=\"filterFrom\" type=\"date\" >\r\n</div>\r\n            <div>\r\n                <div>To:</div>\r\n                <input id=\"filterTo\" type=\"date\">\r\n</div>\r\n                <button class=\"join-button\">Join</button>\r\n            </div>\r\n            <div id=\"userMenu\">\r\n                <div id=\"userMenuTitle\" class=\"h2\"></div>\r\n                <button id=\"add\" class=\"button\">add</button>\r\n                <button id=\"logoff-button\">Log off</button>\r\n            </div>\r\n            <div class=\"wraper\">\r\n                <div class=\"header\">\r\n                    <div class=\"header-width-limiter\">\r\n                        <h2 id=\"globalUserName\">Username</h2>\r\n                    </div>\r\n                    <img class=\"search-btn\" src=\"https://web.library.uq.edu.au/files/37556/search-icon.png\"></img>\r\n                    <div></div>\r\n                    <img class=\"menu-btn\" src=\"https://www.evernote.com/redesign/business/BusinessHomeAction/letters/c_60px_1.png\"></img>\r\n                </div>\r\n                <div class=\"wrap-staff-footer\">\r\n                    <ul id=\"staff\" class=\"staff\">\r\n\r\n                    </ul>\r\n                    <div class=\"footer\">\r\n                        <div></div>\r\n                        <div class=\"footer-block\">\r\n                            <h3>СКЕМ stogramm</h3>\r\n                        </div>\r\n\r\n                        <div class=\"footer-block\">\r\n                            <h3>Shpuntov Ivan</h3>\r\n                        </div>\r\n\r\n                        <div class=\"footer-block todel\">\r\n                            <h3>2 курс 5 группа</h3>\r\n                        </div>\r\n\r\n                        <div class=\"footer-block todel\">\r\n                            <h3>cultural. nickname @gmail.com</h3>\r\n                        </div>\r\n\r\n                        <div class=\"footer-block todel\">\r\n                            <h3>17.02. 2018</h3>\r\n                        </div>\r\n                        <div></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <script src=\"../task5/build.js\"></script>`\n\n//# sourceURL=webpack:///./task5/components/MainPage.js?");

/***/ }),

/***/ "./task5/components/logon.js":
/*!***********************************!*\
  !*** ./task5/components/logon.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\r\n  return (\r\n    `     <div class=\"background\">\r\n          <div class=\"logonBlock\">\r\n            <div class=\"head\"><div class=\"h2\">Sign Up</div> <img class=\"logo\" src=\"https://www.evernote.com/redesign/business/BusinessHomeAction/letters/c_100px_1.png\"></div>\r\n            <form id=\"logOnForm\" class=\"inputForm\">\r\n              <input id=\"inputNickname\" class=\"inputfield\" placeholder=\"Nickname\">\r\n              <input id=\"inputPassword\" class=\"inputPassword\" type=\"password\" placeholder=\"Password\">\r\n              <input class=\"submit\" type=\"submit\" value=\"Register\">\r\n            </form>\r\n          </div>\r\n          </div>`\r\n  )\r\n}\n\n//# sourceURL=webpack:///./task5/components/logon.js?");

/***/ }),

/***/ "./task5/index.js":
/*!************************!*\
  !*** ./task5/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {logOn} = __webpack_require__(/*! ./App */ \"./task5/App.js\");\r\nconst initPage = __webpack_require__(/*! ./components/logon */ \"./task5/components/logon.js\");\r\n\r\nconst body = document.body;\r\n\r\nbody.innerHTML = initPage();\r\nconst logOnBlock = document.getElementById('logOnForm');\r\nlogOnBlock.addEventListener('submit', logOn);\n\n//# sourceURL=webpack:///./task5/index.js?");

/***/ }),

/***/ "./task5/resources/UserStore.js":
/*!**************************************!*\
  !*** ./task5/resources/UserStore.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=[\r\n    {\r\n        username:\"Galante\",\r\n        password:\"thebest\",\r\n    },\r\n    {\r\n        username:\"Transsilver\",\r\n        password:\"dfvfdv\",\r\n    },\r\n    {\r\n        username:\"Echo\",\r\n        password:\"werwerwr\",\r\n    },\r\n]\n\n//# sourceURL=webpack:///./task5/resources/UserStore.js?");

/***/ })

/******/ });