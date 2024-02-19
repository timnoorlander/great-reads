import { CoverSizes } from "../constants/coverSizes";
import { Book } from "../types/book";

type OpenLibraryResponse = {
  docs: Array<{
    key: string;
    title: string;
    author_name?: Array<string>;
    first_publish_year?: number;
    cover_i: string;
  }>;
};

const BASE_URL = "https://openlibrary.org";

export async function getLatestBooks({ limit }: { limit: number }) {
  // Only select this and previous year to optimize performance.
  const currentYear = new Date().getFullYear();
  const selectThisAndPreviousYear = `first_publish_year%3A%5B${
    currentYear - 1
  }+TO+${currentYear}%5D`;

  // For aesthetic purposes, only select documents that contain a cover id.
  const selectWithCover = "cover_i%3A%5B*+TO+*%5D";

  const response = await fetch(
    `${BASE_URL}/search.json?q=${selectThisAndPreviousYear}+AND+${selectWithCover}&limit=${limit}`
  );
  const data: OpenLibraryResponse = await response.json();

  return parseBooksFromBooksResponse(data);
}

export async function getBooks({
  searchTerm,
  limit,
}: {
  searchTerm?: string;
  limit: number;
}) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${searchTerm}&limit=${limit}`
  );
  const data: OpenLibraryResponse = await response.json();

  return parseBooksFromBooksResponse(data);
}

export async function getBookById(id: string) {
  const response = await fetch(`${BASE_URL}/works/${id}.json`);
  return response.json();
}

export function getCoverUrl(coverId: string, coverSize: CoverSizes) {
  const size = coverSize === CoverSizes.LARGE ? "L" : "S";
  return `http://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}

function parseBooksFromBooksResponse(
  response: OpenLibraryResponse
): Array<Book> {
  return response.docs.map((doc) => ({
    id: parseDocumentKeyToId(doc.key),
    title: doc.title,
    authorNames: doc.author_name,
    firstPublishYear: doc.first_publish_year,
    coverId: doc.cover_i,
  }));
}

function parseDocumentKeyToId(documentKey: string) {
  return documentKey.split("/")[2];
}
