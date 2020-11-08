'use strict';

const container = document.querySelector('.container');

if (container === null || !(container instanceof HTMLDivElement)) {
  throw new Error('Сontainer not found');
}

const CODES = [
  ...['KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'],
  ...['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'],
];

/**
 * @param {Event} event
 * @returns {void}
 */
function clickHandler(event) {
  if (
    event.target instanceof HTMLElement &&
    event.target.classList.contains('key')
  ) {
    new Audio(`./audio/Key${event.target.textContent}.mp3`)
      .play()
      .catch((error) => console.error(error));
  }
}

container.addEventListener('click', clickHandler);

/**
 * @param {KeyboardEvent} event
 * @returns {void}
 */
function keydownHandler(event) {
  if (CODES.includes(event.code)) {
    new Audio(`./audio/${event.code}.mp3`)
      .play()
      .catch((error) => console.error(error));
  }
}

document.addEventListener('keydown', keydownHandler);
