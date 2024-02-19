import styled from "styled-components";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { paths } from "../../constants/paths";

type Props = {
  className?: string;
};

export function BookSearchInput({ className }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("search") || ""
  );
  const location = useLocation();
  const navigate = useNavigate();

  function onSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchTerm(value);

    if (location.pathname !== paths.BOOKS) {
      navigate(paths.BOOKS);
    }

    setSearchParams((params) => {
      params.set("search", value);
      return params;
    });
  }

  return (
    <Input
      type="text"
      placeholder="Search for book titles..."
      value={searchTerm}
      onChange={onSearchInputChange}
      className={className}
    ></Input>
  );
}

export const Input = styled.input`
  padding: 1rem;
  border-radius: ${theme.borderRadius.md};
  border: none;
  outline: none;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.text};
  background-color: ${theme.colors.accent};

  &:focus-within {
    ${theme.boxShadow}
  }
`;
