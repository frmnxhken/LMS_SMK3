import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { getReportHistory } from "../api/adminReportApi";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

const useAdminReportHistory = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const status = searchParams.get("status") || "";
  const search = searchParams.get("search") || "";
  const startDate = searchParams.get("start_date") || "";
  const endDate = searchParams.get("end_date") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["attendanceHistory", page, status, startDate, endDate, search],
    queryFn: () => getReportHistory(page, status, startDate, endDate, search),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  const handleStatusChange = (newStatus) => {
    const params = new URLSearchParams(searchParams);

    if (newStatus) {
      params.set("status", newStatus);
    } else {
      params.delete("status");
    }

    params.set("page", 1);
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

  const handleDateRangeChange = (startDate, endDate) => {
    const params = new URLSearchParams(searchParams);

    if (startDate) {
      params.set("start_date", startDate);
    } else {
      params.delete("start_date");
    }

    if (endDate) {
      params.set("end_date", endDate);
    } else {
      params.delete("end_date");
    }

    params.set("page", 1);
    setSearchParams(params);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    setSearchParams(params);
  };

  useEffect(() => {
    const hasNextPage = data?.meta ? page < data.meta.last_page : false;

    if (hasNextPage) {
      const nextPage = page + 1;

      queryClient.prefetchQuery({
        queryKey: [
          "attendanceHistory",
          nextPage,
          status,
          startDate,
          endDate,
          search,
        ],
        queryFn: () =>
          getReportHistory(nextPage, status, startDate, endDate, search),
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [data, page, status, startDate, endDate, search, queryClient]);

  return {
    data: data?.data,
    isLoading,
    page,
    status,
    search,
    startDate,
    endDate,
    handlePageChange,
    handleStatusChange,
    handleSearchChange,
    handleDateRangeChange,
    pagination: data?.meta || {},
  };
};

export default useAdminReportHistory;
