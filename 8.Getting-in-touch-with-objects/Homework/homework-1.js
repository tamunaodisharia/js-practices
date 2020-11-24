// # Task 1

// Write a 'readingStatus(books)' function to display the reading status of the following books.

// - Use array iteration
// - Log each of them separately

// Result should be:
//     'Bill has read The Road Ahead book'
//     'Steve has read Walter Isaacson book'
//     'Jhon hasn't read The Hunger Games book yet'

function readingStatus(books){
    for(let book in books){
        if(books[book].haveRead === true){
            console.log(`${books[book].author} has read ${books[book].title} book.`);
        }else{
            console.log(`${books[book].author} hasn't read ${books[book].title} book.`);
        }
    }
}
var Books = [ 
   {
       author: 'Bill',
       title: 'The Road Ahead',
       haveRead: true,
       dateOfRead: new Date(2020, 10, 10)
   },
   {
       author: 'Steve',
       title: 'Walter Isaacson',
       haveRead: true,
       dateOfRead: new Date(2020, 10, 5)
   },
   {
       author: 'Jhon',
       title:  'The Hunger Games', 
       haveRead: false,
       dateOfRead: NaN
   }
];
readingStatus(Books);