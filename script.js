let booksLibrary = [];

class Book {
	constructor(title, author, read) {
		this.title = title
		this.author = author
		this.read = read
	}
}

function addBook(title, author, read) {
	let newBook = new Book(title, author, read)
	booksLibrary.push(newBook)
}

addBook("madis", "mina", false)
addBook("annabel", "bella", true)
addBook("harry potter", "rowling", true)
addBook("1984", "george orwell", false)

const booksSection = document.querySelector(".books")
booksLibrary.map(item => {
	let section = document.createElement("section")
	let elTitle = document.createElement("p")
	elTitle.textContent = `Title: ${item.title}`
	let elAuthor = document.createElement("p")
	elAuthor.textContent = `Author: ${item.author}`
	let elRead = document.createElement("button")
	elRead.textContent = `${item.read}`
	section.classList.add("book-card")
	section.append(elTitle, elAuthor, elRead)
	booksSection.append(section)
})