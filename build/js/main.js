'use strict';

fetch('./build/js/data.json')
  .then(response => response.json())
  .then(jsonData => {
    const tableBody = document.querySelector("#tableBody");
    const bookInput = document.querySelector("#bookInput");
    const addButton = document.querySelector("#addButton");
    const selectedBookInput = document.querySelector("#selectedBook");

    // Function to render the table based on the selected index
    function renderTable(selectedIndex, data) {
      // Clear the previous table rows
      tableBody.innerHTML = "";

      if (selectedIndex >= 0 && selectedIndex < data.length) {
        const book = data[selectedIndex];

        // Create a new row
        const row = document.createElement("tr");

        // Create and append cells for the desired properties
        const properties = ["title", "author", "language", "year"];
        properties.forEach(property => {
          const cell = document.createElement("td");
          cell.textContent = book[property];
          row.appendChild(cell);
        });

        // Create and append the "Take out" button
        const takeOutButtonCell = document.createElement("td");
        const takeOutButton = document.createElement("button");
        takeOutButton.textContent = "Borrow";
        takeOutButton.addEventListener("click", function(event) {
          event.preventDefault();

          // Copy the book data to the input field
          const bookData = Array.from(row.cells).map(cell => cell.textContent).join(" ");
          selectedBookInput.value = bookData;

          // Remove the row from the table
          tableBody.removeChild(row);
        });
        takeOutButtonCell.appendChild(takeOutButton);
        row.appendChild(takeOutButtonCell);

        // Append the row to the table body
        tableBody.appendChild(row);
      }
    }

    addButton.addEventListener("click", function(event) {
      event.preventDefault();

      const enteredBookData = bookInput.value.trim();

      if (enteredBookData === "") {
        console.log("Please enter book data.");
        return;
      }

      const matchedBooks = jsonData.filter(book => {
        for (const property in book) {
          if (book[property].toString().toLowerCase().includes(enteredBookData.toLowerCase())) {
            return true;
          }
        }
        return false;
      });

      if (matchedBooks.length > 0) {
        // Render the table with the matched books
        matchedBooks.forEach((book) => renderTable(jsonData.indexOf(book), jsonData));

        bookInput.value = "";
        console.log("Book(s) added to the table.");
      } else {
        console.log("Book not found.");
      }
    });

    // Remove the "disabled" attribute to enable the button
    addButton.removeAttribute("disabled");
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });
  
/*
  fetch('./js/data.json')
  .then(response => response.json())
  .then(jsonData => {
    const dropdown = document.querySelector("#books");

    // Populate the dropdown with book titles
    jsonData.forEach(book => {
      const option = document.createElement("option");
      option.value = book.title;
      option.textContent = book.title;
      dropdown.appendChild(option);
    });

    // Rest of your code...

  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });
*/



fetch('./build/js/data.json')
  .then(response => response.json())
  .then(jsonData => {
    const bookForm = document.querySelector("#bookForm");
    const tableBody = document.querySelector("#tableBody");
    const booksSelect = document.querySelector("#books");

    // Function to render the table based on the selected book
// Function to render the table based on the selected book
// Function to render the table based on the selected book
function renderTable(selectedBook, data) {
    // Clear the previous table rows
    tableBody.innerHTML = "";
  
    if (selectedBook) {
      // Create a new row
      const row = document.createElement("tr");
  
      // Create and append cells for each property
      const properties = ['title', 'author', 'language', 'year'];
      properties.forEach(property => {
        const cell = document.createElement("td");
        cell.textContent = selectedBook[property];
        row.appendChild(cell);
      });
  
      // Create the "Borrow" button
      const takeOutButton = document.createElement("button");
      takeOutButton.textContent = "Borrow";
      takeOutButton.addEventListener("click", function(event) {
        event.preventDefault();
        const bookData = properties.map(property => selectedBook[property]).join(', ');
        document.querySelector("#selectedBook").value = bookData;
        // Remove the row from the table
        tableBody.removeChild(row);
      });
  
      // Create and append the cell for the button
      const buttonCell = document.createElement("td");
      buttonCell.appendChild(takeOutButton);
      row.appendChild(buttonCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    }
  }

    // Populate the dropdown list with book titles
    jsonData.forEach(book => {
      const option = document.createElement("option");
      option.value = book.title;
      option.textContent = book.title;
      booksSelect.appendChild(option);
    });

    bookForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const selectedBookTitle = booksSelect.value;

      // Find the selected book in the JSON data
      const selectedBook = jsonData.find(book => book.title === selectedBookTitle);

      if (selectedBook) {
        // Render the table with the selected book
        renderTable(selectedBook, jsonData);
      } else {
        console.log("Book not found.");
      }
    });
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });

  fetch('./build/js/data.json')
  .then(response => response.json())
  .then(jsonData => {
    const tableBody = document.querySelector("#tableBody");
    const bookInput = document.querySelector("#bookInput");
    const addButton = document.querySelector("#addButtonas");
    const selectedBookInput = document.querySelector("#selectedBook");
    const bookCard = document.querySelector(".book-card");
    const fullNameInput = document.querySelector("#fullName");
    const phoneNumberInput = document.querySelector("#phoneNumber");
    const submitButton = document.querySelector("#submitButton");
    const saveButton = document.querySelector("#saveButton");

    // Function to render the table based on the selected index
    function renderTable(selectedIndex, data) {
      // Clear the previous table rows
      tableBody.innerHTML = "";

      if (selectedIndex >= 0 && selectedIndex < data.length) {
        const book = data[selectedIndex];

        // Create a new row
        const row = document.createElement("tr");

        // Create and append cells for the desired properties
        const properties = ["title", "author", "language", "year"];
        properties.forEach(property => {
          const cell = document.createElement("td");
          cell.textContent = book[property];
          row.appendChild(cell);
        });

        // Create and append the "Take out" button
        const takeOutButtonCell = document.createElement("td");
        const takeOutButton = document.createElement("button");
        takeOutButton.textContent = "Borrow";
        takeOutButton.addEventListener("click", function(event) {
          event.preventDefault();

          // Copy the book data to the input field
          const bookData = Array.from(row.cells).map(cell => cell.textContent).join(" ");
          selectedBookInput.value = bookData;

          // Show the book card
          bookCard.style.display = "block";
        });
        takeOutButtonCell.appendChild(takeOutButton);
        row.appendChild(takeOutButtonCell);

        // Append the row to the table body
        tableBody.appendChild(row);
      }
    }

    addButton.addEventListener("click", function(event) {
      event.preventDefault();

      const enteredBookData = bookInput.value.trim();

      if (enteredBookData === "") {
        console.log("Please enter book data.");
        return;
      }

      const matchedBooks = jsonData.filter(book => {
        for (const property in book) {
          if (book[property].toString().toLowerCase().includes(enteredBookData.toLowerCase())) {
            return true;
          }
        }
        return false;
      });

      if (matchedBooks.length > 0) {
        // Render the table with the matched books
        matchedBooks.forEach((book) => renderTable(jsonData.indexOf(book), jsonData));

        bookInput.value = "";
        console.log("Book(s) added to the table.");
      } else {
        console.log("Book not found.");
      }
    });

    // Remove the "disabled" attribute to enable the button
    addButton.removeAttribute("disabled");

    // Submit form event listener
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      const fullName = fullNameInput.value.trim();
      const phoneNumber = phoneNumberInput.value.trim();
      const selectedBook = selectedBookInput.value.trim();

      // Perform any desired actions with the form data
      console.log("Full Name:", fullName);
      console.log("Phone Number:", phoneNumber);
      console.log("Selected Book:", selectedBook);

      // Clear form inputs
      fullNameInput.value = "";
      phoneNumberInput.value = "";
      selectedBookInput.value = "";

      // Hide the book card
      //bookCard.style.display = "none";
    });

    // Save button event listener (for demonstration purposes)
    saveButton.addEventListener("click", function(event) {
      event.preventDefault();

      // Perform any desired actions when the save button is clicked

      console.log("Save button clicked.");
    });
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });
/*
// Retrieve the book card element
const bookCard = document.querySelector(".book-card");

// Add a click event listener to the table body
tableBody.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    // Show the book card
    bookCard.style.display = "block";
  }
});
*/
// Retrieve the book card element
const bookCard = document.querySelector(".book-card");
const crossDiv = document.querySelector(".cross");

