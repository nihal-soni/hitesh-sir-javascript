const books = [
  { title: "The Bible", genre: "Religious", published: 1930, edition: 2000 },
  {
    title: "The Alchemist",
    genre: "Adventure",
    published: 1988,
    edition: 2010,
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    published: 2003,
    edition: 2010,
  },
  { title: "The Code", genre: "Mystery", published: 2003, edition: 2012 },
  { title: "The Hobbit", genre: "Fantasy", published: 1937, edition: 2010 },
  { title: "the nihal", genre: "Fantasy", published: 1997, edition: 2016 },
];

const userBooks = books.filter( (book) => book.genre === "Mystery");

const userBooks2 = books.filter((book) => {
  return book.published >= 1990 && book.genre === "Fantasy";
});

console.log(userBooks);
console.log(userBooks2);
