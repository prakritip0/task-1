
//homepage toggle functionality

const cardView = document.getElementById('cardView');
const listView = document.getElementById('listView');

const collection = document.getElementById('collection');
console.log();
cardView.addEventListener("click", function () {
    collection.style.gridTemplateColumns = 'repeat(5,1fr)';
    cardView.classList.add("toggleActive");
    listView.classList.remove("toggleActive");
    collection.classList.add("collectionCard");
    collection.classList.remove("collectionList");
});
listView.addEventListener("click", function () {
    collection.style.gridTemplateColumns = 'repeat(1,30rem)';
    listView.classList.add("toggleActive");
    cardView.classList.remove("toggleActive");
    collection.classList.add("collectionList");
    collection.classList.remove("collectionCard");
});