// Add a click event listener to the table body
tableBody.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    // Show the book card
    bookCard.style.display = "block";
  }
});

// Add a click event listener to the cross div
crossDiv.addEventListener("click", function() {
  // Hide the book card
  bookCard.style.display = "none";
});

$(document).ready(function() {
    $('#newVisitorButton').click(function() {
      $('.new-card').toggle(); // Toggle the visibility of the new-card form
    });
  });


  const newVisitorButton = document.querySelector("#newVisitorButton");
  const bookCards = document.querySelector(".book-card");
  
  newVisitorButton.addEventListener("click", function(event) {
    event.preventDefault();
    bookCards.style.display = "block";
  });


  



/*
// Add event listener to "New visitor" button
const newVisitorButtons = document.querySelector("button.new#newVisitorButton");
newVisitorButtons.addEventListener("click", function(event) {
  event.preventDefault();

  // Show the select input
  const selectedBookInputSelect = document.querySelector(".forms.toggle-in");
  selectedBookInputSelect.style.display = "block";
});

// Fetch JSON data
fetch('./js/data.json')
  .then(response => response.json())
  .then(jsonData => {
    const booksDropdown = document.querySelector("#options");

    // Clear existing options
    booksDropdown.innerHTML = "";

    // Create the default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a book";
    booksDropdown.appendChild(defaultOption);

    // Create and append options based on JSON data
    jsonData.forEach(book => {
      const option = document.createElement("option");
      option.value = book.title;
      option.textContent = book.title;
      booksDropdown.appendChild(option);
    });

    // Change the dropdown style to display as a list
    booksDropdown.style.display = "block";
    booksDropdown.style.width = "100%";
    booksDropdown.style.padding = "5px";
    booksDropdown.style.border = "1px solid #ccc";
    booksDropdown.style.borderRadius = "5px";
    booksDropdown.style.backgroundColor = "#fff";
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });
*/

// Function to toggle visibility of the visitor table
function toggleVisitorTableq() {
  const visitorTableContainerq = document.querySelector("#cardsTableContainer");
  const isVisibleq = visitorTableContainerq.style.display !== "none";
  
  if (isVisibleq) {
    visitorTableContainerq.style.display = "none";
  } else {
    visitorTableContainerq.style.display = "block";
    generateTableRows();
  }
}

// Add event listener to "Cards" button
const cardsButtonq = document.querySelector("#cardsButton");
cardsButtonq.addEventListener("click", toggleVisitorTable);

// Function to generate table rows based on the stored data
// Function to generate table rows based on the stored data
function generateTableRows() {
  // Get the table body element
  const tableBody = document.querySelector(".table-container tbody");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Retrieve the stored data from local storage
  const storedData = localStorage.getItem("visitorData");

  if (storedData) {
    // Parse the stored data
    const visitorDataArray = JSON.parse(storedData);

    // Generate table rows for each visitor data
    visitorDataArray.forEach(visitorData => {
      // Check if any of the fields are empty
      if (
        visitorData.fullName.trim() === "" ||
        visitorData.phoneNumber.trim() === "" ||
        visitorData.date.trim() === ""
      ) {
        return; // Skip creating a table row for empty data
      }

      const tableRow = document.createElement("tr");
      const fullNameCell = document.createElement("td");
      const phoneNumberCell = document.createElement("td");
      const dateCell = document.createElement("td");

      fullNameCell.textContent = visitorData.fullName;
      phoneNumberCell.textContent = visitorData.phoneNumber;
      dateCell.textContent = visitorData.date;

      tableRow.appendChild(fullNameCell);
      tableRow.appendChild(phoneNumberCell);
      tableRow.appendChild(dateCell);

      tableBody.appendChild(tableRow);
    });
  }
}


// Add event listener to submit button
const submitButtonq = document.querySelector("#submitButton");
submitButtonq.addEventListener("click", handleSubmitq);

