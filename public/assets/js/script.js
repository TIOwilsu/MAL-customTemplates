const axios = require('axios')

axios.get('http://localhost:9001/api/v1/myanimelist').then(({ data }) => {
    const doc = new DOMParser().parseFromString(data.html, "text/xml");
    document.querySelector('html').innerHTML = data.html
})