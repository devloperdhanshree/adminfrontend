// AdminFooter.jsx
import React from "react";
import { FiServer } from "react-icons/fi";

const AdminFooter = () => {
  return (
    <footer className="bg-white border-t mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        {/* Left: System Status */}
        <div className="flex items-center mb-2 md:mb-0">
          <FiServer className="w-5 h-5 mr-2 text-green-500" />
          <span>System Status: <span className="font-medium text-gray-800">Online</span></span>
        </div>

        {/* Center: Copyright */}
        <div className="text-center mb-2 md:mb-0">
          © 2026 <span className="font-semibold text-gray-800">ACORE IT HUB PVT. LTD.</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex space-x-4">
          <a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="/support" className="hover:text-blue-600 transition-colors">Support Docs</a>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
