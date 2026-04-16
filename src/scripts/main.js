'use strict';

function showNotification(type, message) {
  const notification = document.createElement('div');

  // eslint-disable-next-line max-len
  notification.className =
    'message' + (type === 'error' ? ' error-message' : '');
  notification.textContent = message;
  document.body.appendChild(notification);
}

const firstPromise = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', (eventy) => {
      if (eventy.button === 0) {
        resolve('Promise was resolved!');
      }
    });
  }
});

firstPromise
  .then((message) => showNotification('success', message))
  .catch((err) => showNotification('error', err.message));

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

secondPromise
  .then((message) => showNotification('success', message))
  .catch((err) => showNotification('error', err.message));
