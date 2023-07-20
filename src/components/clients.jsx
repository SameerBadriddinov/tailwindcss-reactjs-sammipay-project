import { clients } from "../util/constant";
import { styles } from "../util/style";
import ClientCard from "./client-card";

const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, idx) => (
          <ClientCard key={idx} {...client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
