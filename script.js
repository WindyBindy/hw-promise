//Завдання 1
//"Порівняння кількох промісів"
//Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.
//Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
//Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
//Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
//Обробіть результати вирішення промісів та виведіть їх у консоль.
const listEl = document.querySelector('.list')
function delayedPromise(value, delay) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`promise ${value} resolved in ${delay} ms`)
		}, delay)
	})
}
const promise2 = [
	delayedPromise('1', 1000),
	delayedPromise('2', 130),
	delayedPromise('3', 1443),
	delayedPromise('4', 800),
	delayedPromise('5', 3040),
]
Promise.all(promise2).then(result => console.log(result))
//заваданя 2
//Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.

//  Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
//Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
//Обробіть результат найшвидшого проміса та виведіть його у консоль.
function randomDelay(value) {
	return new Promise(resolve => {
		const delay = Math.floor(Math.random() * (5000 - 1000) + 1000)
		setTimeout(() => {
			resolve(`promise ${value} resolved in ${delay} ms`)
		}, delay)
	})
}
randomDelay('dlsfkjklsdjflkj').then(result => console.log(result))
const promise = [
	randomDelay('1'),
	randomDelay('2'),
	randomDelay('3'),
	randomDelay('4'),
	randomDelay('5'),
]
Promise.race(promise).then(result => console.log(result))
