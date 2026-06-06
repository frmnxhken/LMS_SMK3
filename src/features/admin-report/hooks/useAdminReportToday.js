import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { getReportToday } from "../api/adminReportApi";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

const useAdminReportToday = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const status = searchParams.get("status") || "";
  const search = searchParams.get("search") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["attendanceToday", page, status, search],
    queryFn: () => getReportToday(page, status, search),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  const handleStatusChange = (newFilter) => {
    const params = new URLSearchParams(searchParams);
    if (newFilter) {
      params.set("status", newFilter);
    } else {
      params.delete("status");
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
    const hasNextPage = data?.meta ? page < data.meta.last_page : false;
    if (hasNextPage) {
      const nextPage = page + 1;
      queryClient.prefetchQuery({
        queryKey: ["attendanceToday", nextPage, status, search],
        queryFn: () => getReportToday(nextPage, status, search),
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [data, page, queryClient]);

  return {
    data: data?.data,
    isLoading,
    page,
    status,
    handlePageChange,
    handleStatusChange,
    handleSearchChange,
    pagination: data?.meta || {},
  };
};

export default useAdminReportToday;
