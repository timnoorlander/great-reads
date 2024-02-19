# GreatReads

## Assignment

Build a new website for book enthusiasts. This application has 2 pages.

1. Landing page:

- display the latest 3 books
- this landing page has a menu with 1 item, Books
- the user should be able to search on this page for a book and see it as a result displayed on the
  page
- the search term should be persistent in the URL

2. Books page:

- display a list of 10 books
- clicking on a book row opens a new details page

There is no need to build a backend for the application. An open API or mock data can be used.

## How to run

### Install dependencies

`npm install`

### Run the app

`npm run dev`

## API used for this app

I've decided to go for the OpenLibrary API. The docs can be found here: https://openlibrary.org/developers/api

## Things I would have liked to add

- Error handling, especially for the API
- Unit tests
- Add loading skeletons to improve perceived performance
- Handle loading of image
- Pagination for search results
- Change default favicon
- Improve aesthetics of books table
- Make books table responsive
- Improve usability of search box
- Remove "?search=" from URL after a search is removed
- Show more content on book page
- Create back button on book page

And probably lots of other things I can't think of right now :)

## Notes

### Why I diverted from the assignment specs

The assignment specifies that the search results should be displayed on the landing page. I decided to display the search results on the /books page. I did this, because the /books page already shows a list of books, and therefore it made sense to me to show the search results there too.

I want to emphasis that, if this was a real life scenario, I would have discussed this with the stakeholders and/or the team and not suddenly divert from the acceptance criteria. After the discussion I would have implemented whatever we decided on together.

### API complexity

I introduced quite some complexity to improve the response time from the API, especially in the `getLatestBooks()` function. Unfortunately this seemed to be necessary, because querying the OpenLibrary search API without any parameters results is not performant and even results in a timeout. Therefore I decided to create a separate `getLatestBooks()` function that only select books from this and last year. `getBooks()` returns all books regardless of the year of publication and is therefore only used for the search results.
