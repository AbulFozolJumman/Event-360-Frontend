import Banner from "../Banner/Banner";
import EventItems from "../EventItems/EventItems";
import Plan from "../Plan/Plan";
import RecentEvents from "../RecentEvents/RecentEvents";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <EventItems />
      <Plan />
      <Review />
      <RecentEvents />
    </>
  );
};

export default Home;
