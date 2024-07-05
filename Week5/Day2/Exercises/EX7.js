document.addEventListener("DOMContentLoaded", function(){
        var allBooks = [
        {
        title:"Game Of Thrones",
        author:"Jordge Martin",
        image: "https://m.media-amazon.com/images/I/714ExofeKJL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: "True"
        },
        
        {
        title:"The Lord of the Rings",
        author:"J.R.R. Tolkien",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg",
        alreadyRead: "True"
        },

        {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://m.media-amazon.com/images/I/71f6MA9NNJL._AC_UF894,1000_QL80_.jpg",
        alreadyRead: false
        }
        ];
  
        function CreateBookElement(book){
            let div = document.createElement('div');
            let title = document.createElement('p');
            let author = document.createElement('p');
            let image = document.createElement('img');
        
            title.textContent = `${book.title}`;
            author.textContent = `Author: ${book.author}`;

            if(book.alreadyRead === "True"){
                title.style.color = "red";
                author.style.color = "red";
            }
            else{
                title.style.color = "green";
                author.style.color = "green";
            }
            image.src = book.image;
            image.style.width = "100px";
            
            div.appendChild(title);
            div.appendChild(author);
            div.appendChild(image);
    
            return div;

         
        }

        var booksList = document.querySelector('.listBooks');

        for(let i = 0; i < allBooks.length; i++){
            var book = allBooks[i];
            var bookElement = CreateBookElement(book);
            booksList.appendChild(bookElement);
        }

});



    

