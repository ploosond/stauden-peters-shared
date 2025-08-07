import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  link: string[];
  name: string[];
}

// const productsEn: ProductType[] = [
//   {
//     id: 1,
//     link: ["home", "about", "locations", "products"],
//     name: ["home", "about", "locations", "products"],

//   },
//   {
//     id: 2,
//     link: ["projects", "contact", "blogs", "career"],
//     name: ["projects", "contact", "blogs", "career"],
//   },
// ];
const productsDe: ProductType[] = [
  {
    id: 1,
    name: ["home", "Über uns", "Standorte", "Produkte"],
    link: ["home", "about", "locations", "products"],
  },
  {
    id: 2,
    name: ["Projekte", "Kontakt", "blogs", "Karriere"],
    link: ["projects", "contact", "blogs", "career"],
  },
];

const footer = () => {
  return (
    <div className="bg-[#010c24] relative padding">
      <div className="mx-auto  px-4 sm:px-6  lg:px-8">
        <div className="pt-20 pb-16 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <div className="flex flex-col">
              <img src={"/logo_white.png"} alt="logo" className="w-48 pb-8" />
              <div className="flex gap-4">
                <Link href="https://facebook.com" className="footer-fb-icons">
                  <img
                    src={"/footer/facebook.svg"}
                    alt="facebook"
                    width={12}
                    height={10}
                    className="mx-1"
                  />
                </Link>
                <Link href="https://twitter.com" className="footer-fb-icons">
                  <img
                    src={"/footer/twitter.svg"}
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://instagram.com" className="footer-fb-icons">
                  <img
                    src={"/footer/instagram.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {productsDe.map((product) => (
            <div
              key={product.id}
              className="group relative md:col-span-4 lg:col-span-2"
            >
              <ul>
                {product.link.map((href, index) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={href === "home" ? "/" : `/${href}`}
                      className="text-white text-sm capitalize mb-6 space-links"
                    >
                      {product.name[index]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4 md:col-span-4 lg:col-span-4">
            <div className="flex gap-2">
              <img
                src={"/footer/mask.svg"}
                alt="mask-icon"
                width={15}
                height={15}
              />
              <h5 className="text-sm  text-white">
                Drüller Weg 14, 47559 Kranenburg, Germany
              </h5>
            </div>
            <div className="flex gap-2 mt-6">
              <img
                src={"/footer/telephone.svg"}
                alt="telephone-icon"
                width={15}
                height={15}
              />
              <h5 className="text-sm  text-white">+49 2826 91500</h5>
            </div>
            <div className="flex gap-2 mt-6">
              <img
                src={"/footer/email.svg"}
                alt="email-icon"
                width={15}
                height={15}
              />
              <h5 className="text-sm  text-white">info@stauden-peters.de</h5>
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 lg:flex items-center justify-between border-t ">
          <h4 className="text-white text-sm text-center lg:text-start ">
            © {new Date().getFullYear()} Stauden Peters. All Rights Reserved.
          </h4>
          <div className="flex md:gap-5 mt-5 lg:mt-0 justify-center items-center lg:justify-start flex-col md:flex-row">
            {/* <h4 className="text-white text-sm ">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4> */}
            <h4 className="text-white text-sm ">
              <Link href="/" target="_blank">
                Datenschutzrichtlinie
              </Link>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-white text-sm ">
              <Link href="/" target="_blank">
                Allgemeine Geschäftsbedingungen
              </Link>
            </h4>
            {/* <h4 className="text-white text-sm ">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
