import { useQuery } from "@tanstack/react-query";
import { getBookById } from "../utils/openlibrary-api";

type Props = {
  bookId?: string;
};

export function useBook({ bookId }: Props) {
  return useQuery({
    queryKey: ["book", bookId],
    enabled: !!bookId,
    queryFn: () => (bookId ? getBookById(bookId) : null),
  });
}
