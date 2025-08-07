import About from "./About";
import Gallery from "./Gallery";
import TeamLoc from "./TeamLoc";

// interface Params {
//   params: Promise<{ location: string }>;
// }

const page = async () => {
  return (
    <div className="min-h-screen">
      <About />
      <Gallery />
      <TeamLoc />
    </div>
  );
};

export default page;
