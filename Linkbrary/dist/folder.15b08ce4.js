const e=document.querySelector(".play-button"),t=document.querySelector(".player-card-list"),n=document.querySelector(".dealer-card-list"),o=document.querySelector(".player-score"),r=document.querySelector(".dealer-score"),l=document.querySelector(".balance"),c=document.querySelector(".current-bet"),s=["♠","♥","♦","♣"],a=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];function d(){let e=[];for(let n=0;n<a.length;n++)for(let o=0;o<s.length;o++){let r=parseInt(a[n]);("J"==a[n]||"Q"==a[n]||"K"==a[n])&&(r=10),"A"==a[n]&&(r=11);var t={Value:a[n],Suit:s[o],Weight:r};for(let n=0;n<6;n++)e.push(t)}return e=function(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}(e),alert("셔플하겠습니다"),e}document.querySelector(".play-button").addEventListener("click",function(){i=d(),e.classList.add("hidden"),document.querySelector(".blackjack-start").classList.toggle("hidden"),document.querySelector(".bet-controller").classList.toggle("hidden")}),document.querySelector(".blackjack-start").addEventListener("click",function(){document.querySelector(".rules").classList.toggle("hidden"),document.querySelector(".blackjack-start").classList.toggle("hidden"),document.querySelector(".bet-controller").classList.toggle("hidden"),document.querySelector(".game-controller").classList.toggle("hidden"),document.querySelector(".player-card-display").classList.toggle("hidden"),document.querySelector(".dealer-card-display").classList.toggle("hidden"),i.length<50&&(i=d()),g(u,t,o),C(o,t),g(u,t,o),C(o,t),g(m,n,r),C(r,n),21===k(t)&&setTimeout(h(!0),500)}),document.getElementById("stay").addEventListener("click",y),document.getElementById("hit").addEventListener("click",p),document.querySelector("#plus-5").addEventListener("click",L),document.querySelector("#plus-50").addEventListener("click",L),document.querySelector("#plus-500").addEventListener("click",L),document.querySelector("#minus-5").addEventListener("click",I),document.querySelector("#minus-50").addEventListener("click",I),document.querySelector("#minus-500").addEventListener("click",I),document.querySelector(".restart-button").addEventListener("click",function(){document.querySelector(".bet-controller").classList.toggle("hidden"),document.querySelector(".blackjack-start").classList.toggle("hidden"),document.querySelector(".restart-button").classList.toggle("hidden")}),document.querySelector("#double").addEventListener("click",function(){let e=parseInt(c.textContent),t=parseInt(l.textContent);if(e>t){alert("돈이 부족한데요?");return}t-=e,e*=2,p(),c.textContent=e,l.textContent=t,y()}),document.querySelector("#hogu").addEventListener("click",function(){let e=parseInt(l.textContent);e+=500,l.textContent=e,alert("500 더 드렸습니다\n도박중독 전문상담 국번없이 1336")});let i=[],u=[],m=[];function g(e,t,n){let o,r,l,c,s=i.pop();if(parseInt(s.Weight)+k(t)>21){let e;for(card of cards=t.querySelectorAll(".card"))"11"==card.querySelector(".weight").textContent&&(e=card);e&&(e.querySelector(".weight").textContent=1),e||11!=s.Weight||(s.Weight=1)}e.push(s),console.log("rendercard"),t.appendChild(((o=document.createElement("div")).className="card",(r=document.createElement("div")).textContent=s.Suit,o.appendChild(r),(l=document.createElement("div")).textContent=s.Value,l.className="value",o.appendChild(l),(c=document.createElement("div")).textContent=s.Weight,c.className="weight",c.classList.add("hidden"),o.appendChild(c),("♦"===s.Suit||"♥"===s.Suit)&&o.classList.add("red-suit"),o))}function C(e,t){let n=0;n=k(t),e.textContent=n}function p(){g(u,t,o),C(o,t),parseInt(o.textContent)>21&&setTimeout(500,h())}async function y(){async function e(){if(parseInt(r.textContent)>=17||parseInt(o.textContent)>21)return!0;g(m,n,r),C(r,n),await new Promise(e=>setTimeout(e,1e3)),await e()}await e(),h()}function h(e=!1){document.querySelector(".game-controller").classList.toggle("hidden"),e?setTimeout(E,500):parseInt(o.textContent)>21?setTimeout(S,500):parseInt(r.textContent)>21||parseInt(r.textContent)<parseInt(o.textContent)?setTimeout(x,500):parseInt(r.textContent)===parseInt(o.textContent)?setTimeout(f,500):setTimeout(S,500),setTimeout(q,1e3)}function x(){console.log("playerwin");let e=parseInt(c.textContent),t=parseInt(l.textContent);t+=2*e,l.textContent=t,alert("YOU WIN!\n운이 좋군요?")}function S(){console.log("dealerwin"),alert("YOU LOSE\n블랙잭은 '실력게임' 입니다")}function f(){let e=parseInt(c.textContent),o=parseInt(l.textContent);o+=e,l.textContent=o,console.log(m),console.log(n),console.log(u),console.log(t),alert("PUSH(무승부)\n놀라셨나요?")}function q(){for(console.log("reset Game"),document.querySelector(".player-card-display").classList.toggle("hidden"),document.querySelector(".dealer-card-display").classList.toggle("hidden"),document.querySelector(".restart-button").classList.toggle("hidden"),c.textContent=0,o.textContent=0,r.textContent=0;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);u=[],m=[]}function L(e){let t=e.target,n=parseInt(l.textContent),o=parseInt(t.textContent.replace("+","")),r=parseInt(c.textContent);if(n<o){alert("베팅 금액이 부족합니다\n산와 산와 산와머니~");return}n-=o,r+=o,l.textContent=n,c.textContent=r}function I(e){let t=e.target,n=parseInt(l.textContent),o=parseInt(t.textContent),r=parseInt(c.textContent);if(o+r<0){alert("쫄?");return}n-=o,r+=o,l.textContent=n,c.textContent=r}function E(){console.log("playerblack");let e=parseInt(c.textContent),t=parseInt(l.textContent);t+=2.5*e,l.textContent=t,alert("NICE BLACKJACK...")}function k(e){let t=e.getElementsByClassName("card"),n=0;for(let e=0;e<t.length;e++){let o=t[e].getElementsByClassName("weight")[0];o&&(n+=parseInt(o.textContent))}return n}
//# sourceMappingURL=folder.15b08ce4.js.map
