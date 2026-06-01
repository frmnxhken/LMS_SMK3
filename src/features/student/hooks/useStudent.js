import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import { getStudents } from "../api/studentApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const useStudent = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const filter = searchParams.get("filter") || "";
  const search = searchParams.get("search") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["students", page, filter, search],
    queryFn: () => getStudents(page, filter, search),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  const handleFilterChange = (newFilter) => {
    const params = new URLSearchParams(searchParams);
    if (newFilter) {
      params.set("filter", newFilter);
    } else {
      params.delete("filter");
      params.delete("search");
    }
    params.set("page", 1);
    setSearchParams(params);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    setSearchParams(params);
  };

  const handleSearchChange = (keyword) => {
    const params = new URLSearchParams(searchParams);
    if (keyword.trim()) {
      params.set("search", keyword);
    } else {
      params.delete("search");
    }
    params.set("page", 1);
    setSearchParams(params);
  };

  useEffect(() => {
    const hasNextPage = data?.meta ? page < data.meta.totalPages : false;
    if (hasNextPage) {
      const nextPage = page + 1;
      queryClient.prefetchQuery({
        queryKey: ["students", nextPage, filter, search],
        queryFn: () => getStudents(nextPage, filter, search),
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [data, page, queryClient]);

  return {
    data: data?.data,
    isLoading,
    page,
    filter,
    handlePageChange,
    handleFilterChange,
    handleSearchChange,
    pagination: data?.meta || {},
  };
};

export default useStudent;
