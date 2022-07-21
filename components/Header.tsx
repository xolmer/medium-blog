import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="w-44 object-contain cursor-pointer" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="https://news-blog.sanity.studio/desk" className="cursor-pointer">
            About
          </Link>
          <Link href="https://news-blog.sanity.studio/desk" className="cursor-pointer">
            Contact
          </Link>
          <h3 className="text-white bg-purple-600 rounded-full px-4 py-1 cursor-pointer">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-purple-900">
        <Link href="https://news-blog.sanity.studio/desk">
          <h3 className="cursor-pointer">Sign In</h3>
        </Link>

        <Link href="https://news-blog.sanity.studio/desk">
          <h3 className="cursor-pointer border px-4 py-1 rounded-full border-purple-600">Get Started</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;
