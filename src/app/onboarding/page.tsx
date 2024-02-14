import Cards from "./Components/Cards/Cards";
import Header from "./Components/Headers/Headers";
import Hero from "./Components/Hero/Hero";
import Button from "./Components/Button/Button";
import { GoArrowRight } from "react-icons/go";
import TalentTest from "./Components/TalentAssesment/TalentTest";
import BlogCarousel from "./Components/BlogCarousel/BlogCarousel";
const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="py-10 px-12">
        <div>
          <p className="text-xl">
            Land your next role with the newest openings
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6 pb-12">
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div>
          <Button intent="tertiary">
            See more Jobs
            <GoArrowRight />
          </Button>
        </div>
        <div className="py-12">
          <TalentTest />
        </div>
        <div>
          <p className="text-xl">See the latest on our blog</p>
          {/* <BlogCarousel /> */}
        </div>
      </div>
    </div>
  );
};
export default Homepage;
