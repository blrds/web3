new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),document.querySelector("#calculate").addEventListener("click",(e=>{const t=document.querySelector("#result-area"),n=document.querySelector("#type"),i=document.querySelector("#duration"),p=document.querySelector("#money");0!=n.selectedIndex&&(t.textContent=`\n\nВклад "${n.options[n.selectedIndex].text}" на срок "${i.options[i.selectedIndex].text}" на сумму ${p.value} руб.\n\n    В конце срока вы получите ${parseFloat(p.value)+parseFloat(p.value*parseFloat(i.options[i.selectedIndex].value))} руб`)})),document.querySelector("#type").addEventListener("change",(e=>{switch(time=document.querySelector("#duration"),time.innerHTML=null,e.target.value){case"1":time.appendChild(new Option("6 месяцев","0.1",!0)),time.appendChild(new Option("1 год","0.22")),time.appendChild(new Option("1.5 года","0.225")),time.appendChild(new Option("2 года","0.20"));break;case"2":time.appendChild(new Option("3 месяца","0.075",!0)),time.appendChild(new Option("6 месяцев","0.11")),time.appendChild(new Option("9 месяцев","0.1725")),time.appendChild(new Option("1 год","0.24")),time.appendChild(new Option("1.5 года","0.27")),time.appendChild(new Option("2 года","0.3"))}}));
//# sourceMappingURL=task1.js.map