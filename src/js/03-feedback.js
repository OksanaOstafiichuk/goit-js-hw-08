import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
}
const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = {};

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onSubmitForm);
dataVarification();

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function dataVarification() {
    let savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedFormData) {
        savedFormData = JSON.parse(savedFormData);
       
        Object.entries(savedFormData).forEach(([name, value]) => {
            formData[name] = value;
            refs.form.elements[name].value = value;
        });
    }
}

function onSubmitForm(evt) {
    evt.preventDefault();

    if (refs.form.email.value === '' || refs.form.message.value === '') {
        alert('Fill in the fields: email, message')
    }

    formData = {};
    console.log(formData);  
    
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}