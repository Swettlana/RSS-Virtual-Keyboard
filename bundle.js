(()=>{"use strict";class e{constructor(e,t="key",n=e){this.content=e,this.node=document.createElement("button"),this.node.className=t,this.node.innerText=this.content,this.node.dataset.key=n}renderKey(e){e.append(this.node),this.node.onclick=()=>{const e=document.querySelector("textarea");if(e.focus(),"Enter"===this.node.innerText)e.value+="\n";else if("Tab"===this.node.innerText)e.value+="  ";else if(""===this.node.innerText)e.value+=" ";else if("Backspace"===this.node.innerText){const t=e.selectionStart;e.value=e.value.slice(0,t-1)+e.value.slice(t),e.selectionStart=e.selectionEnd=t-1}else if("DEL"===this.node.innerText){const t=e.selectionStart;e.value=e.value.slice(0,t)+e.value.slice(t+1),e.selectionStart=e.selectionEnd=t}else if("CapsLock"===this.node.innerText){let e=!!localStorage.getItem("isCaps")||!1;e?(e=!1,this.node.classList.remove("active"),localStorage.setItem("isCaps",""),x(e)):(e=!0,localStorage.setItem("isCaps",e),this.node.classList.add("active"),x(e))}else"Ctrl"===this.node.innerText||"Win"===this.node.innerText||"Alt"===this.node.innerText||"Shift"===this.node.innerText||(e.value+=this.node.innerText)}}}const t=new e("Backspace","backspace"),n=new e("Tab","tab"),r=new e("DEL","del","Delete"),i=new e("CapsLock","caps");localStorage.getItem("isCaps")&&i.node.classList.add("active");const s=new e("Enter","enter"),o=new e("Shift","shift","ShiftRight"),l=new e("Shift","shift","ShiftLeft"),a=new e("▲","arrows","ArrowUp"),d=new e("◄","arrows","ArrowLeft"),c=new e("►","arrows","ArrowRight"),h=new e("▼","arrows","ArrowDown"),y=new e("Ctrl","ctrl","ControlRight"),p=new e("Ctrl","ctrl","ControlLeft"),u=new e("Win","win","Meta"),f=new e("Alt","alt","AltRight"),m=new e("Alt","alt","AltLeft"),w=new e("","space","Space"),S={lineOne:"`1234567890-=",lineTwo:"qwertyuiop[]\\",lineThree:"asdfghjkl;'",lineFour:"zxcvbnm,./",lineOneShift:"~!@#$%^&*()_+",lineTwoShift:"QWERTYUIOP{}|",lineThreeShift:'ASDFGHJKL:"',lineFourShift:"ZXCVBNM<>?"},T={lineOne:"ё1234567890-=",lineTwo:"йцукенгшщзхъ\\",lineThree:"фывапролджэ",lineFour:"ячсмитьбю.",lineOneShift:'Ё!"№;%:?*()_+',lineTwoShift:"ЙЦУКЕНГШЩЗХЪ/",lineThreeShift:"ФЫВАПРОЛДЖЭ",lineFourShift:"ЯЧСМИТЬБЮ,"},K=document.createElement("div"),v=document.createElement("div"),g=document.createElement("div"),k=document.createElement("div"),C=document.createElement("div");K.className=v.className=g.className=k.className=C.className="lineKeys";const L=(t,n)=>{t.forEach((t=>{new e(t).renderKey(n)}))},x=e=>{const t=document.querySelectorAll(".key");e?t.forEach((e=>e.innerText=e.innerText.toUpperCase())):t.forEach((e=>e.innerText=e.innerText.toLowerCase()))},E=(e,d="")=>{K.innerHTML="",v.innerHTML="",g.innerHTML="",k.innerHTML="",d?(L(e.lineOneShift.split(""),K),t.renderKey(K),n.renderKey(v),L(e.lineTwoShift.split(""),v),r.renderKey(v),i.renderKey(g),L(e.lineThreeShift.split(""),g),s.renderKey(g),l.renderKey(k),L(e.lineFourShift.split(""),k),a.renderKey(k),o.renderKey(k)):(L(e.lineOne.split(""),K),t.renderKey(K),n.renderKey(v),L(e.lineTwo.split(""),v),r.renderKey(v),i.renderKey(g),L(e.lineThree.split(""),g),s.renderKey(g),l.renderKey(k),L(e.lineFour.split(""),k),a.renderKey(k),o.renderKey(k))};class A{constructor(e,t,n="div",r=""){this.node=document.createElement(n),this.node.className=t,this.node.innerText=r,this.parent=e}renderNode(){this.parent.append(this.node)}}let b=!!localStorage.getItem("isCaps")&&!!localStorage.getItem("isCaps"),N=!0;const I="RSS Виртуальная клавиатура",F="Клавиатура создана в операционной системе Windows\n  Для переключения языка используется комбинация: левый Alt + Shift",O=new A(document.body,"tittle","h1",I),U=new A(document.body,"","p",F),D=new A(document.body,"app"),R=new A(D.node,"screen","textarea"),q=new A(D.node,"keyboard");O.renderNode(),D.renderNode(),U.renderNode(),R.renderNode(),q.renderNode();const M=localStorage.getItem("language")&&"RU"===localStorage.getItem("language")?T:S,H=b?M.lineOne.toUpperCase().split(""):M.lineOne.split(""),W=b?M.lineTwo.toUpperCase().split(""):M.lineTwo.split(""),B=b?M.lineThree.toUpperCase().split(""):M.lineThree.split(""),_=b?M.lineFour.toUpperCase().split(""):M.lineFour.split("");L(H,K),t.renderKey(K),n.renderKey(v),L(W,v),r.renderKey(v),i.renderKey(g),L(B,g),s.renderKey(g),l.renderKey(k),L(_,k),a.renderKey(k),o.renderKey(k),p.renderKey(C),u.renderKey(C),m.renderKey(C),w.renderKey(C),f.renderKey(C),d.renderKey(C),h.renderKey(C),c.renderKey(C),y.renderKey(C),q.node.append(K,v,g,k,C),document.onkeydown=e=>{e.altKey&&e.shiftKey?(N=!N,(e=>{e?(localStorage.setItem("language","EN"),E(S)):(localStorage.setItem("language","RU"),E(T))})(N)):"Shift"===e.key?E(N?S:T,"shift"):(e=>{R.node.focus(),document.querySelectorAll(".keyboard button").forEach((t=>{if(t.dataset.key===e.key){if("Tab"===e.key){e.preventDefault();const t=document.querySelector("textarea");t.focus(),t.value+="  "}"Alt"===e.key&&e.preventDefault(),"CapsLock"===e.key?b?(b=!1,t.classList.remove("active"),x(b),localStorage.setItem("isCaps","")):(b=!0,t.classList.add("active"),x(b),localStorage.setItem("isCaps",b)):t.classList.add("active")}t.dataset.key===e.code&&"CapsLock"!==t.dataset.key&&t.classList.add("active")}))})(e)},document.onkeyup=e=>{"Alt"===e.key?e.preventDefault():"CapsLock"===e.key||("Shift"===e.key?E(N?S:T):document.querySelectorAll(".keyboard button").forEach((e=>e.classList.remove("active"))))}})();