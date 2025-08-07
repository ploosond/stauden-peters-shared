import React from "react";

const About = () => {
  return (
    <section className="container relative flex flex-col items-center justify-center mt-20 md:mt-24 lg:mt-40 rounded-2xl md:pb-16 lg:pb-24 ">
      <div className="flex gap-10 lg:gap-4 flex-col lg:flex-row justify-center items- lg:items-start text-center lg:text-left">
        {/* left */}
        <div>
          <h1 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Stauden Peters GbR
          </h1>
          <p className="text-sm mb-4 text-blue-900 font-semibold">Kranenburg, Germany</p>
          <p className="text-sm text-muted-foreground leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
            odit quam quod libero tempora dolorem sunt, sequi harum explicabo
            veritatis reiciendis vel et repudiandae! Earum repudiandae nam
            dolorum odio.
          </p>
          <br />
          <p className="text-sm text-muted-foreground leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nihil deleniti quaerat quod soluta autem dolor cum
            voluptates ea excepturi amet tempora, inventore iure, eligendi
            perspiciatis nesciunt rerum molestias adipisci.
          </p>
        </div>

        {/* right */}
        <div className="max-w-xl mx-auto">
          <img
            src="/about-us.jpg"
            alt="location image"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
