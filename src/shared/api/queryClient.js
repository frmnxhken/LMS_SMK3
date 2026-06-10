import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

let toastFn = null;
let academicYearSetter = null;

export const registerToast = (fn) => {
  toastFn = fn;
};

export const registerAcademicYearSetter = (fn) => {
  academicYearSetter = fn;
};

const academicYearCodes = [
  "ACADEMIC_YEAR_DRAFT",
  "ACADEMIC_YEAR_ACTIVE",
  "ACADEMIC_YEAR_COMPLETED",
];

function handleError(error) {
  const data = error?.response?.data;

  if (academicYearCodes.includes(data?.message))
    return toastFn?.(data?.message, "error");

  if (academicYearSetter) {
    academicYearSetter({
      status: data.status,
    });
  }
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleError,
  }),
  mutationCache: new MutationCache({
    onError: handleError,
  }),
});
