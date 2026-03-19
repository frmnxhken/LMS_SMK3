import React from "react";
import MemberCard from "../ui/MemberCard";
import { useParams } from "react-router";
import useMembers from "../hooks/useMembers";

const MemberPage = () => {
  const { id_class } = useParams();
  const { data, isLoading } = useMembers(id_class);

  return (
    <div className="container max-w-[780px] mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-heading font-bold text-xl mb-4">Pengajar</h1>
        <MemberCard
          name={data?.teacher?.[0].name}
          photo={data?.teacher?.[0].photo}
        />
      </div>
      <div>
        <h1 className="text-heading font-bold text-xl mb-4">Anggota Kelas</h1>
        <div className="space-y-2">
          {data?.students.map((student, index) => (
            <MemberCard key={index} name={student.name} photo={student.photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
