// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 7
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}
const book = new Book("Algorithms", 320);
console.log(book.summary());
