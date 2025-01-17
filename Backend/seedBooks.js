import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './model/book.model.js';

dotenv.config();

const URI = process.env.MongoDBURI;

const books = [
    {
        "id": 1,
        "name": "Fantasy Book",
        "title": "The Hobbit",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 2,
        "name": "Science Fiction",
        "title": "Dune",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 3,
        "name": "Mystery Novel",
        "title": "The Girl with the Dragon Tattoo",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 4,
        "name": "Historical Fiction",
        "title": "All the Light We Cannot See",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 5,
        "name": "Romantic Novel",
        "title": "Pride and Prejudice",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 6,
        "name": "Biography",
        "title": "Steve Jobs",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 7,
        "name": "Self-Help Book",
        "title": "The Power of Habit",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 8,
        "name": "Children's Book",
        "title": "Harry Potter and the Sorcerer's Stone",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 9,
        "name": "Adventure Book",
        "title": "Life of Pi",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    },
    {
        "id": 10,
        "name": "Thriller",
        "title": "Gone Girl",
        "category": "Free",
        "price": 0,
        "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1716196085~exp=1716199685~hmac=54f46079085e546979ee38a11a81c8703f22eea2fbe36893f52cfd519d20507d&w=740"
    }
];

const seedBooks = async () => {
    try {
        await mongoose.connect(URI);
        await Book.deleteMany(); // Clear existing books
        await Book.insertMany(books);
        console.log("Books inserted successfully!");
        await mongoose.disconnect();
    } catch (error) {
        console.error("Error inserting books:", error);
    }
};

seedBooks();
