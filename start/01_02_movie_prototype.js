// Write your code here
class Movie {
  constructor (title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  // Getter
  get overview () {
    return this.getOverview();
  }

  getOverview() {
    return `${this.title}, a ${this.genre} movie directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const hungerGame1 = new Movie ('Hunger games 1', 'Director 1', 'Adventure', 2000, 4.3);
const hungerGame2 = new Movie ('Hunger games 2', 'Director 2', 'Adventure', 2010, 3.3);
const hungerGame3 = new Movie ('Hunger games 3', 'Director 3', 'Adventure', 2020, 5.0);

console.log(hungerGame1.overview);
console.log(hungerGame2.overview);
console.log(hungerGame3.overview);