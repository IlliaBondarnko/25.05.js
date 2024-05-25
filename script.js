// 1)Додайте data-src атрибут до тегів img, який містить посилання на зображення, яке необхідно завантажити.

// 2)Додайте CSS стилі, які забезпечують мінімальну висоту тегів img та фоновий колір для видимих зображень, які ще не завантажені.
// img { height: 200px; background-color: #f0f0f0; }

// 3)Створіть JavaScript-файл та імпортуйте IntersectionObserver.

// 4)Встановіть IntersectionObserver для кожного зображення з data-src атрибутом, яке потрібно завантажити.

// 5)Для кожного зображення, яке стає видимим, змініть його src атрибут на data-src та перестаньте спостерігати його.

// 6)Додайте додаткову функціональність, таку як анімацію завантаження або зображення-заповнювач, щоб покращити користувацький досвід.

// 7)Додатково, не обов’язково! Оптимізуйте завантаження зображень за допомогою WebP формату або скейлінга зображень до відповідної роздільної здатності, щоб зменшити обсяг завантажуваної інформації.

//8) Перевірте результати за допомогою інструментів розробника браузера, таких як "Network" або "Performance", щоб переконатися, що зображення завантажуються тільки тоді, коли вони стають видимими на сторінці.

//9) Додайте можливість завантажувати зображення тільки при натисканні на кнопку або при іншій дії користувача.

// 10)Запустіть сайт на різних пристроях та перевірте, чи працює лінійне завантаження зображень, коли користувач прокручує сторінку.

// 11)Залиште коментарі в коді, щоб пояснити, як він працює та як можна його покращити в майбутньому.




const img = document.querySelectorAll("img");
const btn = document.querySelector(".btn");
let isClicked = false;


btn.addEventListener("click", onClick)

function onClick(e) {
    isClicked = true;
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        
        if (entry.isIntersecting && isClicked) {
            const image = entry.target;
            const src = image.dataset.src;
            image.src = src;
            image.style.opacity = "1"
            observer.unobserve(image)
        }
    })
})

img.forEach(imgitem => {
    observer.observe(imgitem)
    imgitem.style.opacity = "0"
})

