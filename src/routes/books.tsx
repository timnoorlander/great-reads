import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCoverUrl } from "../utils/openlibrary-api";
import { CoverSizes } from "../constants/coverSizes";
import { theme } from "../styles/theme";
import { GenericError } from "../components/layout/GenericError";
import { Spinner } from "../components/elements/Spinner";
import { ContentSection } from "../components/layout/ContentSection";
import { useLatestBooks } from "../hooks/useLatestBooks";
import { useSearchResults } from "../hooks/useSearchResults";

const BOOKS_LIMIT = 10;

export function Books() {
  const navigate = useNavigate();

  const searchResults = useSearchResults({ limit: BOOKS_LIMIT });
  const latestBooks = useLatestBooks({ limit: BOOKS_LIMIT });

  const books = searchResults.data || latestBooks.data;
  const isLoadingBooks = latestBooks.isLoading || searchResults.isLoading;

  if (latestBooks.isError || searchResults.isError) {
    return <GenericError />;
  }

  return (
    <ContentSection>
      <h2>{searchResults.data ? "Search results" : "Books"}</h2>

      {isLoadingBooks ? (
        <StyledSpinner />
      ) : (
        <Table cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th scope="col">Cover</th>
              <th scope="col">Title</th>
              <th scope="col">Author(s)</th>
              <th scope="col">Year of publication</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book) => (
              <Row key={book.id} onClick={() => navigate(book.id)}>
                <td>
                  <TableImage
                    src={getCoverUrl(book.coverId, CoverSizes.SMALL)}
                  ></TableImage>
                </td>
                <td>{book.title}</td>
                <td>{book.authorNames?.join(", ")}</td>
                <td>{book.firstPublishYear}</td>
              </Row>
            ))}
          </tbody>
        </Table>
      )}
    </ContentSection>
  );
}

const Table = styled.table`
  width: 100%;
  text-align: left;
  border: none;
`;

const Row = styled.tr`
  cursor: pointer;
  height: 3rem;
  margin: 1rem;

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

const StyledSpinner = styled(Spinner)`
  margin: 0 auto;
`;

const TableImage = styled.img`
  display: block;
`;
