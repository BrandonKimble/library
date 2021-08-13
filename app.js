// Selectors
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pagesInput = document.querySelector('.pages-input');
const readInput = document.getElementById('read');
const addButton = document.querySelector('.add-btn');
const bookList = document.querySelector('.book-list');


// Event Listeners
addButton.addEventListener('click', addBookToLibrary);
bookList.addEventListener('click', deleteBook);
bookList.addEventListener('click', toggleRead);

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

function addBookToLibrary(e) {
    // Prevent form from submitting: 
    e.preventDefault();
    // Grab book info from inputs
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    read = readInput.checked;
    // Push new book to library array
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    document.forms[0].reset();
    addBook(book);
}

function addBook(book) {
    // Create new book div
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    
    // Create title element
    const bookTitle = document.createElement('li');
    bookTitle.innerText = book.title;   
    bookTitle.classList.add('book-title');
    bookDiv.appendChild(bookTitle);
    
    // Create author element
    const bookAuthor = document.createElement('li');
    bookAuthor.innerText = book.author;
    bookAuthor.classList.add('book-author');
    bookDiv.appendChild(bookAuthor);
    
    // Create pages element
    const bookPages = document.createElement('li');
    bookPages.innerText = book.pages;
    bookPages.classList.add('book-pages');
    bookDiv.appendChild(bookPages);
    
    // Create read button
    const readButton = document.createElement('button');
    // More logic is need here to sync the read button and checkbox
    // readButton.innerText = book.read;
    book.read ? readButton.innerText = 'read' : readButton.innerText = 'not read';
    readButton.classList.add('read-btn');
    bookDiv.appendChild(readButton);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('delete-btn');
    bookDiv.appendChild(deleteButton);
    
    // Add book div to book list
    bookList.appendChild(bookDiv);
}

function deleteBook(e) {
    if (e.target.classList[0] === 'delete-btn') {
        const book = e.target.parentElement.parentElement;
        book.remove();
        const title = book.firstChild.innerText;
        myLibrary = myLibrary.filter(book => book.title !== title);
    }
}

function toggleRead(e) {
    readButton = e.target
    let book = e.target.parentElement.parentElement;
    const title = book.firstChild.innerText;
    if (readButton.classList[0] === 'read-btn') {
        readButton.innerText === 'read' ? readButton.innerText = 'not read' : readButton.innerText = 'read';
        book = myLibrary.filter(book => book.title === title)[0];
        book.read ? book.read = false : book.read = true;
    }
}