// Function to handle form submission
function handleSubmitq(event) {
  event.preventDefault();

  // Get the form inputs
  const fullNameInput = document.querySelector("#fullName");
  const phoneNumberInput = document.querySelector("#phoneNumber");
  const selectedBookInput = document.querySelector("#selectedBook");

  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  // Create an object to store the data
  const visitorData = {
    fullName: fullNameInput.value,
    phoneNumber: phoneNumberInput.value,
    selectedBook: selectedBookInput.value,
    date: currentDate
  };

  // Retrieve the existing data from local storage
  let storedData = localStorage.getItem("visitorData");

  if (storedData) {
    // Parse the existing data
    storedData = JSON.parse(storedData);

    // Append the new data to the existing data array
    storedData.push(visitorData);
  } else {
    // Create a new array with the visitor data
    storedData = [visitorData];
  }

  // Store the updated data in local storage
  localStorage.setItem("visitorData", JSON.stringify(storedData));

  // Reset the form inputs
  fullNameInput.value = "";
  phoneNumberInput.value = "";
  selectedBookInput.value = "";

  // Generate table rows based on the stored data
  generateTableRows();
}


//-----------------------------------------------------


 



// Add event listener to "New visitor" button
const newVisitorButtons = document.querySelector("#newVisitorButton");
newVisitorButtons.addEventListener("click", function(event) {
  event.preventDefault();

  // Create the search container
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  searchContainer.style.float = "right";

  // Create the search form
  const searchForm = document.createElement("form");
  searchForm.setAttribute("action", "/action_page.php");

  // Create the dropdown input
  const dropdownInput = document.createElement("select");
  dropdownInput.setAttribute("id", "bookInput");
  dropdownInput.setAttribute("name", "bookInput");
  dropdownInput.style.padding = "6px";
  dropdownInput.style.marginTop = "8px";
  dropdownInput.style.fontSize = "17px";
  dropdownInput.style.border = "none";
  dropdownInput.style.width = "100%";

  // Create the default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a book";
  dropdownInput.appendChild(defaultOption);

  // Fetch JSON data
  fetch('./build/js/data.json')
    .then(response => response.json())
    .then(jsonData => {
      // Create and append options based on JSON data
      jsonData.forEach(book => {
        const option = document.createElement("option");
        option.value = book.title;
        option.textContent = book.title;
        dropdownInput.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error loading JSON data:', error);
    });

  // Create the submit button
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "button");
  submitButton.textContent = "Submit";
  submitButton.style.padding = "6px";
  submitButton.style.marginTop = "18px";
  submitButton.style.marginLeft = "0";
  submitButton.style.background = "#ddd";
  submitButton.style.fontSize = "17px";
  submitButton.style.border = "none";
  submitButton.style.cursor = "pointer";
  submitButton.style.width = "100%";

  // Event listener for submit button
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const selectedTitle = dropdownInput.value;
    const selectedBookInput = document.querySelector("#selectedBook");
    selectedBookInput.value = selectedTitle;

    // Perform any desired actions with the selected title
    console.log("Selected Book:", selectedTitle);
  });

  // Append the input, line break, and button to the form
  searchForm.appendChild(dropdownInput);
  searchForm.appendChild(submitButton);

  // Append the form to the search container
  searchContainer.appendChild(searchForm);

  // Insert the search container after the toggle-out element
  const toggleOutElement = document.querySelector(".toggle-out");
  toggleOutElement.insertAdjacentElement("afterend", searchContainer);

  // Add event listener to "X" button
  const closeButton = document.querySelector(".cross");
  closeButton.addEventListener("click", function() {
    // Remove the search container
    searchContainer.remove();
  });
});

// Function to toggle visibility of the visitor table
function toggleVisitorTable() {
  const visitorTableContainer = document.querySelector("#visitorTableContainer");
  const isVisible = visitorTableContainer.style.display !== "none";
  visitorTableContainer.style.display = isVisible ? "none" : "block";
}

// Add event listener to visitors button
const visitorsButton = document.querySelector("#visitorsButton");
visitorsButton.addEventListener("click", function() {
  toggleVisitorTable();
  if (visitorTableContainer.style.display !== "none") {
    generateTableRows();
  }
});

// Function to generate table rows based on the stored data
function generateTableRows() {
  // Get the table body element
  const tableBody = document.querySelector(".table-container tbody");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Retrieve the stored data from local storage
  const storedData = localStorage.getItem("visitorData");

  if (storedData) {
    // Parse the stored data
    const visitorDataArray = JSON.parse(storedData);

    // Generate table rows for each visitor data
    visitorDataArray.forEach(visitorData => {
      const tableRow = document.createElement("tr");
      const fullNameCell = document.createElement("td");
      const phoneNumberCell = document.createElement("td");
      const dateCell = document.createElement("td");

      fullNameCell.textContent = visitorData.fullName;
      phoneNumberCell.textContent = visitorData.phoneNumber;
      dateCell.textContent = visitorData.date;

      tableRow.appendChild(fullNameCell);
      tableRow.appendChild(phoneNumberCell);
      tableRow.appendChild(dateCell);

      tableBody.appendChild(tableRow);
    });
  }
}

//-----------------------------------------------------




/*
// Add event listener to "Cards" button
const cardsButton = document.querySelector("#cardsButton");
cardsButton.addEventListener("click", toggleCardsTable);

// Function to toggle visibility of the cards table
function toggleCardsTable() {
  const cardsTableContainer = document.querySelector("#cardsTableContainer");
  const isVisible = cardsTableContainer.style.display !== "none";

  if (isVisible) {
    cardsTableContainer.style.display = "none";
  } else {
    cardsTableContainer.style.display = "block";
    generateCardsTableRows();
  }
}

// Function to generate table rows for the cards table based on the stored data
function generateCardsTableRows() {
  // Get the table body element
  const tableBody = document.querySelector("#cardsTableBody");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Retrieve the stored data from local storage
  const storedData = localStorage.getItem("visitorData");

  if (storedData) {
    // Parse the stored data
    const visitorDataArray = JSON.parse(storedData);

    // Generate table rows for each visitor data
    visitorDataArray.forEach(visitorData => {
      const { fullName, phoneNumber, selectedBook, date } = visitorData;

      // Check if any of the fields are empty
      if (fullName.trim() === "" || phoneNumber.trim() === "" || selectedBook.trim() === "" || date.trim() === "") {
        return; // Skip creating a table row for empty data
      }

      const tableRow = document.createElement("tr");
      const fullNameCell = document.createElement("td");
      const phoneNumberCell = document.createElement("td");
      const selectedBookCell = document.createElement("td");
      const dateCell = document.createElement("td");

      fullNameCell.textContent = fullName;
      phoneNumberCell.textContent = phoneNumber;
      selectedBookCell.textContent = selectedBook;
      dateCell.textContent = date;

      tableRow.appendChild(fullNameCell);
      tableRow.appendChild(phoneNumberCell);
      tableRow.appendChild(selectedBookCell);
      tableRow.appendChild(dateCell);

      tableBody.appendChild(tableRow);
    });
  }
}

// Add event listener to "Submit" button
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", handleFormSubmit);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the current date
  const currentDate = new Date();

  // Add 30 days to the current date
  const returnDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 30);
  const returnDateString = returnDate.toLocaleDateString();

  // Store the return date in local storage
  localStorage.setItem("returnDate", returnDateString);

  // Generate the cards table with updated return date
  generateCardsTableRows();
}
*/






