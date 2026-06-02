import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getTeachingAssignments } from "../api/teachingAssignmentApi";

const useTeachingAssignment = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const school_class = searchParams.get("class") || "";
  const subject = searchParams.get("subject") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["teachingAssignments", page, school_class, subject],
    queryFn: () => getTeachingAssignments(page, school_class, subject),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    setSearchParams(params);
  };

  const handleClassChange = (newClass) => {
    const params = new URLSearchParams(searchParams);
    if (newClass) {
      params.set("class", newClass);
      params.delete("subject");
    } else {
      params.delete("class");
    }
    params.set("page", 1);
    setSearchParams(params);
  };

  const handleSubjectChange = (newSubject) => {
    const params = new URLSearchParams(searchParams);
    if (newSubject) {
      params.set("subject", newSubject);
      params.delete("class");
    } else {
      params.delete("subject");
    }
    params.set("page", 1);
    setSearchParams(params);
  };

  useEffect(() => {
    const hasNextPage = data?.meta ? page < data.meta.totalPages : false;
    if (hasNextPage) {
      const nextPage = page + 1;
      queryClient.prefetchQuery({
        queryKey: ["teachingAssignments", nextPage, school_class, subject],
        queryFn: () => getTeachingAssignments(nextPage, school_class, subject),
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [data, page, school_class, subject, queryClient]);

  return {
    data: data?.data,
    isLoading,
    page,
    handlePageChange,
    handleClassChange,
    handleSubjectChange,
    pagination: data?.meta || {},
  };
};

export default useTeachingAssignment;
