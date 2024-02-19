import { useQuery } from "@tanstack/react-query";
import { getLatestBooks } from "../utils/openlibrary-api";

type Props = {
  limit: number;
};

export function useLatestBooks({ limit }: Props) {
  return useQuery({
    queryKey: ["books", { limit }],
    queryFn: () => getLatestBooks({ limit }),
  });
}
