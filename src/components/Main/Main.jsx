import Hero from "../Hero/Hero";
import VideoSection from "../VideoSection/VideoSection";
import VideoList from "../VideoList/VideoList";

function Main() {
  return (
    <main>
      {/* Hero section */}

      <Hero
      //   videoFirst={Videos}
      />

      {/* video section - has hero-video details, new comment & old comments section */}

      <VideoSection />

      {/* Video list Section */}

      <VideoList
      //   Videos={Videos}
      />
    </main>
  );
}

export default Main;
