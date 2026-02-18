import Link from "next/link";

export default function CoachingFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="coaching-container coaching-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/coaching" className="inline-block mb-4">
              <span className="font-display text-xl font-bold tracking-tight">
                Leverage<span className="text-amber">\</span>Strategies
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Systems to Scale You
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/coaching"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching/book"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/coaching/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Custom AI Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Strategy Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Custom Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Leverage Strategies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/coaching/book"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Schedule a Call
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Toronto, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Leverage Strategies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
