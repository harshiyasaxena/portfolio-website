import CategoryGalaxy from "./CategoryGalaxy";
import { galaxyData } from "./galaxyData";

const SkillGalaxy = () => {
  return (
    <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-6 sm:gap-x-16 justify-items-center w-full max-w-7xl mx-auto px-4">
      {galaxyData.map((category) => (
        <CategoryGalaxy
          key={category.title}
          title={category.title}
          color={category.color}
          skills={category.skills}
        />
      ))}
    </div>
  );
};

export default SkillGalaxy;