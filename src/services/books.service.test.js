const BooksService = require('./books.service');

// Fake data
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      // console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });

    test('should return a name of a book', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      // console.log(books);
      // Assert
      expect(books[0].name).toBe('Harry Potter');
    });
  });
});
