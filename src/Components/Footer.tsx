 
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          className="
            grid grid-cols-2 gap-x-6 gap-y-10
            py-10
            sm:grid-cols-2 sm:gap-x-10
            md:py-12
            lg:grid-cols-4 lg:gap-12
            lg:py-14
          "
        >
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-8 w-auto sm:h-9"
            />

            <p
              className="
                mt-4 max-w-[280px]
                text-xs leading-5
                text-gray-400
                sm:text-[13px]
                lg:max-w-[260px]
              "
            >
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div
              className="
                mt-5 flex flex-wrap gap-x-5 gap-y-2
                text-xs font-medium text-gray-500
              "
            >
              <a
                href="#"
                className="transition-colors hover:text-purple-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition-colors hover:text-purple-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition-colors hover:text-purple-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-gray-400">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-gray-400">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-gray-400">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-purple-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            flex flex-col gap-4
            border-t border-gray-100
            py-5
            text-[10px] text-gray-400
            sm:flex-row sm:items-center sm:justify-between
            sm:text-[11px]
          "
        >
          <p className="text-center sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <a
              href="#"
              className="transition-colors hover:text-purple-600"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-purple-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
