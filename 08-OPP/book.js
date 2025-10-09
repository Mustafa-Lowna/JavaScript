class Book {
  title;
  author;
  year;
  pages;

  constructor(t, a, y, p) {
    this.title = t;
    this.author = a;
    this.year = y;
    this.pages = p;
  }
  printDetails() {
    console.log(
      `${this.title} is written by ${this.author}, published in year ${this.year}, ${this.pages} pages.`
    );
  }
}

const book1 = new Book("Atomic Habits", "James Clear", "2018", "320");

book1.printDetails();
