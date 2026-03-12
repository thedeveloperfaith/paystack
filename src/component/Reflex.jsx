import Card from "./Card";
import { CardArr } from "./dummyReflex";
import "./Reflex.css";

const Reflex = () => {
  return (
    <section className="component_body">
      <div className="component_wrapper">

        {CardArr.map((item) => (
          <Card key={item.id} data={item} />
        ))}

      </div>
    </section>
  );
};

export default Reflex;