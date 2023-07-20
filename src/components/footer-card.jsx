import { footerLinks } from "../util/constant";

const FooterCard = ({ title, links }) => {
  return (
    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
      <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
        {title}
      </h4>
      <ul className="list-none mt-4">
        {links.map((link, indx) => (
          <li
            key={indx}
            className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer ${
              indx === footerLinks.length - 1 ? "mb-0" : "mb-4"
            }`}
          >
            <a href={link.link} target="_blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
