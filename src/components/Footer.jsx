import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import emireqLogo from '../assets/logo.png';

const footerLinks = {
  Products: ['Tokenization', 'Marketplace', 'How it works', 'Startups'],
  Resources: ['Learn & Explore', 'Insights', 'Investment guide', 'FAQ'],
  Company: ['About us', 'Careers', 'Press & Media', 'Blog', 'Contact Us'],
  Support: ['Help Center', 'Security & Trust', 'Disclaimer'],
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-border mt-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-14">
        {/* Top section: Logo + Link columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Logo & Tagline */}
          <div className="lg:w-[240px] shrink-0">
            <img src={emireqLogo} alt="Emireq" className="h-8 mb-4 cursor-pointer" />
            <p className="text-[15px] sm:text-[16px] text-[#6b7280] leading-[1.7] max-w-[220px]">
              Commodo nec mi id ullamcorper vitae augue neque dis.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {[FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e5e7eb] text-[#6b7280] hover:text-[#1a56db] hover:border-[#1a56db] transition-colors cursor-pointer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[15px] sm:text-[16px] font-semibold text-[#1a2332] mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[15px] sm:text-[16px] text-[#6b7280] hover:text-[#1a2332] transition-colors cursor-pointer"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1a2332]">Stay in the loop</h3>
              <p className="text-[15px] sm:text-[16px] text-[#6b7280] mt-1.5">
                Subscribe to our newsletter for the latest crypto insights and market updates.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-[300px] px-5 py-2.5 border border-[#e5e7eb] rounded-xl bg-[#f9fafb] text-[15px] sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#f5a623]/40 focus:border-[#f5a623] placeholder:text-[#9ca3af]"
              />
              <button className="px-6 py-2.5 bg-[#f5a623] hover:bg-[#e69a1a] text-white text-[15px] sm:text-[16px] font-semibold rounded-xl transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[14px] sm:text-[15px] text-[#6b7280]">© 2025 EMIREQ. All rights reserved.</p>
          <div className="flex items-center gap-5 sm:gap-6">
            <a href="#" className="text-[14px] sm:text-[15px] text-[#6b7280] hover:text-[#1a2332] transition-colors cursor-pointer underline underline-offset-2">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px] sm:text-[15px] text-[#6b7280] hover:text-[#1a2332] transition-colors cursor-pointer underline underline-offset-2">
              Terms of Service
            </a>
            <a href="#" className="text-[14px] sm:text-[15px] text-[#6b7280] hover:text-[#1a2332] transition-colors cursor-pointer underline underline-offset-2">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
