console.log("Object and its prototype")

// Object and its method 


/*
                     ******                 Constructor                ******
    
    All objects (with the exception of objects created with Object.create(null)) will have a constructor property. Objects created without the explicit use of a constructor function (such as object- and array-literals) will have a constructor property that points to the Fundamental Object constructor type for that object.


                let o = {}
                o.constructor === Object // true

                let o = new Object
                o.constructor === Object // true

                let a = []
                a.constructor === Array // true

                let a = new Array
                a.constructor === Array // true

                let n = new Number(3)
                n.constructor === Number // true

    One can assign the constructor property for any value except null and undefined since those don't have a corresponding constructor function (like String, Number, Boolean etc.), but values which are primitives won't keep the change (with no exception thrown). This is due to the same mechanism, which allows one to set any property on primitive values (except null and undefined) with no effect. Namely whenever one uses such a primitive as an object an instance of the corresponding constructor is created and discarded right after the statement was executed.

                let val = null;
                val.constructor = 1; //TypeError: val is null

                val = 'abc';
                val.constructor = Number; //val.constructor === String

                val.foo = 'bar'; //An implicit instance of String('abc') was created and assigned the prop foo
                val.foo === undefined; //true, since a new instance of String('abc') was created for this comparison, which doesn't have the foo property

    let's example 
                function Tree(name) {
                    this.name = name
                }

                 let theTree = new Tree('Redwood')
                console.log('theTree.constructor is ' + theTree.constructor)

  
*/
/* the user defined object */
let book = {
    bookName : "Think And Grow Rich",
    AuthorName : "Napoliyan Hill",
    price : 235.67,
};

/*
    here you to join or contecting ... what ?? 
    Book() is the construtor and its defined the book object than to use the construtor of any object initilizatise very well 
    below the example
    first define the object of book and make the Book() ( As parameterized construtor and declare the parameter )
    And also define getter method for return the instance member 
*/

//the Book type consteructor preototype
function Book(bookName1,AuthorName1,price1){
    this.bookName = bookName1 ;
    this.AuthorName = AuthorName1 ;
    this.price = price1 ;
    // console.log(bookName,AuthorName,price);
}

// the getter Method
Book.prototype.getAuthorName = function(){
    return this.AuthorName ;
}
Book.prototype.getBookName = function(){
    return this.bookName ;
}
Book.prototype.getPrice = function(){
    return this.price ;
}

// the setter method

Book.prototype.setAuthorName = function(authorName) {
    this.AuthorName = authorName ;
}
Book.prototype.seBookName = function(bookName) {
    this.bookName = bookName ;
}
Book.prototype.setPriceName = function(price) {
    this.price = price;
}


book1 = new Book('wings of fire','A.P.J.Abdul kalam',120);
// book.bookName ;
// book.AuthorName ;
// book.price ;
// book1 = new Book('wings of fire','A.P.J.Abdul kalam',120);
// book1 = book ;
console.log(book1);