const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryList = document.querySelector(".gallery");

function createMarkup(imgObj) {
  const liElem = document.createElement("li");

  const imgElem = document.createElement("img");
  imgElem.classList.add("list-img");
  imgElem.setAttribute("src", imgObj.url);
  imgElem.setAttribute("alt", imgObj.alt);
  liElem.append(imgElem);

  return liElem;
}
function createsMarkups(array) {
  return array.map(createMarkup);
}
const result = createsMarkups(images);

galleryList.append(...result);

// <li><img class="list-img" src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&amp;h=750&amp;w=1260" alt="White and Black Long Fur Cat"></li>
function imageMarkup(imgObj) {
  return `<li><img class="list-img" src="${imgObj.url}" alt="${imgObj.alt}"></li>`;
}
function imagesMarkup(arr) {
  return arr.map(imageMarkup).join("\n");
}
const result2 = imagesMarkup(images);

galleryList.insertAdjacentHTML("beforeend", result2);
