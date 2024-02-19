import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { paths } from "../../constants/paths";
import { theme } from "../../styles/theme";
import { BookSearchInput } from "../elements/BookSearchInput";

export function Header() {
  return (
    <Container>
      <TitleLink to={paths.ROOT}>
        <h1>Great Reads</h1>
      </TitleLink>

      <StyledBookSearchInput />

      <nav>
        <ul>
          <li>
            <StyledNavLink to={paths.BOOKS}>Books</StyledNavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  max-width: 70rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;

  h1 {
    margin: 0;
  }
`;

const StyledBookSearchInput = styled(BookSearchInput)`
  min-width: clamp(15rem, 5rem + 40vw, 25rem);

  @media (min-width: ${theme.breakpoints.lg}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
