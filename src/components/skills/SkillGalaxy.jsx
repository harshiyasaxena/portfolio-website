import CategoryGalaxy from "./CategoryGalaxy";
import { galaxyData } from "./galaxyData";

const SkillGalaxy = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-24 gap-x-16 justify-items-center">
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