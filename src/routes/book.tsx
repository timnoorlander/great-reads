import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "../components/elements/Spinner";
import { GenericError } from "../components/layout/GenericError";
import { ContentSection } from "../components/layout/ContentSection";
import { useBook } from "../hooks/useBook";

export function Book() {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useBook({ bookId });

  if (isError) {
    return <GenericError />;
  }

  if (isLoading) {
    return <StyledSpinner />;
  }

  return (
    <ContentSection>
      <h2>{book.title}</h2>
    </ContentSection>
  );
}

const StyledSpinner = styled(Spinner)`
  margin: 0 auto;
`;
