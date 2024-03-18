function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequire4fc2;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire4fc2=o);var a=o.register;a("kkxYr",function(t,r){e(t.exports,"handleSubmit",()=>l),e(t.exports,"handlePasswordToggleClick",()=>i),e(t.exports,"setFocusInOutListenerById",()=>c);var n=o("g2Qjw"),a=o("4UL1w");function s(e){let t=e.target;(0,n.removeErrorMessage)(t.parentElement)}function u(e){let t=a.FOCUS_OUT_FUNCTIONS[e.target.id];t&&t(e.target)}function l(e){e.preventDefault();let t=document.activeElement;t&&t.blur(),(0,a.SUBMIT_FUNCTIONS[e.target.id])()}function i(e){e.preventDefault();let t=e.currentTarget.previousElementSibling;t.type="password"===t.type?"text":"password",e.currentTarget.querySelectorAll("img").forEach(e=>{e.classList.toggle("hidden"),e.style.opacity=e.classList.contains("hidden")?0:1})}function c(e){let t=document.querySelector(e);t&&(t.addEventListener("focus",s),t.addEventListener("focusout",u))}}),a("g2Qjw",function(t,r){function n(e,t){o(e);let r=document.createElement("P");r.textContent=t,r.className="error-message",e.appendChild(r),e.querySelector(".sign-input").classList.add("wrong-input")}function o(e){let t=e.querySelector(".error-message");t&&e.removeChild(t),e.querySelector(".sign-input").classList.remove("wrong-input")}e(t.exports,"default",()=>n),e(t.exports,"removeErrorMessage",()=>o)}),a("4UL1w",function(t,r){e(t.exports,"FOCUS_OUT_FUNCTIONS",()=>u),e(t.exports,"SUBMIT_FUNCTIONS",()=>l),e(t.exports,"EMAIL",()=>i),e(t.exports,"PASSWORD",()=>c);var n=o("dxKPH"),a=o("MKGdC"),s=o("dqAWj");let u={"user-email":n.default,password:s.default,"password-check":s.isSamePassword},l={"sign-in-form":a.signInSubmit,"sign-up-form":a.signUpSubmit},i="test@codeit.com",c="codeit101"}),a("dxKPH",function(t,r){e(t.exports,"default",()=>s);var n=o("4UL1w"),a=o("g2Qjw");function s(e){var t;return 0===e.value.length?((0,a.default)(e.parentElement,"이메일을 입력해주세요"),!1):(t=e.value,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))?!document.querySelector("#sign-up-form")||e.value!==n.EMAIL||((0,a.default)(e.parentElement,"이미 사용중인 이메일입니다"),!1):((0,a.default)(e.parentElement,"올바른 이메일 주소가 아닙니다."),!1)}}),a("MKGdC",function(t,r){e(t.exports,"signInSubmit",()=>s),e(t.exports,"signUpSubmit",()=>u);var n=o("bymNe");o("bd2dY");var a=o("2nZKm");function s(){(0,n.requestAuthorization)(document.querySelector("#user-email"),document.querySelector("#password"))}function u(){(0,a.default)(document.querySelector("#user-email"),document.querySelector("#password"),document.querySelector("#password-check"))}}),a("bymNe",function(t,r){e(t.exports,"requestAuthorization",()=>s);var n=o("g2Qjw"),a=o("47Y78");async function s(e,t){var r,o;if(!(0,a.isValidInput)(e,t))return;let s={email:e.value,password:t.value};console.log(s);let u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};try{let e=await fetch("https://bootcamp-api.codeit.kr/api/sign-in",u);r=await e.json(),console.log(r),o=r.accessToken,localStorage.setItem("acessToken",o),window.location.href="/folder.html"}catch(r){console.log(r),(0,n.default)(e.parentElement,"이메일을 확인해 주세요"),(0,n.default)(t.parentElement,"비밀번호를 확인해 주세요")}}}),a("47Y78",function(t,r){e(t.exports,"isValidInput",()=>u),e(t.exports,"isCorrectInput",()=>l);var n=o("dxKPH"),a=o("dqAWj"),s=o("4UL1w");function u(e,t){return(0,n.default)(e)&&(0,a.default)(t)}function l(e,t){return s.EMAIL===e.value&&s.PASSWORD===t.value}}),a("dqAWj",function(t,r){e(t.exports,"default",()=>a),e(t.exports,"isSamePassword",()=>s);var n=o("g2Qjw");function a(e){let t=e.value;return document.querySelector("#sign-up-form")&&!function(e){let t=e.value;return!!(!(t.length<8)&&/[a-zA-Z]/.test(t)&&/\d/.test(t))}(e)?((0,n.default)(e.parentElement,"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."),!1):0!==t.length||((0,n.default)(e.parentElement,"비밀번호를 입력해주세요"),!1)}function s(e){return document.querySelector("#password").value===document.querySelector("#password-check").value||((0,n.default)(e.parentElement,"비밀번호가 일치하지 않아요"),!1)}}),a("bd2dY",function(e,t){o("47Y78"),o("g2Qjw")}),a("2nZKm",function(t,r){e(t.exports,"default",()=>s);var n=o("dxKPH"),a=o("dqAWj");function s(e,t,r){(0,n.default)(e)&&(0,a.default)(t)&&(0,a.isSamePassword)(r)&&(window.location.href="../folder.html")}});var s=o("kkxYr");!function(){if(console.log(localStorage.getItem("accessToken")),localStorage.getItem("accessToken")){window.location.href="/folder";return}document.querySelector(".pw-toggle-btn").addEventListener("click",s.handlePasswordToggleClick),(0,s.setFocusInOutListenerById)("#user-email"),(0,s.setFocusInOutListenerById)("#password"),document.querySelector(".sign-form").addEventListener("submit",s.handleSubmit)}();
//# sourceMappingURL=index.eeca3990.js.map
