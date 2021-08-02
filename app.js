// Selectors
const bookTitle = document.querySelector('.title-input');
const bookAuthor = document.querySelector('.author-input');
const bookPages = document.querySelector('.pages-input');
const bookRead = document.querySelector('.read-input');
const addButton = document.querySelector('.add-button');
const bookList = document.querySelector('.book-list');



// Event Listeners
addButton.addEventListener('click', addBook);


// Functions
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read} yet`
    }
}

function addBookToLibrary(title, author, pages, read) {
    // Grab book info from inputs
    title = bookTitle.value;
    author = bookAuthor.value;
    pages = bookPages.value;
    read = bookRead.value;
    // Push new book to library array
    myLibrary.push(Book(title, author, pages, read));
}


function addBook(e, library) {
    // Loop through array
    for (let book in library) {

    }
    // Prevent form from submitting
    e.preventDefault();
    // Create new book div
    const bookDiv = document.createElement('div');
    bookDiv.classList.toggle('.book');
    // Create title element
    const title = document.createElement('li');
    title.innerText = bookTitle.value;
    title.classList.toggle('book-title');
    bookDiv.appendChild(title);
    // Create book info list
    const bookInfo = document.createElement('ul');
    bookInfo.classList.toggle('book-info');
    // Create author element
    const author = document.createElement('li');
    author.classList.toggle('book-author');
    bookInfo.appendChild(author);
    // Create pages element
    const pages = document.createElement('li');
    pages.classList.toggle('book-info');
    bookInfo.appendChild(pages);
    // Create read button
    const readButton = document.createElement('button');
    readButton.innerText = 'read';
    readButton.classList.toggle('book-read');
    bookInfo.appendChild(readButton);
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.toggle('delete');
    bookInfo.appendChild(deleteButton);
    // Add all book info to book div
    bookDiv.appendChild(bookInfo);
    // Add book div to book list
    bookList.appendChild(bookDiv);
    // Clear input values
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.value = '';
}