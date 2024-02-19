import styled from "styled-components";
import { Spinner } from "../components/elements/Spinner";
import { GenericError } from "../components/layout/GenericError";
import { CoverSizes } from "../constants/coverSizes";
import { theme } from "../styles/theme";
import { getCoverUrl } from "../utils/openlibrary-api";
import { ContentSection } from "../components/layout/ContentSection";
import { useLatestBooks } from "../hooks/useLatestBooks";

export function Home() {
  const { data: books, isLoading, isError } = useLatestBooks({ limit: 3 });

  if (isError) {
    return <GenericError />;
  }

  return (
    <ContentSection>
      <h2>Latest books</h2>

      {isLoading ? (
        <StyledSpinner />
      ) : (
        <TileContainer>
          {books?.map((book) => (
            <Tile key={book.id}>
              <TileImage
                src={getCoverUrl(book.coverId, CoverSizes.LARGE)}
              ></TileImage>
              <TileTitle>{book.title}</TileTitle>
              <TileSubTitle>By {book.authorNames?.join(", ")}</TileSubTitle>
            </Tile>
          ))}
        </TileContainer>
      )}
    </ContentSection>
  );
}

const TileContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.xs}) {
    flex-direction: column;
  }
`;
const Tile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
`;

const TileImage = styled.img`
  margin-bottom: 1rem;
  object-fit: cover;
  aspect-ratio: 2/3;
  width: 100%;
`;

const TileTitle = styled.span`
  font-weight: bold;
`;

const TileSubTitle = styled.span`
  font-style: italic;
`;

const StyledSpinner = styled(Spinner)`
  margin: 0 auto;
`;
