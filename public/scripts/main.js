const outputEL = document.querySelector('.output');
const inputData = document.querySelector('.message');

const form = document.querySelector('.publish');
form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    
    const result = await axios.post('/', {
        notice: inputData.value,
    });
    const { data } = result;
    // console.log(data);
    outputEL.insertAdjacentHTML('beforeend',  `<li>${data.result.content.notice}</li>`);
});
// const getValue = () => {
//     const inputEl = document.querySelector('.message');
//     const value = inputEl.value;

//     const outputEL = document.querySelector('.output');

//     outputEL.insertAdjacentHTML('beforeend', value + '<br>');
// }
// const submit = document.querySelector('.submit');
// submit.addEventListener('submit', (ev) => {
//     getValue();
//     ev.preventDefault();
// })