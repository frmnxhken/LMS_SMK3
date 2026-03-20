import React from "react";
// import courses from "@/shared/data/dummy/courses.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CourseCard from "@/features/course/ui/CourseCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const HomeCourseList = ({ courses }) => {
  return (
    <div className="w-full mt-8">
      <div className="flex justify-between items-center mb-6 px-2">
        <div>
          <h2 className="text-xl font-bold text-text-heading">Kelas Saya</h2>
          <p className="text-sm text-text-muted">
            Daftar kelas kamu yang tersedia saat ini.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="nav-prev bg-app-surface border border-app-border p-2 rounded-xl text-text-body hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <IoChevronBack size={20} />
          </button>
          <button className="nav-next bg-app-surface border border-app-border p-2 rounded-xl text-text-body hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        freeMode={true}
        navigation={{
          prevEl: ".nav-prev",
          nextEl: ".nav-next",
        }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        modules={[FreeMode, Navigation]}
        className="pb-4"
      >
        {courses?.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseCard
              id={course.id}
              subject={course.subject}
              teacher={course.teacher}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCourseList;
