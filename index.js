const card_3 = document.querySelector('.card-3');
const card_1 = document.querySelector('.card-1');

card_3.addEventListener('click', ()=>{
    window.location.href = 'jobs.html';
})
card_1.addEventListener('click', ()=>{
    console.log('working');
    window.location.href = 'profile.html';
})