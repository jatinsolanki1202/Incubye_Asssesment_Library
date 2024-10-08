# Library Management System

## Objective

Create a simple library management system that allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books.

## Features

- **Add book:** User can add new book to the library with unique identifier(Isbn), title, author's name and year of publish.
- **Borrow book:** User can borrow a book if it is available in the library.
- **Return book:** User can return a borrowed book, and this will also show in the books available after returning.
- **View available books:** User can view available books. If the book is borrowed, it will not be shown in available books.

## Getting Started

To setup and run the program in your local device, follow the below steps

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. **Clone the git repository**

```bash
git clone https://github.com/jatinsolanki1202/Incubye_Asssesment_Library.git
```

2. **Navigate into the project directory**

```bash
cd Incubye_Asssesment_Library
```

3. **Install dependencies**

```bash
npm install
```

## Usage

- **To run tests**

```bash
npm run test
```

- **To get test report**

```bash
npm run test -- --coverage
```

This command will generate a test coverage report

**navigate to the test report file (index.html)**

```bash
cd coverage/Icov-report
```

Run the test report file i.e. index.html

## Tech used

This program uses Javascript language and Node.js for runtime environment.
Used Jest framework for testing.
