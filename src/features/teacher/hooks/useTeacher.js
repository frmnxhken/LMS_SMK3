import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { getTeachers } from "../api/teacherApi";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

const useTeacher = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["teachers", page, search],
    queryFn: () => getTeachers(page, search),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

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
        queryKey: ["teachers", nextPage, search],
        queryFn: () => getTeachers(nextPage, search),
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [data, page, queryClient]);

  return {
    data: data?.data,
    isLoading,
    page,
    handlePageChange,
    handleSearchChange,
    pagination: data?.meta || {},
  };
};

export default useTeacher;
