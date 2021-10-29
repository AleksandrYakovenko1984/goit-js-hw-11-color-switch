import refs from './refs.js'
const {body, start, stop} = refs

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let pushInterval 
start.addEventListener('click', (e) => {
   pushInterval = setInterval(() => {
  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
    };
    body.style.backgroundColor = colors[randomIntegerFromInterval(1, colors.length)]
  start.disabled = true;
}, 1000)  
})

stop.addEventListener('click', (e) => {
  clearInterval(pushInterval)
  start.disabled = false;
})

