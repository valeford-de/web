import Link from "next/link";

const navigation = {
  strategy: [
    { name: "Investment Strategy", href: "/strategy" },
    { name: "Platform Capabilities", href: "/platform" },
    { name: "Market Analysis", href: "/insights/market-analysis" },
    { name: "Due Diligence", href: "/strategy/due-diligence" },
  ],
  ventures: [
    { name: "Portfolio Companies", href: "/ventures" },
    { name: "Active Investments", href: "/ventures/active" },
    { name: "Exit Strategies", href: "/ventures/exits" },
    { name: "Performance Metrics", href: "/ventures/performance" },
  ],
  insights: [
    { name: "Market Research", href: "/insights" },
    { name: "Industry Reports", href: "/insights/reports" },
    { name: "Investment Thesis", href: "/insights/thesis" },
    { name: "Thought Leadership", href: "/insights/leadership" },
  ],
  company: [
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Imprint", href: "/legal/imprint" },
    { name: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-wide py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-black text-white tracking-tight"
            >
              VALEFORD
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-300 max-w-md">
              A venture studio building and investing in digital businesses
              designed for long-term value creation in the mobile-first economy.
            </p>

            {/* Contact Information */}
            <div className="mt-8 space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-2">
                  Contact
                </h4>
                <p className="text-sm text-gray-300">hello@valeford.de</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-2">
                  Location
                </h4>
                <p className="text-sm text-gray-300">Remote Team • Germany</p>
              </div>
            </div>
          </div>

          {/* Strategy */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
              Strategy
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.strategy.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
              Ventures
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.ventures.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
              Insights
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.insights.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-4">
                Legal & Compliance
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:text-right">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-4">
                Company Information
              </h3>
              <p className="text-xs text-gray-400 leading-5">
                Valeford UG (haftungsbeschränkt) is a German limited liability
                company. All business activities are conducted in accordance
                with German law.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Valeford UG
                (haftungsbeschränkt). All rights reserved.
              </p>
              <p className="text-xs text-gray-400">Registered in Germany</p>
            </div>

            <div className="mt-4 lg:mt-0">
              <Link
                href="/legal/imprint"
                className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
              >
                Imprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
