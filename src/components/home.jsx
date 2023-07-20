import { robot } from "../assets";
import { styles } from "../util/style";
import { CiDiscount1 } from "react-icons/ci";
import Button from "./button";

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col md:items-center ${styles.paddingY}`}
    >
      {/* animation image */}
      <div className={`flex-1 ${styles.flexStart} md:my-0 my-10`}>
        <img
          src={`${robot}`}
          alt="robot"
          className="w-[100%] h-[100%] relative z-10 rounded-md"
        />
      </div>

      {/* information */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}
      >
        {/* discount */}
        <div className="flex flex-row items-center py-[6px] px-4 rounded mb-2 bg-slate-500 bg-discount-gradient">
          <CiDiscount1 className="text-[30px] text-white mr-2" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20% </span> Chegirma{" "}
            <span className="text-white">1 Oylik</span> Xisob Uchun
          </p>
        </div>

        {/* title */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br />{" "}
            <span className="text-gradient">To'lov usuli</span>
          </h1>
        </div>

        {/* description */}
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          illum corporis. Porro perferendis adipisci dolorum quod qui quae aut
          quam!
        </p>

        {/* getting started */}
        <Button styles={"mt-2"} />

        {/* gradient bg */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Home;
