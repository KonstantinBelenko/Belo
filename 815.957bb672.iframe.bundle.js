"use strict";(self.webpackChunkdesign_system_boilerplate=self.webpackChunkdesign_system_boilerplate||[]).push([[815],{"./dist/esm/belo-text-area.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{belo_text_area:()=>BeloTextArea});var _index_736b6151_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-736b6151.js");const BeloTextArea=class{constructor(hostRef){(0,_index_736b6151_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.count=0,this.maxlength=void 0,this.placeholder=void 0,this.disabled=void 0}onTextareaInput(event){this.count=event.target.value.length,console.log(this.count)}render(){return(0,_index_736b6151_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_736b6151_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",{maxlength:this.maxlength,placeholder:this.placeholder,class:this.disabled?`${this.disabled}-text ${this.disabled}`:void 0,onInput:event=>this.onTextareaInput(event)}),(0,_index_736b6151_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,this.count,"/",this.maxlength))}};BeloTextArea.style=":host{display:block}textarea{box-sizing:border-box;resize:none;width:400px;height:119px;border-color:var(--belo-color-border-color-border-gray-200);border-radius:6px;padding-left:16px;padding-top:18px;font-size:calc(var(--belo-font-family-font-family-text-font-size) * 1px);color:black}textarea::placeholder{font-size:calc(var(--belo-font-family-font-family-text-font-size) * 1px);color:var(--belo-color-text-color-text-weak)}p{box-sizing:border-box;font-size:calc(var(--belo-font-size-font-size-20-font-size) * 1px);font-weight:bold;margin-top:0px;padding-left:5px}textarea:focus{outline:none;border-color:var(--belo-color-border-color-border-gray-400);border-width:2px}.disabled{background-color:var(--belo-color-background-color-background-gray-25);pointer-events:none}.disabled-text::placeholder{color:var(--belo-color-text-color-text-weaker)}"}}]);