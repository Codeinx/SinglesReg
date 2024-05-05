const scriptURL = 'https://script.google.com/macros/s/AKfycbzgpLHBH2bR-m1Gvf4ESCjNuuCbGQvo1Q_VvHPPqSEuFbhd9yGkgou-A4ljPL8NKZ4XWw/exec'

const form = document.forms['sop-Reg']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert('Thank you'))
    .then(() => {window.location.reload()})
    .catch(error => console.error('Error!', error.message))
    // console.log(form);
})

