import { useState } from "react";
import { logo } from "../assets";
import { navigationLinks } from "../util/constant";
import { styles } from "../util/style";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggleNav, setToggleNav] = useState(false);
  const toggleHandler = () => {
    setToggleNav((prev) => !prev);
  };
  const activeHandler = (id) => setActive(id);
  return (
    <div className={`${styles.flexBetween} w-full  navbar`}>
      <div className={`${styles.heading1} cursor-pointer`}>
        <img src={logo} alt="logo" className="w-[130px] " />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center  ">
        {navigationLinks.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`${styles.navLink} ${
                index === navigationLinks.length - 1 ? "mr-0" : "mr-10"
              } ${active === item.id ? "active" : ""}
               hover:text-white transition-all duration-300 navlink`}
              onClick={() => activeHandler(item.id)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/* navigation btn*/}
      <div className="sm:hidden flex flex-1 justify-end items-end">
        <div
          className="text-white text-[25px] cursor-pointer"
          onClick={toggleHandler}
        >
          {toggleNav ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </div>

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0
          left-0 w-full sidebar bg-black-gradient`}
        >
          <ul className="list-none flex justify-center items-center flex-1 ">
            {navigationLinks.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${
                    index === navigationLinks.length - 1 ? "mr-0" : "mr-10"
                  }${
                    active === item.id ? "text-white" : "text-lightWhite"
                  } hover:text-lightWhite transition-all duration-300`}
                  onClick={() => activeHandler(item.id)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
