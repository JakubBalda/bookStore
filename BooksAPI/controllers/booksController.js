const getAllBooksUseCase = require('../services/booksServices/getAllBooksUseCase');
const getBookUseCase = require('../services/booksServices/getBookDetailsUseCase');
const storeNewBookUseCase = require('../services/booksServices/storeNewBookUseCase');
const deleteBookUseCase = require('../services/booksServices/deleteBookUseCase');
const updateDetailsUseCase = require('../services/booksServices/updateBookDetailsUseCase');
const getBookGenresUseCase = require('../services/booksServices/getBookGenresUseCase');
const setBookRatingUseCase = require('../services/booksServices/setBookRatingUseCase');
const getBookRatingUseCase = require('../services/booksServices/getBookRatingUseCase');
const logger = require('../middleware/logger');
const booksMapper = require('../middleware/booksMapper');
const authorsMapper = require('../middleware/authorsMapper');

    async function getBooks(req, res, next){
        logRequest('getBooks', req);
        
        let books = await getAllBooksUseCase.getBooks();
        res.send(books);
    }

    async function getBookDetails(req, res, next){
        logRequest('getBookDetails', req);
        
        let selectedBook = await getBookUseCase.getBookDetails(req.params.id);
        res.send(selectedBook);
    }

    async function storeNewBook(req, res, next){
        logRequest('storeNewBook', req);
        if(req.files === null)
            res.send('Nie wybrano zdjęcia okładki');

        const fileBuffer = req.files.bookImage.data;
        
        let author = authorsMapper.mapRequestToAuthorToStoreModel(req.body);
        let book = booksMapper.mapRequestToBookToStoreModel(req.body);

        let information = await storeNewBookUseCase.storeNewBook(author, book, fileBuffer);

        res.send(information);
    }

    async function deleteBook(req, res, next){
        logRequest('deleteBook', req);

        let deleteInformation = await deleteBookUseCase.deleteBook(req.params.id);

        res.send(deleteInformation);
    }

    async function updateBookDetails(req, res, next){
        logRequest('updateBookDetails', req);
        let fileBuffer;
        

        let author = authorsMapper.mapAuthorToAuthorToUpdateModel(req.body, null);
        let oldAuthor = authorsMapper.mapOldAuthorDataToWebModel(req.body);
        let book = booksMapper.mapBookToBookToUpdateModel(req.body, req.params.id);
        let information;

        if(req.files !== null){
            fileBuffer = req.files.bookImage.data;
            information = await updateDetailsUseCase.updateDetails(author, book, oldAuthor, fileBuffer);
        }else{
            information = await updateDetailsUseCase.updateDetails(author, book, oldAuthor);
        }
        res.send(information);
    }

    async function getBookGenres(req, res, next){
        logRequest('getBookGenres', req);
        
        let genres = await getBookGenresUseCase.getGenres(req.params.location);

        res.send(genres)
    }

    async function getBookAverageRating(req, res, next){
        logRequest('getBookAverageRating', req);

    }

    async function getBookRatingByUserId(req, res, next){
        logRequest('getBookRatingByUserId', req);

        let rating = await getBookRatingUseCase.getRatingByUserId(req.params.userId, req.params.bookId);

        res.send(rating);
    }

    async function setBookRating(req, res, next){
        logRequest('setBookRating', req);
        console.log(req.body);

        let information = await setBookRatingUseCase.setBookRating(req.body[0], req.body[1], req.body[2])
        res.send(information);
    }


module.exports = {getBooks, getBookDetails, storeNewBook, deleteBook, 
                    updateBookDetails, getBookGenres, setBookRating, getBookAverageRating,
                    getBookRatingByUserId};

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}

