import React from "react";

const people = [
  {
    id: 1,
    name: "Rafal Dudek",
    phone: "+49 (0)28 26 / 91 50 - 0",
    email: "rafal.dudek@stauden-peters.de",
    positionDe: "GESCHÄFTSFÜHRUNG",
    positionEn: "Production head & executive",
    image: "/MainTeam/Rafal.jpg",
  },
  {
    id: 2,
    name: "Julia Schwarzer",
    phone: "+49 (0)28 26 / 91 50 - 20",
    email: "julia.schwarzer@stauden-peters.de",
    positionDe: "VERKAUFSLEITUNG",
    positionEn: "Sales Head",
    image: "/MainTeam/Julia.jpg",
  },
  {
    id: 3,
    name: "Jens Eckermann",
    phone: "+49 (0)28 26 / 91 50 - 23",
    email: "jens.eckermann@stauden-peters.de",
    positionDe: "VERKAUF",
    positionEn: "Sales",
    image: "/MainTeam/Jens.jpg",
  },
  {
    id: 4,
    name: "Anna Kindner",
    phone: "+49 (0)28 26 / 91 50 - 30",
    email: "anna.kindner@stauden-peters.de",
    positionDe: "VERKAUF, LOGISTIK UND ZERTIFIZIERUNG",
    positionEn: "Sales, Logistics & Certification",
    image: "/MainTeam/Anna.jpg",
  },
  {
    id: 5,
    name: "Nadine Roebrock",
    phone: "+49 (0)28 26 / 91 50 - 21",
    email: "nadine.roebrock@stauden-peters.de",
    positionDe: "ASSISTENZ DER GESCHÄFTSFÜHRUNG",
    positionEn: "Management Assistent",
    image: "/MainTeam/Nadine.jpg",
  },
  {
    id: 6,
    name: "Cornelia Wolter",
    phone: "+49 (0)28 26 / 91 50 - 11",
    email: "cornelia.wolter@stauden-peters.de",
    positionDe: "LEERGUTVERWALTUNG & ASSISTENZ DER GESCHÄFTSFÜHRUNG",
    positionEn: "Empties & Management Assistent",
    image: "/MainTeam/Cornelia.jpg",
  },
  {
    id: 7,
    name: "Frank Dercks",
    phone: "+49 (0)28 26 / 91 50 - 10",
    email: "frank.dercks@stauden-peters.de",
    positionDe: "BUCHHALTUNG & PERSONALWESEN",
    positionEn: "Accounting & Human Resources",
    image: "/MainTeam/Frank.jpg",
  },
  {
    id: 8,
    name: "Anil Patel",
    phone: "+49 2826 9150-31",
    email: "anil.patel@stauden-peters.de",
    positionDe: "ANBAUPLANNUNG, EINKAUF & CONTROLLING",
    positionEn: "Cultivation Planning, Purchasing & Controlling",
    image: "/MainTeam/Anil.jpg",
  },
  {
    id: 9,
    name: "Mario Hermans",
    phone: "+49 2826 9150-22",
    email: "mario.hermanns@stauden-peters.de",
    positionDe: "PERSONALLEITUNG",
    positionEn: "Human Resourse Management",
    image: "/MainTeam/Mario.jpg",
  },
  {
    id: 10,
    name: "Raimund Koken",
    phone: "+49 (0)28 26 / 91 50 – 27",
    email: "raimund.koken@stauden-peters.de",
    positionDe: "PRODUKTIONSLEITUNG (KRANENBURG)",
    positionEn: "Production Management",
    image: "/MainTeam/Raimund.jpg",
  },
  {
    id: 11,
    name: "Susanne Dikkers",
    phone: "+49 (0)28 26 / 91 50 - 14",
    email: "susanne.dikkers@stauden-peters.de",
    positionDe: "VERKAUF & VERSANDHANDEL (Reichswalde)",
    positionEn: "Sales & Mail Order",
    image: "/MainTeam/Susanne.jpg",
  },
  {
    id: 12,
    name: "Abdallah Osman",
    phone: "+49 (0)28 26 / 91 50 – 25",
    email: "abdallah.osman@stauden-peters.de",
    positionDe: "HALLELEITUNG",
    positionEn: "Hall Management",
    image: "/MainTeam/abdallah.jpg",
  },
  {
    id: 13,
    name: "Hem Khatri",
    phone: "+49 (0)28 26 / 91 50 – 26",
    email: "",
    positionDe: "HALLELEITUNG",
    positionEn: "Hall Management",
    image: "/MainTeam/Hem.jpg",
  },
  {
    id: 14,
    name: "Sven Van Düren",
    phone: "+49 (0)28 26 / 91 50 – 0",
    email: "sven.vandueren@stauden-peters.de",
    positionDe: "PRODUKTION",
    positionEn: "Production",
    image: "/MainTeam/Sven.jpg",
  },
  {
    id: 15,
    name: "Silviya Chakarova",
    phone: "+49 (0)28 26 / 91 50 - 55",
    email: "silviya.chakarova@stauden-peters.de",
    positionDe: "ETIKETTENDRUCK",
    positionEn: "Label Printing",
    image: "/MainTeam/silviya.jpg",
  },
  // {
  //   id: 16,
  //   name: "Kiran Shah",
  //   phone: "",
  //   email: "",
  //   positionDe: "WARENANNAHME, INVENTUR",
  //   positionEn: "Inbond Logistics & Inventory",
  //   image: "/kiran.jpg",
  // },
];

const Team = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 padding">
      <div className=" ">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold text-blue-900 ">
            Durch Leidenschaft vereint, durch Exzellenz angetrieben
          </p>
          {/* <p className="mb-2 font-semibold text-blue-900 ">
            United by Passion, Driven by Excellence
          </p> */}
          <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            Unser Team
          </h2>
          {/* <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            Our Team
          </h2> */}
        </div>

        {/* team Photos */}
 
        <div className="grid grid-cols-1 gap-y-12 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex flex-col shadow-xl px-4 rounded-b-2xl mx-auto w-full"
            >
              <div className="rounded-md w-28 h-28 overflow-hidden mx-auto  mb-2">
                <img
                  className="w-full h-full  hover:scale-[102%] duration-300 object-cover transition-all"
                  src={person.image}
                  alt=""
                />
              </div>
              <div className=" text-center">
                <div className="flex flex-col">
                  <h2 className="text-sm font-semibold text-blue-900 dark:text-white capitalize">
                    {person.name}
                  </h2>
                  <p className="block text-xs text-blue-500 capitalize dark:text-blue-300">
                    {person.positionDe}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-7">
                    {person.phone}
                  </p>
                  <p className="mb-6 text-xs text-gray-500 dark:text-gray-400">
                    {person.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