// Add event listener to "Cards" button
const cardsButton = document.querySelector("#cardsButton");
cardsButton.addEventListener("click", toggleCardsTable);

// Function to toggle visibility of the cards table
function toggleCardsTable() {
  const cardsTableContainer = document.querySelector("#cardsTableContainer");
  const isVisible = cardsTableContainer.style.display !== "none";

  if (isVisible) {
    cardsTableContainer.style.display = "none";
  } else {
    cardsTableContainer.style.display = "block";
    generateCardsTableRows();

    // Hide the visitor table
    const visitorTableContainer = document.querySelector("#visitorTableContainer");
    visitorTableContainer.style.display = "none";
  }
}

// Function to generate table rows for the cards table based on the stored data
// Function to generate table rows for the cards table based on the stored data
// Function to generate table rows for the cards table based on the stored data
function generateCardsTableRows() {
  // Get the table body element
  const tableBody = document.querySelector("#cardsTableBody");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Retrieve the stored data from local storage
  const storedData = localStorage.getItem("visitorData");

  if (storedData) {
    // Parse the stored data
    const visitorDataArray = JSON.parse(storedData);

    // Generate table rows for each visitor data
    visitorDataArray.forEach(visitorData => {
      const { fullName, phoneNumber, selectedBook, date } = visitorData;

      // Check if any of the fields are empty
      if (fullName.trim() === "" || phoneNumber.trim() === "" || selectedBook.trim() === "" || date.trim() === "") {
        return; // Skip creating a table row for empty data
      }

      // Convert the date string to a Date object
      const visitDate = parseDate(date);

      // Add 30 days to the visit date
      const returnDate = addDays(visitDate, 30);

      const tableRow = document.createElement("tr");
      const fullNameCell = document.createElement("td");
      const phoneNumberCell = document.createElement("td");
      const selectedBookCell = document.createElement("td");
      const dateCell = document.createElement("td");

      fullNameCell.textContent = fullName;
      phoneNumberCell.textContent = phoneNumber;
      selectedBookCell.textContent = selectedBook;
      dateCell.textContent = formatDate(returnDate); // Display the updated return date

      tableRow.appendChild(fullNameCell);
      tableRow.appendChild(phoneNumberCell);
      tableRow.appendChild(selectedBookCell);
      tableRow.appendChild(dateCell);

      tableBody.appendChild(tableRow);
    });
  }
}

// Function to parse the date string and convert it to a Date object
function parseDate(dateString) {
  const [day, month, year] = dateString.split(".");
  return new Date(year, month - 1, day);
}

