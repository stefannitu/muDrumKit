import './style/index.scss';

document.querySelector('h1').innerHTML = "blabl9"

const array = [ 'one', 'two' ];
const array2 = [ ...array, 'four' ]

console.log(array2);

if (module.hot) {
    module.hot.accept();
}
