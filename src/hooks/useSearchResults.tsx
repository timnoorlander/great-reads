import { useSearchParams } from "react-router-dom";
import useDebounce from "./useDebounce";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../utils/openlibrary-api";

const SEARCH_INPUT_DEBOUNCE_MS = 1000;

type Props = {
  limit: number;
};

export function useSearchResults({ limit }: Props) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  const debouncedSearchTerm = useDebounce(searchTerm, SEARCH_INPUT_DEBOUNCE_MS);

  const hasSearchTerm = !!debouncedSearchTerm;

  return useQuery({
    queryKey: ["books", { searchTerm: debouncedSearchTerm, limit }],
    queryFn: () =>
      getBooks({
        ...(hasSearchTerm && { searchTerm: debouncedSearchTerm }),
        limit,
      }),
    enabled: hasSearchTerm,
  });
}
