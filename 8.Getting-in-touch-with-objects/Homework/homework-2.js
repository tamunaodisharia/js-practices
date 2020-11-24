// # Task 2

// Update previous 'readingStatus(books)' function and add logic into it: 
// if book is read by the author, display how many days ago he finished it.

// *You may find this resource helpful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date*

// - Use object getter method name it 'daysAgo' and return string: `{x} days ago`

// Result should be:
//     'Bill has read The Road Ahead book {x} days ago'
//     'Steve has read Walter Isaacson book {x} days ago'
//     'Jhon hasn't read The Hunger Games book yet'

function readingStatus(books){
    
    for(let book in books){
        if(books[book].haveRead === true){
            Object.defineProperty(books[book], 'daysAgo', {
                get(){
                    let dateNow = Date.now();
                    let dateThen = Date.parse(this.dateOfRead);
                    let mlscnds = dateNow - dateThen;
                    let day = 24 * 60 * 60 * 1000;
                    return Math.floor(mlscnds / day);
                },
            });
            console.log(`${books[book].author} has read ${books[book].title} book ${books[book].daysAgo} days ago.`);
        }else{
            console.log(`${books[book].author} hasn't read ${books[book].title} book yet.`);
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