// Function to add a specified number of days to a given date
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Function to format a date object as "dd.mm.yyyy"
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${padZero(day)}.${padZero(month)}.${year}`;
}

// Function to pad a number with leading zeros
function padZero(number) {
  return String(number).padStart(2, "0");
}

// Add event listener to "Submit" button
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", handleFormSubmit);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the current date
  const currentDate = new Date();

  // Add 30 days to the current date
  const returnDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 30);
  const returnDateString = returnDate.toLocaleDateString();

  // Store the return date in local storage
  localStorage.setItem("returnDate", returnDateString);

  // Generate the cards table with updated return date
  generateCardsTableRows();
}

//-------------------------------------------------------------





/*
// Retrieve the statistics data (you need to replace this with your actual data retrieval logic)
function getStatisticsData() {
  return [
    { author: 'Author 1', title: 'Title 1', country: 'Country 1', year: 2021, language: 'Language 1', pages: 100 },
    { author: 'Author 2', title: 'Title 2', country: 'Country 2', year: 2022, language: 'Language 2', pages: 150 },
    { author: 'Author 3', title: 'Title 3', country: 'Country 3', year: 2023, language: 'Language 3', pages: 200 }
  ];
}

// Update the statistics table
function updateStatisticsTable() {
  var statisticsTableBody = document.getElementById('statisticsTableBody');
  statisticsTableBody.innerHTML = '';

  var statisticsData = getStatisticsData();

  // Loop through the statistics data and create table rows
  for (var i = 0; i < statisticsData.length; i++) {
    var row = document.createElement('tr');
    var data = statisticsData[i];

    // Create table cells and set the data
    var authorCell = document.createElement('td');
    authorCell.textContent = data.author;
    row.appendChild(authorCell);

    var titleCell = document.createElement('td');
    titleCell.textContent = data.title;
    row.appendChild(titleCell);

    var countryCell = document.createElement('td');
    countryCell.textContent = data.country;
    row.appendChild(countryCell);

    var yearCell = document.createElement('td');
    yearCell.textContent = data.year;
    row.appendChild(yearCell);

    var languageCell = document.createElement('td');
    languageCell.textContent = data.language;
    row.appendChild(languageCell);

    var pagesCell = document.createElement('td');
    pagesCell.textContent = data.pages;
    row.appendChild(pagesCell);

    // Add the row to the table body
    statisticsTableBody.appendChild(row);
  }
}

// Call the updateStatisticsTable function to initially populate the table
updateStatisticsTable();

// Store the click count in local storage
let clickCount = localStorage.getItem("clickCount");
if (!clickCount) {
  clickCount = 0;
  localStorage.setItem("clickCount", clickCount);
}

// Increment click count and update local storage on form submission
function handleFormSubmit(event) {
  event.preventDefault();

  clickCount++;
  localStorage.setItem("clickCount", clickCount);

  // Store the form data in local storage
  const fullName = document.querySelector("#fullName").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const selectedBook = document.querySelector("#selectedBook").value;
  const date = new Date().toLocaleDateString();

  const visitorData = { fullName, phoneNumber, selectedBook, date };

  // Retrieve existing data from local storage
  let visitorDataArray = localStorage.getItem("visitorData");
  if (visitorDataArray) {
    visitorDataArray = JSON.parse(visitorDataArray);
  } else {
    visitorDataArray = [];
  }

  // Add the new visitor data to the array
  visitorDataArray.push(visitorData);

  // Store the updated data back in local storage
  localStorage.setItem("visitorData", JSON.stringify(visitorDataArray));

  // Generate rows for statisticsTable
  generateStatisticsTableRows();

  // Populate selected book column in cardsTable
  populateSelectedBookColumn();
}

// Function to generate rows for statisticsTable based on click count
function generateStatisticsTableRows() {
  const statisticsTableBody = document.querySelector("#statisticsTableBody");
  statisticsTableBody.innerHTML = ""; // Clear existing table rows

  for (let i = 1; i <= 3; i++) {
    const row = document.createElement("tr");
    const authorCell = document.createElement("td");
    const titleCell = document.createElement("td");
    const countryCell = document.createElement("td");
    const yearCell = document.createElement("td");
    const languageCell = document.createElement("td");
    const pagesCell = document.createElement("td");

    authorCell.textContent = `Author ${i}`;
    titleCell.textContent = `Title ${i}`;
    countryCell.textContent = `Country ${i}`;
    yearCell.textContent = `Year ${i}`;
    languageCell.textContent = `Language ${i}`;
    pagesCell.textContent = `Pages ${i}`;

    row.appendChild(authorCell);
    row.appendChild(titleCell);
    row.appendChild(countryCell);
    row.appendChild(yearCell);
    row.appendChild(languageCell);
    row.appendChild(pagesCell);

    statisticsTableBody.appendChild(row);
  }
}

// Add event listener to "Statistics" section
const statisticsSection = document.querySelector(".Statistics");
statisticsSection.addEventListener("click", toggleStatisticsTable);

// Function to toggle visibility of the statistics table
function toggleStatisticsTable() {
  const statisticsTableContainer = document.querySelector("#statisticsTableContainer");
  const isVisible = statisticsTableContainer.style.display !== "none";

  if (isVisible) {
    statisticsTableContainer.style.display = "none";
  } else {
    statisticsTableContainer.style.display = "block";
    generateStatisticsTableRows();
  }
}

// Function to populate selected book column in cardsTable based on most repeated items
function populateSelectedBookColumn() {
  const cardsTableBody = document.querySelector("#cardsTableBody");

  // Clear existing table rows
  cardsTableBody.innerHTML = "";

  // Retrieve the stored data from local storage
  const storedData = localStorage.getItem("visitorData");

  console.log("Stored Data:", storedData); // Log the retrieved data to check if it's correct

  if (storedData) {
    // Parse the stored data
    const visitorDataArray = JSON.parse(storedData);

    console.log("Visitor Data Array:", visitorDataArray); // Log the parsed data to check if it's correct

    // Get the counts of each selected book
    const bookCounts = {};
    visitorDataArray.forEach(visitorData => {
      const { fullName, phoneNumber, selectedBook, date } = visitorData;

      console.log("Selected Book:", selectedBook); // Log the selected book to check if it's correct

      if (selectedBook.trim() !== "") {
        if (bookCounts[selectedBook]) {
          bookCounts[selectedBook]++;
        } else {
          bookCounts[selectedBook] = 1;
        }
      }
    });

    console.log("Book Counts:", bookCounts); // Log the book counts to check if they are correct

    // Sort the selected books by count in descending order
    const sortedBooks = Object.keys(bookCounts).sort((a, b) => bookCounts[b] - bookCounts[a]);

    console.log("Sorted Books:", sortedBooks); // Log the sorted books to check if they are correct

    // Generate table rows for each selected book
    sortedBooks.forEach(selectedBook => {
      const row = document.createElement("tr");
      const fullNameCell = document.createElement("td");
      const phoneNumberCell = document.createElement("td");
      const selectedBookCell = document.createElement("td");
      const returnDateCell = document.createElement("td");

      // Find the visitor data corresponding to the selected book
      const visitorDataForBook = visitorDataArray.find(visitorData => visitorData.selectedBook === selectedBook);

      console.log("Visitor Data For Book:", visitorDataForBook); // Log the visitor data for the selected book

      // Set the cell values based on the visitor data
      fullNameCell.textContent = visitorDataForBook.fullName;
      phoneNumberCell.textContent = visitorDataForBook.phoneNumber;
      selectedBookCell.textContent = selectedBook;
      returnDateCell.textContent = visitorDataForBook.date;

      // Append cells to the row
      row.appendChild(fullNameCell);
      row.appendChild(phoneNumberCell);
      row.appendChild(selectedBookCell);
      row.appendChild(returnDateCell);

      // Append the row to the table body
      cardsTableBody.appendChild(row);
    });
  }
}

// Add event listener to submitButton
const submitButtont = document.querySelector("#submitButton");
submitButtont.addEventListener("click", handleFormSubmit);

// Call generateStatisticsTableRows() when the page loads
window.addEventListener("load", generateStatisticsTableRows);

// Call populateSelectedBookColumn() when the page loads
window.addEventListener("load", populateSelectedBookColumn);
*/

// Fetch the data from data.json
fetch('./build/js/data.json')
  .then(response => response.json())
  .then(data => {
    // Get a reference to the table body
    var statisticsTableBody = document.getElementById('booksTableBody');

    // Clear the table body before populating the data
    statisticsTableBody.innerHTML = '';

    // Iterate over the data and create table rows
    data.forEach(function(statistic) {
      // Create a new row
      var row = document.createElement('tr');

      // Create cells and populate them with data
      var authorCell = document.createElement('td');
      authorCell.textContent = statistic.author;
      row.appendChild(authorCell);

      var titleCell = document.createElement('td');
      titleCell.textContent = statistic.title;
      row.appendChild(titleCell);

      var countryCell = document.createElement('td');
      countryCell.textContent = statistic.country;
      row.appendChild(countryCell);

      var yearCell = document.createElement('td');
      yearCell.textContent = statistic.year;
      row.appendChild(yearCell);

      var languageCell = document.createElement('td');
      languageCell.textContent = statistic.language;
      row.appendChild(languageCell);

      var pagesCell = document.createElement('td');
      pagesCell.textContent = statistic.pages;
      row.appendChild(pagesCell);

      // Append the row to the table body
      statisticsTableBody.appendChild(row);
    });

    // Hide the statistics table container initially
    var booksTableContainer = document.getElementById('booksTableContainer');
    booksTableContainer.style.display = 'none';

    // Get a reference to the "Books" div
    var booksDiv = document.querySelector('.Books');

    // Add a click event listener to toggle the display of the table container
    booksDiv.addEventListener('click', function() {
      var currentDisplay = booksTableContainer.style.display;

      // Toggle the display property
      booksTableContainer.style.display = currentDisplay === 'none' ? 'block' : 'none';
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//------------------------------------------------------



/*
// Define an object to store the selected book counts
const selectedBookCounts = {};

// Function to retrieve JSON data from file
async function getData() {
  const response = await fetch('./js/data.json');
  const data = await response.json();
  return data;
}

// Function to fill the table with data
function fillTable(selectedBook) {
  const tableBody = document.getElementById('statisticsTableBody');

  console.log('Selected Book:', selectedBook);

  getData().then(data => {
    console.log('Data:', data);

    // Filter the books based on the selected book
    const filteredBooks = data.filter(book => book.Title === selectedBook);

    console.log('Filtered Books:', filteredBooks);

    // Increment the click count for the selected book
    if (selectedBook in selectedBookCounts) {
      selectedBookCounts[selectedBook]++;
    } else {
      selectedBookCounts[selectedBook] = 1;
    }

    console.log('Selected Book Counts:', selectedBookCounts);

    // Sort the selected books based on the chosen times
    const sortedBooks = Object.entries(selectedBookCounts).sort((a, b) => b[1] - a[1]);

    console.log('Sorted Books:', sortedBooks);

    // Clear the table body
    tableBody.innerHTML = '';

    // Create and append rows for each book
    sortedBooks.forEach(([book, count], index) => {
      // Find the book details from the filtered data
      const bookDetails = filteredBooks.find(item => item.Title === book);

      // Calculate the score based on the chosen times
      const score = count * (index + 1);

      console.log('Book:', book);
      console.log('Count:', count);
      console.log('Book Details:', bookDetails);
      console.log('Score:', score);

      // Create a new row
      const row = document.createElement('tr');

      // Add data to the row
      row.innerHTML = `
        <td>${score}</td>
        <td>${bookDetails.Author}</td>
        <td>${bookDetails.Title}</td>
        <td>${bookDetails.Country}</td>
        <td>${bookDetails.Year}</td>
        <td>${bookDetails.Language}</td>
        <td>${bookDetails.Pages}</td>
        <td>${count}</td>
      `;

      // Append the row to the table body
      tableBody.appendChild(row);
    });

    // Check if any books were found
    if (filteredBooks.length === 0) {
      const row = document.createElement('tr');
      row.innerHTML = '<td colspan="8">No matching books found</td>';
      tableBody.appendChild(row);
    }
  });
}

// Event listener for form submission
document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const selectedBookInput = document.getElementById('selectedBook');
  const selectedBook = selectedBookInput.value;

  fillTable(selectedBook); // Call the fillTable function to populate the table
});
*//*
// Sample data
const sampleData = [
  {
    Ratings: 4,
    Author: 'John Doe',
    Title: 'Book 1',
    Country: 'USA',
    Year: 2021,
    Language: 'English',
    Pages: 200,
    BeingRead: 'Yes'
  },
  {
    Ratings: 3,
    Author: 'Jane Smith',
    Title: 'Book 2',
    Country: 'UK',
    Year: 2019,
    Language: 'English',
    Pages: 150,
    BeingRead: 'No'
  }
];

// Function to fill the table with data
function fillTable(data) {
  const tableBody = document.getElementById('statisticsTableBody');

  // Clear the table body
  tableBody.innerHTML = '';

  // Create and append rows for each book
  data.forEach(book => {
    const row = document.createElement('tr');

    // Add data to the row
    row.innerHTML = `
      <td>${book.Ratings}</td>
      <td>${book.Author}</td>
      <td>${book.Title}</td>
      <td>${book.Country}</td>
      <td>${book.Year}</td>
      <td>${book.Language}</td>
      <td>${book.Pages}</td>
      <td>${book.BeingRead}</td>
    `;

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Call the fillTable function with the sample data
fillTable(sampleData);
*/





/*
  fetch('./js/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(books) {
    var sortedBooks = books.sort(function(book1, book2) {
      return book1.title.localeCompare(book2.title);
    });

    var tableBody = document.getElementById("statisticsTableBody");

    sortedBooks.forEach(function(book) {
      var row = document.createElement("tr");

      var ratingsCell = document.createElement("td");
      ratingsCell.textContent = book.ratings;
      row.appendChild(ratingsCell);

      var authorCell = document.createElement("td");
      authorCell.textContent = book.author;
      row.appendChild(authorCell);

      var titleCell = document.createElement("td");
      titleCell.textContent = book.title;
      row.appendChild(titleCell);

      var countryCell = document.createElement("td");
      countryCell.textContent = book.country;
      row.appendChild(countryCell);

      var yearCell = document.createElement("td");
      yearCell.textContent = book.year;
      row.appendChild(yearCell);

      var languageCell = document.createElement("td");
      languageCell.textContent = book.language;
      row.appendChild(languageCell);

      var pagesCell = document.createElement("td");
      pagesCell.textContent = book.pages;
      row.appendChild(pagesCell);

      var beingReadCell = document.createElement("td");
      beingReadCell.textContent = book.beingRead;
      row.appendChild(beingReadCell);

      tableBody.appendChild(row);
    });
  })
  .catch(function(error) {
    console.error(error);
  });
*/
/*
function retrieveDataFromLocalStorage() {
  var storedData = localStorage.getItem("visitorData");

  if (storedData) {
    var visitorData = JSON.parse(storedData);
    var tableBody = document.getElementById("statisticsTableBody");
    tableBody.innerHTML = ""; // Clear the existing table rows

    visitorData.forEach(function(data) {
      var row = document.createElement("tr");

      var ratingsCell = document.createElement("td");
      ratingsCell.textContent = "N/A";
      row.appendChild(ratingsCell);

      var authorCell = document.createElement("td");
      authorCell.textContent = "N/A";
      row.appendChild(authorCell);

      var titleCell = document.createElement("td");
      titleCell.textContent = data.selectedBook;
      row.appendChild(titleCell);

      var countryCell = document.createElement("td");
      countryCell.textContent = "N/A";
      row.appendChild(countryCell);

      var yearCell = document.createElement("td");
      yearCell.textContent = "N/A";
      row.appendChild(yearCell);

      var languageCell = document.createElement("td");
      languageCell.textContent = "N/A";
      row.appendChild(languageCell);

      var pagesCell = document.createElement("td");
      pagesCell.textContent = "N/A";
      row.appendChild(pagesCell);

      var beingReadCell = document.createElement("td");
      beingReadCell.textContent = "N/A";
      row.appendChild(beingReadCell);

      tableBody.appendChild(row);
    });
  }
}

retrieveDataFromLocalStorage();
*/

function retrieveDataFromLocalStorage() {
  var storedData = localStorage.getItem("visitorData");

  if (storedData) {
    var visitorData = JSON.parse(storedData);
    var tableBody = document.getElementById("statisticsTableBody");
    tableBody.innerHTML = ""; // Clear the existing table rows

    // Calculate the number of repetitions for each book
    var bookCounts = {};
    visitorData.forEach(function(data) {
      var selectedBook = data.selectedBook;
      if (bookCounts[selectedBook]) {
        bookCounts[selectedBook]++;
      } else {
        bookCounts[selectedBook] = 1;
      }
    });

    // Sort the books based on repetition count in descending order
    var sortedBooks = Object.keys(bookCounts).sort(function(a, b) {
      return bookCounts[b] - bookCounts[a];
    });

    // Populate the table rows with book data and ratings
    sortedBooks.forEach(function(selectedBook, index) {
      var row = document.createElement("tr");

      var ratingsCell = document.createElement("td");
      ratingsCell.textContent = index + 1; // Rating based on position
      row.appendChild(ratingsCell);

      var authorCell = document.createElement("td");
      authorCell.textContent = "N/A";
      row.appendChild(authorCell);

      var titleCell = document.createElement("td");
      titleCell.textContent = selectedBook;
      row.appendChild(titleCell);

      var countryCell = document.createElement("td");
      countryCell.textContent = "N/A";
      row.appendChild(countryCell);

      var yearCell = document.createElement("td");
      yearCell.textContent = "N/A";
      row.appendChild(yearCell);

      var languageCell = document.createElement("td");
      languageCell.textContent = "N/A";
      row.appendChild(languageCell);

      var pagesCell = document.createElement("td");
      pagesCell.textContent = "N/A";
      row.appendChild(pagesCell);

      var beingReadCell = document.createElement("td");
      beingReadCell.textContent = bookCounts[selectedBook]; // Number of repetitions
      row.appendChild(beingReadCell);

      tableBody.appendChild(row);

      // Fetch book data from JSON file
      fetchBookData(selectedBook)
        .then(function(bookData) {
          if (bookData) {
            // Update the table cells with fetched book data
            authorCell.textContent = bookData.author || "N/A";
            countryCell.textContent = bookData.country || "N/A";
            yearCell.textContent = bookData.year || "N/A";
            languageCell.textContent = bookData.language || "N/A";
            pagesCell.textContent = bookData.pages || "N/A";
          }
        })
        .catch(function(error) {
          console.error("Error fetching book data:", error);
        });
    });
  }
}

retrieveDataFromLocalStorage();

// Function to fetch book data from JSON file
function fetchBookData(selectedBook) {
  // Replace `bookData.json` with the actual URL or path to your JSON file
  return fetch('./build/js/data.json')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error loading book data");
      }
    })
    .then(function(bookData) {
      // Find the book data by selected book title
      return bookData.find(function(book) {
        return book.title === selectedBook;
      });
    });
}

retrieveDataFromLocalStorage();

// Add event listener to the "Statistics" element
const statisticsElement = document.querySelector('.Statistics');
statisticsElement.addEventListener('click', toggleStatisticsTable);

function toggleStatisticsTable() {
  const statisticsTableContainer = document.getElementById('statisticsTableContainer');
  statisticsTableContainer.style.display = statisticsTableContainer.style.display === 'none' ? 'block' : 'none';
}

//--------------------------------------------------------


/*
// Function to generate the histogram based on the table data
function generateHistogram() {
  const histogramDiv = document.querySelector(".histogram");
  const tableRows = document.querySelectorAll("#statisticsTableBody tr");

  // Calculate the maximum "Being read" value
  const maxBeingRead = Math.max(...Array.from(tableRows).map(row => parseInt(row.cells[7].textContent)));

  // Calculate the height of each div based on the maximum value
  const divHeight = maxBeingRead > 0 ? (200 / maxBeingRead) : 0;

  // Generate the histogram divs and set their heights and titles
  for (let i = 1; i <= 10; i++) {
    const div = histogramDiv.querySelector(`.histogram div:nth-child(${i})`);
    const p = div.querySelector("p");
    const row = tableRows[i - 1];
    const bookTitle = row ? row.cells[2].textContent : "";
    const beingRead = row ? parseInt(row.cells[7].textContent) : 0;
    const height = divHeight * beingRead;

    p.textContent = bookTitle;
    div.style.height = `${height}px`;
  }
}

// Call the function to generate the histogram
generateHistogram();
*/


/*
// Function to generate the histogram based on the table data
function generateHistogram() {
  const histogramDiv = document.querySelector(".histogram");
  const tableRows = document.querySelectorAll("#statisticsTableBody tr");

  // Calculate the maximum "Being read" value
  const maxBeingRead = Math.max(...Array.from(tableRows).map(row => parseInt(row.cells[7].textContent)));

  // Calculate the height of each div based on the maximum value
  const divHeight = maxBeingRead > 0 ? (200 / maxBeingRead) : 0;

  // Generate the histogram divs and set their heights and titles
  for (let i = 1; i <= 10; i++) {
    const div = histogramDiv.querySelector(`.histogram div:nth-child(${i})`);
    const p = div.querySelector("p");
    const row = tableRows[i - 1];
    const bookTitle = row ? row.cells[2].textContent : "";
    const beingRead = row ? parseInt(row.cells[7].textContent) : 0;
    const height = divHeight * beingRead;

    p.textContent = bookTitle;
    div.style.height = `${height}px`;

    // Adjust the font size of the <p> element as a percentage of the container's height
    const fontSizePercentage = Math.min(100, (height / div.offsetHeight) * 100);
    p.style.fontSize = `${fontSizePercentage}%`;
  }
}

// Call the function to generate the histogram
generateHistogram();
*/



/*
// Function to generate the histogram based on the table data
function generateHistogram() {
  const histogramDiv = document.querySelector(".histogram");
  const tableRows = document.querySelectorAll("#statisticsTableBody tr");

  // Calculate the maximum "Being read" value
  const maxBeingRead = Math.max(...Array.from(tableRows).map(row => parseInt(row.cells[7].textContent)));

  // Calculate the height of each div based on the maximum value
  const divHeight = maxBeingRead > 0 ? (200 / maxBeingRead) : 0;

  // Generate the histogram divs and set their heights and titles
  for (let i = 1; i <= 10; i++) {
    const div = histogramDiv.querySelector(`.histogram div:nth-child(${i})`);
    const p = div.querySelector("p");
    const row = tableRows[i - 1];
    const bookTitle = row ? row.cells[2].textContent : "";
    const beingRead = row ? parseInt(row.cells[7].textContent) : 0;
    const height = divHeight * beingRead;

    p.textContent = bookTitle;
    div.style.height = `${height}px`;

    // Adjust the line height of the <p> element to match the height of the div
    const lineHeightPercentage = (height / div.offsetHeight) * 100;
    p.style.lineHeight = `${lineHeightPercentage}%`;
  }
}

// Call the function to generate the histogram
generateHistogram();
*/



/*
// Function to generate the histogram based on the table data
function generateHistogram() {
  const histogramDiv = document.querySelector(".histogram");
  const tableRows = document.querySelectorAll("#statisticsTableBody tr");

  // Calculate the maximum "Being read" value
  const maxBeingRead = Math.max(...Array.from(tableRows).map(row => parseInt(row.cells[7].textContent)));

  // Calculate the height of each div based on the maximum value
  const divHeight = maxBeingRead > 0 ? (200 / maxBeingRead) : 0;

  // Generate the histogram divs and set their heights and titles
  for (let i = 1; i <= 10; i++) {
    const div = histogramDiv.querySelector(`.histogram div:nth-child(${i})`);
    const p = div.querySelector("p");
    const row = tableRows[i - 1];
    const bookTitle = row ? row.cells[2].textContent : "";
    const beingRead = row ? parseInt(row.cells[7].textContent) : 0;
    const height = divHeight * beingRead;

    p.textContent = bookTitle;
    div.style.height = `${height}px`;

    // Adjust the font size dynamically based on the available space
    const maxHeight = div.offsetHeight;
    const textHeight = p.offsetHeight;
    const scaleFactor = Math.min(1, maxHeight / textHeight);

    p.style.transform = `scale(${scaleFactor})`;
  }
}

// Call the function to generate the histogram
generateHistogram();
*/


// Function to generate the histogram based on the table data
function generateHistogram() {
  const histogramDiv = document.querySelector(".histogram");
  const tableRows = document.querySelectorAll("#statisticsTableBody tr");

  // Calculate the maximum "Being read" value
  const maxBeingRead = Math.max(...Array.from(tableRows).map(row => parseInt(row.cells[7].textContent)));

  // Calculate the height of each div based on the maximum value
  const divHeight = maxBeingRead > 0 ? (200 / maxBeingRead) : 0;

  // Generate the histogram divs and set their heights and titles
  for (let i = 1; i <= 10; i++) {
    const div = histogramDiv.querySelector(`.histogram div:nth-child(${i})`);
    const p = div.querySelector("p");
    const row = tableRows[i - 1];
    const bookTitle = row ? row.cells[2].textContent : "";
    const beingRead = row ? parseInt(row.cells[7].textContent) : 0;
    const height = divHeight * beingRead;

    p.textContent = bookTitle;
    div.style.height = `${height}px`;

    // Adjust the font size dynamically based on the available space
    const maxHeight = div.offsetHeight;
    const textHeight = p.offsetHeight;
    const scaleFactor = Math.min(1, maxHeight / textHeight);

    p.style.transform = `scale(${scaleFactor})`;

    // Adjust the padding of the div to center the content vertically
    const paddingTop = (maxHeight - textHeight * scaleFactor) / 2;
    div.style.paddingTop = `${paddingTop}px`;
  }
}

// Call the function to generate the histogram
generateHistogram();

/*
// Add event listener to the "Statistics" element
const histogramElement = document.querySelector('.histogram');
histogramElement.addEventListener('click', toggleHistogramTable);

function toggleHistogramTable() {
  const histogramTableContainer = document.getElementById('histogramTableContainer');
  histogramTableContainer.style.display = histogramTableContainer.style.display === 'none' 
  ? histogramTableContainer.remove.style.display === 'none' 
  : histogramTableContainer.style.display === 'none';
}
*/
/*
const statisticsDiv = document.querySelector(".Statistics");
const histogramDiv = document.querySelector(".histogram");

statisticsDiv.addEventListener("click", function() {
  histogramDiv.style.display = histogramDiv.style.display === "none" ? "block" : "none";
});
*/

const statisticsDiv = document.querySelector(".Statistics");
const histogramDiv = document.querySelector(".histogram");

statisticsDiv.addEventListener("click", function() {
  if (histogramDiv.style.display === "none") {
    histogramDiv.style.display = "";
  } else {
    histogramDiv.style.display = "none";
  }
});

//----------------------------------------------------------------



// Get a reference to the close_table-container element
var closeContainer = document.querySelector('.close_table-container');

// Get a reference to the table-container element
var tableContainer = document.querySelector('#booksTableContainer');

// Add a click event listener to the close_table-container element
closeContainer.addEventListener('click', function() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  // Toggle the display of the table-container
  if (tableContainer.style.display === 'none') {
    tableContainer.style.display = 'block';
  } else {
    tableContainer.style.display = 'none';
  }
});