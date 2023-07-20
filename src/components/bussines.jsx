import { features } from "../util/constant";
import { layout, styles } from "../util/style";
import Button from "./button";
import FeatureCard from "./feature-card";

const Bussines = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionIfo}>
        <h2 className={`${styles.heading2}`}>
          Biznes rivojlantiring, <br className="sm:block hidden" /> pulni biz.
          hal qilamiz
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, incidunt? Tenetur sint magnam sed tempora aperiam,
          repellendus qui illo error.
        </p>
        <Button styles={"mt-10 mb-4"} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Bussines;
