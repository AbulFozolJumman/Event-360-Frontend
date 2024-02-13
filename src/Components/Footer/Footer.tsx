import { FaArrowRight, FaEuroSign, FaGlobe } from "react-icons/fa";
import { RxAccessibility } from "react-icons/rx";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111617] pt-12 pb-9">
        <div className="max-w-[1280px] px-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 items-start gap-8 md:gap-12">
            <div>
              <h2 className="text-[32px] font-extrabold text-white leading-none">
                Event
                <span className="text-transparent pl-2 bg-clip-text bg-gradient-to-r from-[#FE8900] to-[#5A01CB]">
                  360
                </span>
              </h2>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-6">
                Product
              </h3>
              <div>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Pricing
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Overview
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Browse
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Accessibility
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-6">
                Solutions
              </h3>
              <div>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Brainstorming
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Ideation
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Wireframing
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Research
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-6">
                Resources
              </h3>
              <div>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Help Center
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Blog
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Tutorials
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  FAQs
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-6">
                Support
              </h3>
              <div>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Contact Us
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Developers
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Documentation
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Integrations
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-6">
                Company
              </h3>
              <div>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  About
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Press
                </a>
                <a className="text-[#E2E8F0] block mb-6" href="#">
                  Events
                </a>
                <a
                  className="text-[#E2E8F0] mb-6 flex items-center gap-2"
                  href="#"
                >
                  Request Demo
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <hr className="border mb-4 border-[#334155]" />
          <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
            <p className="text-center text-[16px] text-[#E2E8F0]">
              @ 2023. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a className="text-[#E2E8F0]" href="#">
                Terms
              </a>
              <a className="text-[#E2E8F0]" href="#">
                Privacy
              </a>
              <a className="text-[#E2E8F0]" href="#">
                Contact
              </a>
              <a className="text-[#E2E8F0] flex items-center gap-2" href="#">
                <FaGlobe />
                EN
              </a>
              <a className="text-[#E2E8F0] flex items-center gap-2" href="#">
                <FaEuroSign />
                EUR
              </a>
              <a className="text-[#E2E8F0] text-[24px]" href="#">
                <RxAccessibility />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
