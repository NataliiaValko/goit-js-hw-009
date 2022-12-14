import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const handleSubmit = e => {
  e.preventDefault();
  const formsEl = e.currentTarget.elements;
  const amount = Number(formsEl.amount.value);
  let delay = Number(formsEl.delay.value);
  const step = Number(formsEl.step.value);

  for (let position = 1; position <= amount; position += 1) {
    refs.form.reset();
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
};

refs.form.addEventListener('submit', handleSubmit);
