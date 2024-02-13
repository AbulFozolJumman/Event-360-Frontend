import "./Plan.css";
import { FaCheck } from "react-icons/fa";

const Plan = () => {
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-[#ceedff] to-white px-5">
          <h2 className="text-[45px] font-medium text-center pt-[100px] pb-2">
            Ready to get started?
          </h2>
          <p className="text-[18px] text-center pb-[278px]">
            14 days unlimited free trial. No contract or credit card required.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-[35px] top-[-200px] relative px-5">
          <div className="max-w-[370px] shadow-md card pt-[44px] pb-6 px-[51px] rounded-xl bg-white">
            <h3 className="text-[23px] font-semibold mb-[6px] text">
              Starter Plan
            </h3>
            <div className="flex items-end">
              <p className="text-[51px] font-bold leading-none text">$11</p>
              <p className="font-semibold text">/month</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4 mt-[47px]">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text text">20,000 Visitors</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text text">Create Unlimited Widgets</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">CMS Integration</p>
            </div>
            <div className="flex items-center gap-[18px]">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">All Widget Types</p>
            </div>
            <button className="w-full btn bg-[#5A01CB] border border-[#5a01cb] mt-[130px] rounded-md py-4 text-white hover:bg-white hover:text-[#5A01CB] font-bold">
              Get this package
            </button>
          </div>
          <div className="max-w-[370px] shadow-md card pt-[44px] pb-6 px-[51px] rounded-xl bg-white">
            <h3 className="text-[23px] font-semibold mb-[6px] text">
              Average Plan
            </h3>
            <div className="flex items-end">
              <p className="text-[51px] font-bold leading-none text">$36</p>
              <p className="font-semibold text">/month</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4 mt-[47px]">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">50,000 Visitors</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">Create Unlimited Widgets</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">CMS Integration</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">All Widget Types</p>
            </div>
            <div className="flex items-center gap-[18px]">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">Integrations</p>
            </div>
            <button className="w-full btn bg-[#5A01CB] border border-[#5a01cb] mt-[90px] rounded-md py-4 text-white hover:bg-white hover:text-[#5A01CB] font-bold">
              Get this package
            </button>
          </div>
          <div className="max-w-[370px] shadow-md card pt-[44px] pb-6 px-[51px] rounded-xl bg-white">
            <h3 className="text-[23px] font-semibold mb-[6px] text">
              Pro Plan
            </h3>
            <div className="flex items-end">
              <p className="text-[51px] font-bold leading-none text">$50</p>
              <p className="font-semibold text">/month</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4 mt-[47px]">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">100,000 Visitors</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">Create Unlimited Widgets</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">CMS Integration</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">All Widget Types</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">Integrations</p>
            </div>
            <div className="flex items-center gap-[18px]">
              <FaCheck className="text-[#5a01cb] check" />
              <p className="text-[18px] text">Dedicated Manager</p>
            </div>
            <button className="w-full btn bg-[#5A01CB] border border-[#5a01cb] mt-12 rounded-md py-4 text-white hover:bg-white hover:text-[#5A01CB] font-bold">
              Get this package
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;
