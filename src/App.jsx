import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Button from "./components/common/Button";

// Assets
import siteImage from "./assets/icon/Sitee.svg";
import handImage from "./assets/icon/Hand.svg";
import calcIcon from "./assets/icon/Calculation.svg";
import inventoryIcon from "./assets/icon/Inventory.svg";
import launchingImage from "./assets/icon/Launching.svg";
import recedencyImage from "./assets/icon/Recedency.svg";
import calIcon from "./assets/icon/C.svg";
import GenIcon from "./assets/icon/G.svg";
import TracIcon from "./assets/icon/T.svg";
import DasIcon from "./assets/icon/D.svg";
import AeroIcon from "./assets/icon/Aero.svg";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative px-4 pt-4 md:pt-0">
          <div
            className="
      max-w-7xl mx-auto
      grid grid-cols-1 lg:grid-cols-2
      bg-[#FBF7F2]
      rounded-2xl
      border border-[#E9E2D84D]
      overflow-hidden
    "
          >
            {/* LEFT CONTENT */}
            <div
              className="
        px-6 md:px-10
        pt-8 md:pt-11
        pb-8 md:pb-12
        flex flex-col justify-center
      "
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E9E2D8] rounded-full text-xs font-semibold w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
                Product by <span className="text-[#B02E0C]">TechifyHouse</span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Manage Every <br />
                Construction Site Smarter
                <span className="block text-[#B02E0C] text-base md:text-lg mt-3">
                  – From One Powerful Dashboard
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 text-sm max-w-xl leading-relaxed text-[#4A4A4A]">
                Plan projects, track materials, manage labor, control finances,
                and calculate costs — all in one simple, AI-powered construction
                management platform built for real site work.
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Button
                  variant="primary"
                  className="text-base font-medium"
                  icon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  }
                >
                  Join Waitlist
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 md:grid-cols-4">
                {/* 1 */}
                <div>
                  <h3 className="text-xl font-bold">90%</h3>
                  <p className="text-xs uppercase tracking-wider mt-1">
                    Time Saved
                  </p>
                </div>

                {/* 2 → MOBILE + DESKTOP BORDER */}
                <div className="border-l pl-4 md:border-l border-[#E5DED5]">
                  <h3 className="text-xl font-bold">Zero</h3>
                  <p className="text-xs uppercase tracking-wider mt-1">
                    Manual Errors
                  </p>
                </div>

                {/* 3 */}
                <div className="md:border-l md:pl-4 border-[#E5DED5]">
                  <h3 className="text-xl font-bold">AI-First</h3>
                  <p className="text-xs uppercase tracking-wider mt-1">
                    Intelligence
                  </p>
                </div>

                {/* 4 → MOBILE + DESKTOP BORDER */}
                <div className="border-l pl-4 md:border-l border-[#E5DED5]">
                  <h3 className="text-xl font-bold">India</h3>
                  <p className="text-xs uppercase tracking-wider mt-1">
                    Built For
                  </p>
                </div>
              </div>
            </div>

            {/* DESKTOP IMAGE ONLY */}
            <div className="hidden lg:flex justify-end items-end pr-6">
              <img
                src={handImage}
                alt="Construction App Interface"
                className="w-[480px] object-contain"
              />
            </div>
          </div>

          {/* MOBILE + TABLET IMAGE (SEPARATE, BELOW CONTAINER) */}
          <div className="lg:hidden mt-6 flex justify-center">
            <img
              src={handImage}
              alt="Construction App Interface"
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Heading */}
            <div className="text-center space-y-2">
              {/* Badge */}
              <div
                className="
      inline-flex items-center gap-2
      px-4 py-1
      bg-[#E9E2D8] rounded-full
      text-xs font-semibold
      max-[380px]:text-[9px]
      max-[380px]:px-3
    "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
                Shift from generic “AI” claims to real, site-level value.
              </div>

              {/* Heading */}
              <h2
                className="
      font-semibold
      text-2xl md:text-3xl
      max-[360px]:text-lg
      leading-snug
    "
              >
                AI That Actually Works on{" "}
                <span className="text-[#C4431B]">Construction Sites</span>
              </h2>

              {/* Paragraph */}
              <p
                className="
      text-sm
      max-w-xl mx-auto
      max-[360px]:text-xs
      leading-relaxed
    "
              >
                Built with practical, next-gen AI to simplify planning, reduce
                errors, and improve decision-making across every stage of
                construction.
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* LEFT IMAGE */}
              <div className="relative flex-1 flex justify-center lg:justify-start">
                <img
                  src={siteImage}
                  alt="Site Workers"
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 space-y-5 w-full lg:pr-60">
                {/* ITEM 1 */}
                <div className="flex flex-col md:flex-row items-start gap-4 border-b border-[#E5DED5] pb-4">
                  <div className="w-10 h-10 flex items-center justify-start shrink-0">
                    <img src={calIcon} alt="Calculator" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      AI Construction Calculator
                    </h3>
                    <p className="text-xs leading-relaxed">
                      Get accurate material quantities, cost estimates, and
                      timelines instantly — reducing guesswork and costly
                      overruns before work even begins.
                    </p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="flex flex-col md:flex-row items-start gap-4 border-b border-[#E5DED5] pb-4">
                  <div className="w-10 h-10 flex items-center justify-start shrink-0">
                    <img src={GenIcon} alt="Document" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      AI Document Generator
                    </h3>
                    <p className="text-xs leading-relaxed">
                      Create professional quotations, contracts, BOQs, and site
                      reports in minutes — standardized, error-free, and ready
                      to share.
                    </p>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="flex flex-col md:flex-row items-start gap-4 border-b border-[#E5DED5] pb-4">
                  <div className="w-10 h-10 flex items-center justify-start shrink-0">
                    <img src={TracIcon} alt="Tracking" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      Labour & Finance Tracking
                    </h3>
                    <p className="text-xs leading-relaxed">
                      Track attendance, wages, and daily expenses automatically
                      — giving you complete visibility into manpower and cash
                      flow.
                    </p>
                  </div>
                </div>

                {/* ITEM 4 */}
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-start shrink-0">
                    <img src={DasIcon} alt="Dashboard" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      AI Insights Dashboard
                    </h3>
                    <p className="text-xs leading-relaxed">
                      Identify delays, control budgets, and make smarter
                      decisions with real-time insights based on your project
                      data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="impact" className="px-0">
          <div className="max-w-7xl mx-auto space-y-10 py-10 px-6 bg-[#F3F3F3] border-2 border-[#E9E2D84D]">
            {/* Heading */}
            <div className="text-center space-y-2">
              <div className=" inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs font-semibold whitespace-nowrap max-[360px]:text-[10px] max-[360px]:px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
                Clear positioning + local relevance + authority
              </div>

              <h2 className=" font-semibold pt-4 text-xl sm:text-2xl md:text-5xl whitespace-nowrap">
                Why{" "}
                <span className="text-[#C4431B]">Construction Saarthi?</span>
              </h2>

              <p className="text-sm max-w-2xl mx-auto">
                India's first AI-powered assistant designed specifically for
                contractors & builders.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col">
                <span className="inline-block w-fit px-3 py-1 mb-2 text-[10px] font-normal rounded-full bg-[#B02E0C] text-white">
                  Real-time project status
                </span>

                <h3 className="text-2xl font-medium mb-4">Smart Dashboard</h3>

                <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
                  Track projects, expenses, materials, and progress in real time
                  - without calling the site supervisor or opening spreadsheets.
                </p>

                <div className="mt-auto">
                  <img
                    src={recedencyImage}
                    alt="Dashboard Preview"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col">
                <span className="inline-block w-fit px-3 py-1 mb-2 text-[10px] font-normal rounded-full bg-[#B02E0C] text-white">
                  Material & cost estimation
                </span>

                <h3 className="text-2xl font-medium text-[#2D2D2D] mb-4">
                  AI Powered Calculator
                </h3>

                <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
                  Calculate material quantities, costs, and timelines instantly
                  using AI-powered construction formulas - reducing errors
                  before work begins.
                </p>

                <div className="mt-auto flex justify-center">
                  <img
                    src={calcIcon}
                    alt="Calculator Preview"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col">
                <span className="inline-block w-fit px-3 py-1 mb-2 text-[10px] font-normal rounded-full bg-[#B02E0C] text-white">
                  Live material tracking
                </span>

                <h3 className="text-2xl font-medium text-[#2D2D2D] mb-4">
                  Inventory Management
                </h3>

                <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
                  Monitor material usage, stock levels, and site inventory in
                  real time - preventing shortages, wastage, and theft.
                </p>

                <div className="mt-auto">
                  <img
                    src={inventoryIcon}
                    alt="Inventory Preview"
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Launching Soon Section */}
        <section id="waitlist" className="py-10 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Heading */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs font-medium whitespace-nowrap max-[360px]:text-[10px] max-[360px]:px-3 ">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
                Limited Early Access • Rolling Out Gradually
              </div>

              <h2 className=" font-semibold pt-4 text-3xl md:text-4xl max-[375px]:text-xl max-[320px]:text-lg leading-snug">
                <span className="text-[#B02E0C]">Launching Soon</span> for
                Indian Contractors
              </h2>

              <p className=" max-w-2xl mx-auto text-base max-[375px]:text-xs max-[320px]:text-[10px] leading-relaxed">
                Be among the first to manage construction sites with AI —
                faster, smarter, and simpler.
              </p>
            </div>

            {/* Main Card */}
            <div className="relative flex flex-col lg:flex-row items-stretch">
              {/* LEFT : IMAGE CARD */}
              <div className="relative flex-1 min-h-[420px] rounded-[28px] overflow-hidden hidden lg:block">
                <img
                  src={launchingImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Text */}
                <div className="relative z-10 h-full px-8 md:px-14 flex flex-col justify-center">
                  <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                    Join the Early Access Waitlist
                  </h2>
                  <p className="text-gray-200 max-w-md text-sm md:text-base">
                    We’ll notify you as soon as Construction Saarthi is
                    available in your area.
                  </p>
                </div>
              </div>

              {/* RIGHT : FLOATING FORM (OUTSIDE IMAGE) */}
              <div className="relative lg:-ml-32 flex items-center px-4 lg:px-0 mt-8 lg:mt-0">
                <div
                  className=" relative w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-md bg-[#EBEAE8] rounded-2xl shadow-sm border border-[#EBEAE8] px-6 py-8 md:px-8 md:py-10 overflow-hidden mx-auto"
                >
                  <form>
                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-black font-medium">
                          First Name
                        </label>
                        <input className="w-full border-b border-gray-300 mb-4 focus:border-[#C4431B] outline-none text-sm bg-transparent" />
                      </div>
                      <div>
                        <label className="text-sm text-black font-medium">
                          Last Name
                        </label>
                        <input className="w-full border-b border-gray-300 mb-4 focus:border-[#C4431B] outline-none text-sm bg-transparent" />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm text-black font-medium">
                        Email address
                      </label>
                      <input className="w-full border-b border-gray-300 mb-4 focus:border-[#C4431B] outline-none text-sm bg-transparent" />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm text-black font-medium">
                        Message
                      </label>
                      <textarea
                        rows="1"
                        placeholder="Write your message..."
                        className="w-full border-b border-gray-300 mt-1 focus:border-[#C4431B] outline-none text-sm resize-none bg-transparent placeholder:text-gray-400"
                      />
                    </div>

                    {/* Button */}
                    <div className="relative mt-10 flex justify-end">
                      <img
                        src={AeroIcon}
                        alt="Arrow"
                        className="hidden lg:block absolute right-40"
                      />

                      <Button
                        variant="primary"
                        className="px-6 relative z-10"
                        icon={
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        }
                      >
                        Join Waitlist
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
