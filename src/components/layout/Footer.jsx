import React from "react";
import logo from "../../assets/icon/Cslogo.svg";
import CallIcon from "../../assets/icon/Call.svg";
import EmailIcon from "../../assets/icon/Email.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#E9E2D8] px-6 py-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-[#D8D0C5] pb-4">

          {/* Logo & Text */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Construction Saarthi" className="h-7" />
              <span className="font-bold text-lg text-[#2D2D2D]">
                ConstructionSaarthi
              </span>
            </div>

            <p className="text-sm text-[#5F5F5F]">
              Manage Every Construction Site Smarter
            </p>

            <p className="text-sm font-medium">
              Product By <span className="text-[#B02E0C]">TechifyHouse</span>
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={CallIcon} alt="Call" className="w-4 h-4" />
              <span className="text-sm font-medium text-[#2D2D2D]">
                +91 9737321120
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img src={EmailIcon} alt="Email" className="w-4 h-4" />
              <span className="text-sm font-medium text-[#2D2D2D]">
                contact@constructionsaarthi.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-4 text-center md:text-left">

          <p className="text-xs font-medium text-[#2D2D2D]">
            © 2025 GarageSaarthi. All rights reserved by{" "}
            <span className="text-[#B02E0C]">Techifyhouse.</span>
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-xs hover:text-[#B02E0C] transition">
              Privacy Policy
            </a>
            <a href="#" className="text-xs hover:text-[#B02E0C] transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
