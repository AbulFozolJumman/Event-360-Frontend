const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between max-w-[1280px] h-24 mb-16 mx-auto">
        <h2 className="text-[32px] font-extrabold">
          Event
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE8900] to-[#5A01CB] pl-1">
            360
          </span>
        </h2>
        <ul className="flex gap-8">
          <li>
            <a className="font-medium" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-medium" href="#">
              About
            </a>
          </li>
          <li>
            <a className="font-medium" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
