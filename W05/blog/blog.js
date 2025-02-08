document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu");

    // Array of recent books
    const recentBooks = [
        {
            id: 1,
            title: "Leviathan Wakes",
            date: "February 2, 2022",
            description: "The first book in the Expanse series. If you enjoy space operas, this is the book for you.",
            author: "James S.A. Corey",
            genre: "Science Fiction",
            ageRange: "16+",
            rating: "⭐⭐⭐⭐½",
            cover: "https://upload.wikimedia.org/wikipedia/en/0/08/Leviathan_Wakes.jpg",
        },
        {
            id: 2,
            title: "Septimus Heap Book One: Magyk",
            date: "July 5, 2022",
            description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
            cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
            imgAlt: "Book cover for Septimus Heap 1",
            ageRange: "10-14",
            genre: "Fantasy",
            rating: "⭐⭐⭐⭐"
        },
        {
            id: 3,
            title: "Magnus Chase Book One: Sword of Summer",
            date: "December 12, 2021",
            description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
            cover: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
            imgAlt: "Book cover for Magnus Chase 1",
            ageRange: "12-16",
            genre: "Fantasy",
            rating: "⭐⭐⭐⭐"
        }
    ];

    // Generate HTML for each book
    if (bookList) {
        recentBooks.forEach(book => {
            const bookItem = document.createElement("li");
            bookItem.classList.add("book-item");
            bookItem.innerHTML = `
                <img src="${book.cover}" alt="${book.imgAlt || book.title} cover" class="book-cover">
                <h3>${book.title}</h3>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Age Range:</strong> ${book.ageRange}</p>
                <p><strong>Rating:</strong> ${book.rating}</p>
                <p><em>${book.description}</em></p>
            `;
            bookList.appendChild(bookItem);
        });
    }

    // Toggle navigation menu visibility on button click
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // Handle menu visibility on window resize
    function handleResize() {
        if (window.innerWidth > 600) {
            navMenu.classList.add("show");  // Show the nav menu
            menuButton.style.display = "none";  // Hide the menu button
        } else {
            navMenu.classList.remove("show"); // Hide the nav menu initially
            menuButton.style.display = "block";  // Show the menu button
        }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
});
