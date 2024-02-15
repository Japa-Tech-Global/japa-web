import CourseCard from "../Components/Cards/CoursesCard/CourseCard";
import AuthHeader from "../Components/Headers/AuthHeader/AuthHeader";
import SearchHeader from "../Components/Headers/SearchHeader/SearchHeader";
import CourseHero from "../Components/Hero/CourseHero/CourseHero";
import TalentTest from "../Components/TalentAssesment/TalentTest";
import {
  ITCourses,
  addCourses,
  businessCourses,
  designCourses,
} from "./courseData";

const Courses = () => {
  return (
    <div>
      <AuthHeader />
      <SearchHeader />
      <CourseHero />
      <div className="p-12">
        <p className="text-2xl">A broad selection of courses</p>
        <p>
          Learn skills to be more competitive in top industries without limits
        </p>
        <div className="py-12">
          <p className="text-2xl">Newly Added Courses</p>
          <div className="grid lg:grid-cols-3 gap-5 mt-5">
            {addCourses.map((addCourse, index) => (
              <>
                <CourseCard
                  src={addCourse.src}
                  title={addCourse.title}
                  source={addCourse.source}
                />
              </>
            ))}
          </div>
        </div>
        <TalentTest />
        <div className="py-12">
          <p className="text-2xl">Top Courses in Business</p>
          <div className="grid lg:grid-cols-3 gap-5 mt-5">
            {businessCourses.map((businessCourse, index) => (
              <>
                <CourseCard
                  src={businessCourse.src}
                  title={businessCourse.title}
                  source={businessCourse.source}
                />
              </>
            ))}
          </div>
        </div>
        <div className="py-12">
          <p className="text-2xl">Top Courses in Design</p>
          <div className="grid lg:grid-cols-3 gap-5 mt-5">
            {designCourses.map((designCourse, index) => (
              <>
                <CourseCard
                  src={designCourse.src}
                  title={designCourse.title}
                  source={designCourse.source}
                />
              </>
            ))}
          </div>
        </div>
        <div className="py-12">
          <p className="text-2xl">Top courses in IT & Software</p>
          <div className="grid lg:grid-cols-3 gap-5 mt-5">
            {ITCourses.map((course) => (
              <>
                <CourseCard
                  src={course.src}
                  title={course.title}
                  source={course.source}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
