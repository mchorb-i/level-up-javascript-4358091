// Write your code here
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  // Set a getter to call Book.availability instead of Book.getAvailability
  get availability () {
    return this.getAvailability();
  }

  getAvailability () {
    if (!this.numCopies) {
      return 'Out of stock';
    } else if (this.numCopies < 10) {
      return 'Low stock';
    }
    return 'In stock';
  }
  
  sell(numBooksSold = 1) {
    this.numCopies -= numBooksSold;
  }

  restock(numBooksRestocked = 5) {
    this.numCopies += numBooksRestocked;
  }
}

// function Book (title, author, isbn, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (!this.numCopies) {
//     return 'Out of stock';
//   } else if (this.numCopies < 10) {
//     return 'Low stock';
//   }
//   return 'In stock';
// }

// Book.prototype.sell = function (numBooksSold = 1) {
//   this.numCopies -= numBooksSold;
// }

// Book.prototype.restock = function (numBooksRestocked = 5) {
//   this.numCopies += numBooksRestocked;
// }

const harryPotter1 = new Book('Harry Potter and the Philosopher Stone', 'JK Rowling', 123456, 5);
console.log(harryPotter1.availability);
// console.log(harryPotter1.getAvailability());

harryPotter1.restock(12);
console.log(harryPotter1.availability);
// console.log(harryPotter1.getAvailability());

harryPotter1.sell(17);
console.log(harryPotter1.availability);
// console.log(harryPotter1.getAvailability());