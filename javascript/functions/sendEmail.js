export const sendEmail = () =>  {
  const form = document.querySelector('#personal_form');
  const model = document.querySelector('.personal_greeting_model');

  const sendResponse = (e) => {
    e.preventDefault();

    model.style.display = "block"
    form.reset()

    setInterval(() => {
      model.style.display = "none"
    },5000)
  }

  form.onsubmit = sendResponse;
}