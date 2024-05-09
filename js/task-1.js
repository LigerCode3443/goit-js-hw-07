// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const itemsEl = document.querySelectorAll("#categories li.item");

console.log(`Number of categories ${itemsEl.length}`);

// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

itemsEl.forEach((item) => {
  console.log(
    `
    Category: ${item.querySelector("h2").textContent}\n
    Elements:${item.querySelectorAll("li").length}`
  );
});
