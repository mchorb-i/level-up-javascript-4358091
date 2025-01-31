class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  // Method
  getEdition() {
    return `The current edition of this book is ${this.edition}`;
  }
}

const jsForDummiesBook = new TechnicalBook('JS for dummies', 'unknown', 123457, 5, 2);

console.log(jsForDummiesBook.availability);
console.log(jsForDummiesBook.getEdition());