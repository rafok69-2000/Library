const myLibrary = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary (title, author, pages) {
    const newBook = new Book(title, author,pages);
    myLibrary.push(newBook);
}

myLibrary.forEach((book) => {
    console.log(book);
});

const btnCreate = document.getElementById("addBook");
const modal = document.getElementById('dialogForm');
const btnClose = document.getElementById('btnCancel')

btnCreate.addEventListener('click', () => {
    modal.showModal();
})  

btnClose.addEventListener('click', () => {
    modal.close();
})