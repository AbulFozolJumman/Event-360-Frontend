import Banner from "../Banner/Banner";
import EventItems from "../EventItems/EventItems";
import Plan from "../Plan/Plan";
import RecentEvents from "../RecentEvents/RecentEvents";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Specialty from "../Specialty/Specialty";
import Subscribes from "../Subscribes/Subscribes";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <EventItems />
      <Plan />
      <Review />
      <RecentEvents />
      <Specialty />
      <Subscribes />
    </>
  );
};

export default Home;
