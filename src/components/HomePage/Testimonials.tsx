import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <>
      <div className="container py-12 md:py-16 lg:py-24">
        <div className="text-center mb-10">
          <p className="mb-2 font-semibold text-blue-900 ">
            Was sie über uns sagen
          </p>
          {/* <p className="mb-2 font-semibold text-blue-900 ">
            What They Say About Us
          </p> */}
          {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Testimonials
          </h2> */}
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Erfahrungsberichte
          </h2>
          <p className=" text-muted-foreground text-sm max-w-xl mx-auto leading-7">
            Von Gärtnern geliebt, von der Natur geschätzt.
          </p>
          {/* <p className=" text-muted-foreground text-sm max-w-xl mx-auto leading-7">
            Loved by Gardeners, Trusted by Nature.
          </p> */}
        </div>
        <div className="padding mx-auto w-screen  justify-center">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
