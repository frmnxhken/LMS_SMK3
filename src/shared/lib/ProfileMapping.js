export const getInformationProfile = (data) => {
  if (!data) return { teacher: [], student: [] };

  return {
    teacher: [
      { label: "Nama lengkap", value: data.name },
      { label: "No telepon ", value: data.teacher?.phone || "-" },
      { label: "Nip", value: data.teacher?.nip || "-" },
    ],
    student: [
      { label: "Nama lengkap", value: data.name },
      { label: "nisn", value: data.student?.nis || "-" },
    ],
  };
};
