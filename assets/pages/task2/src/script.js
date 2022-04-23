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
            vacancies.push(`${element.employer.name} - ${element.name}, ЗП: ${element.salary != null ? (element.salary.from == null ? `до ${element.salary.to}` : `от ${element.salary.from}`) + ' ' + element.salary.currency : 'Не указана'}`);
        });
        document.querySelector('#rest-result').textContent = vacancies.join('\n');
    })
    .catch(error => {
        alert(error.message);
    });
})