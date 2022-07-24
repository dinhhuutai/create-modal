
var book = document.querySelector('.book');
var bookCover = document.querySelector('.book-cover');
var bookModal = document.querySelector('.book-modal');
var bookModalContainer = document.querySelector('.book-modal--container');

book.onclick = function() {
    bookCover.classList.add('to-page');
    bookCover.classList.remove('from-page');
    bookModal.classList.add('active');
}

bookModal.onmouseover = function() {
    book.classList.add('book-over');
}

bookModal.onclick = function() {
    bookModal.classList.remove('active');
    book.classList.remove('book-over');
    bookCover.classList.remove('to-page');
    bookCover.classList.add('from-page');
}

book.onmouseover = function() {
    book.classList.add('book-over');
}
book.onmouseleave = function() {
    book.classList.remove('book-over');
}

