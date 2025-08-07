import Link from "next/link";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import EnquiryForm from "@/components/EnquiryForm";

const Page = async () => {
  return (
    <section className="container mt-10 lg:mt-14 py-12 md:py-16 lg:py-20">
      <div className="">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-2 font-semibold text-blue-900 ">
          Haben Sie Fragen? Wir haben die Lösungskompetenz.
          </p>
          {/* <p className="mb-2 font-semibold text-blue-900 ">
            Have Questions? We’re Rooted in Solutions.
          </p> */}
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          Kontakt
          </h2>
          {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Contact Us
          </h2> */}
        </div>
        <div className=" grid md:grid-cols-2 gap-10 md:gap-0  md:mt-10">
          {/* left section */}
          <div className="flex flex-col px-4 sm:px-8 py-10">
            {/* address section */}

            <div className=" space-y-8 pb-4 flex flex-col text-muted-foreground">
              <p className="flex items-center gap-2">
                <FaLocationDot size={18} />

                <span className="mx-2 text-sm ">
                  Drüllerweg14, 47559, Kranenburg,
                  <br /> Germany
                </span>
              </p>
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={14} />
                <Link
                  href={"tel:+49 02826 91 50-0"}
                  className="flex gap-2  items-center
                  "
                >
                  <p className="mx-2 text-sm">+49 02826 91 50-0</p>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMail size={16} />
                <Link
                  href={"mailto:info@stauden-peters.de"}
                  className="inline-block gap-2  items-center "
                >
                  <span className="mx-2 text-sm">info@stauden-peters.de</span>
                </Link>
              </div>
            </div>

            {/* social icons */}

            <div className="flex gap-6 items-center mt-4 -mx-1.5 text-muted-foreground">
              <Link
                className="mx-1.5  transition-colors duration-150 transform hover:text-blue-600"
                href=""
                target="_blank"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
                className="mx-1.5  transition-colors duration-300 transform hover:text-blue-600"
                href=""
                target="_blank"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                className="mx-1.5 -400 transition-colors duration-300 transform hover:text-blue-600"
                href=""
                target="_blank"
              >
                <AiFillInstagram size={24} />
              </Link>

              <Link
                className="mx-1.5 transition-colors duration-300 transform hover:text-blue-600"
                href=""
                target="_blank"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* right section */}
          <div className="">
            <div className="w-full px-4 py-10 sm:px-8 mx-auto rounded-lg shadow-2xl max-w-xl shadow-gray-300/50">
              <h6 className="font-medium  pb-4 text-sm text-blue-900 text-center">
              Was möchten Sie fragen?
              </h6>
              {/* <h6 className="font-medium  pb-4 text-sm text-blue-900 text-center">
                What do you want to ask?
              </h6> */}

              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
