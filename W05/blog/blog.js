document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    // Array of recent books
    const recentBooks = [

        {
            id: 4,
            title: "Dune",
            date: "August 1, 1965",
            description: "A sci-fi classic that explores politics, religion, and the struggles of survival in a desert planet ruled by spice.",
            author: "Frank Herbert",
            genre: "Science Fiction",
            ageRange: "14+",
            rating: "⭐⭐⭐⭐⭐",
            cover: "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
            imgAlt: "Book cover for Dune"
        },
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
        },
    ];
    
    // Function to display books
    function displayBooks(books) {
        bookList.innerHTML = ""; // Clear the book list
        books.forEach(book => {
            // Create a new article element
            const bookItem = document.createElement("article");
            bookItem.classList.add("book-item");

            // Template string for article content
            bookItem.innerHTML = `
                <img src="${book.cover}" alt="${book.imgAlt || book.title} cover" class="book-cover">
                <h3>${book.title}</h3>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Age Range:</strong> ${book.ageRange}</p>
                <p><strong>Rating:</strong> ${book.rating}</p>
                <p><em>${book.description}</em></p>
            `;
            // Append the new article to the container
            bookList.appendChild(bookItem);
        });
    }

    // Initial display of books
    displayBooks(recentBooks);

    // Toggle navigation menu visibility on button click
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // Handle menu visibility on window resize
    function handleResize() {
        if (window.innerWidth > 600) {
            navMenu.classList.add("show");
            menuButton.style.display = "none";
        } else {
            navMenu.classList.remove("show");
            menuButton.style.display = "block";
        }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    // Search Functionality
    function searchBooks() {
        const query = searchInput.value.toLowerCase().trim();
        const filteredBooks = recentBooks.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.genre.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    }

    searchButton.addEventListener("click", searchBooks);
    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            searchBooks();
        }
    });
});
