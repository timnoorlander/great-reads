import styled from "styled-components";
import { theme } from "../../styles/theme";

type Props = {
  children: React.ReactNode;
};

export function ContentSection({ children }: Props) {
  return (
    <OuterContainer>
      <Section>{children}</Section>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  background-color: ${theme.colors.accent};
`;

const Section = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`;
