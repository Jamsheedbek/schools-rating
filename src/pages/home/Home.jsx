import "./Home.scss";
import ChildsImage from "./../../assets/img/childs.png";
import RatingChart from "../../components/RatingChart/RatingChart";

const Home = () => {
  return (
    <>
      <section className="entry">
        <div className="entry__left">
          <h1 className="entry__title">Sport maktablari reytingi</h1>
          <p className="entry__text">
            Bu yerda sport maktablari reytingini viloyatlar, tumanlar va
            maktablar kesimida korishingiz mumkin.
          </p>
        </div>
        <img
          className="entry__right entry__image"
          src={ChildsImage}
          alt="childrens img"
          width={550}
          height={400}
        />
      </section>
      <RatingChart />
    </>
  );
};

export default Home;
