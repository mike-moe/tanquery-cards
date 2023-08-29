import { useQuery } from "react-query";
import { baseURL } from "../../api/BaseURL";
import { useState } from "react";
export const useGetProducts = () => {
  const [page, setPage] = useState(1);
  const {
    data: products,
    isLoading,
    error,
    isPreviousData,
    isFetching,
    isError,
  } = useQuery(["products", page], () => baseURL.get(`products?page=${page}&limit=${6 * page}`), { keepPreviousData: true });
  return { products, isLoading, error, isPreviousData, page, setPage, isFetching, isError };
};
