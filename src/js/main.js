import AOS from 'aos'
import { CountUp } from 'countup.js';

console.log('Hello world')
AOS.init({
    delay: 100,
    duration: 800,
    once: false
})
let allCounters = document.querySelectorAll('[data-counter]');
allCounters.forEach((el, idx) => {
    let original = el.textContent;
    let target = parseInt(original.replaceAll('.', '').replaceAll(',', ''))
    console.log(target)
    const countUp = new CountUp(el, target, { 
        enableScrollSpy: true,
        separator: document.querySelector('html').getAttribute('lang') == 'vn' ? '.' : ',',
        scrollSpyOnce: true,
        duration: 1.2,
        onCompleteCallback: () => {
            el.textContent = original
        }
    });
})
