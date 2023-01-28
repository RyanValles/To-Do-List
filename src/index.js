import {display} from './add-task.js';

export const tasks = document.querySelector('#tasks')
export const container = document.querySelector('#container')
const button = document.querySelector('#add');
button.addEventListener('click', display)

