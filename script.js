
// book class
class Book {
	constructor(title, author, pages, read) {
		this.title = title
		this.author = author
		this.pages = pages
		this.read = read
	}
}

// initialize empty array
let booksLibrary = [];

// initialize inputs
const bookTitle = document.querySelector("#book-title")
const bookAuthor = document.querySelector("#book-author")
const bookPages = document.querySelector("#book-pages")
const bookRead = document.querySelector("#book-read")

// initialize book section
const booksSection = document.querySelector(".books")

// initialize book form
const bookForm = document.getElementById("book-form")

// delete book func
function deleteBook(e) {
	const id = e.target.parentElement.dataset.id
	// looks at index of the book in the booklibrary array and filters out the corresponding id of the parent element dataset.id
	booksLibrary = booksLibrary.filter(book => booksLibrary.indexOf(book) !== parseInt(id))
	// render the modified booksLibrary
	renderBooks(booksLibrary)
}
function toggleRead(e) {
	const bookId = e.target.parentElement.dataset.id
	
}
function renderBooks(arr) {
	// clear the inner html of books section
	booksSection.innerHTML = ""
	// map over every book in books library and create corresponding elements
	arr.map(book => {
		let section = document.createElement("section")
		section.classList.add("book-card")
		section.dataset.id = arr.indexOf(book)
		let elTitle = document.createElement("p")
		elTitle.textContent = `Title: ${book.title}`

		let elAuthor = document.createElement("p")
		elAuthor.textContent = `Author: ${book.author}`

		let elPages = document.createElement("p")
		elPages.textContent = `Pages: ${book.pages}`

		let elRead = document.createElement("button")
		elRead.textContent = `${book.read}`
		elRead.addEventListener("click", toggleRead)

		let closeBtn = document.createElement("button")
		closeBtn.textContent = "remove"
		closeBtn.addEventListener("click", deleteBook)
		// append elements to book section
		section.append(closeBtn, elTitle, elAuthor, elPages, elRead)
		// append sectioned elements to books section
		booksSection.append(section)
	})
}
// addbook func
function addBook(e) {
	// prevents form default behaviour
	e.preventDefault()
	let readStatus = ""
	if (bookRead.checked) {
		readStatus = "Read"
	} else if (!bookRead.checked) {
		readStatus = "Not read"
	} 
	console.log(bookRead.value)
	// create an instance of book with input values
	let newBook = new Book(
		bookTitle.value,
		bookAuthor.value,
		bookPages.value,
		readStatus
	)
	// push created book into booksLibrary array
	booksLibrary.push(newBook)
	// render booksLibrary
	renderBooks(booksLibrary)
}

// on book form submit run addbook func
bookForm.addEventListener("submit", addBook)