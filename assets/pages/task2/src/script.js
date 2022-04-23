const requests = require('axios').default;
const api = 'https://api.hh.ru/vacancies';  

document.querySelector('#search').addEventListener('click', event => {
    const value = document.querySelector('#vac-search').value;
    const req = (value == null ? requests.get(api) : requests.get(api, {
        params: {
            text: value
    }}))
    req.then(response => {
        var vacancies = []
        response.data.items.forEach(element => {
            vacancies.push(`${element.name}</br>    ${element.employer.name} - ЗП: ${element.salary != null ? (element.salary.from == null ? `до ${element.salary.to}` : `от ${element.salary.from}`) + ' ' + element.salary.currency : 'Не указана'}<br>  <div class="divider"></div>`);
        });
        var html=`<p>`;
        for(var i=0;i<vacancies.length;i++){
            html+=vacancies[i]+'</br>';
        }
        html+='</p>';
        document.querySelector('#rest-result').innerHTML = html;
        
    })
    .catch(error => {
        alert(error.message);
    });
    
})