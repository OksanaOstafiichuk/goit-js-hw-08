import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    // email: document.querySelector('input'),
    // message: document.querySelector('textarea')
}
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onSubmitForm);
dataVarification();

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function dataVarification() {
    const savedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (savedFormData) {
        refs.form.email.value = savedFormData.email;
        refs.form.message.value = savedFormData.message;
    }

}

function onSubmitForm(evt) {
    evt.preventDefault();
   
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)))
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}