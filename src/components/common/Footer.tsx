import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-base text-black py-8 mt-auto border-t border-beige-dark">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            © {currentYear} My App. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          {/* Note: In Next.js, always use <Link> instead of <a> for internal pages */}
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
        </nav>

      </div>
    </footer>
  );
}