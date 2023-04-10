

const Navbar = () => {
    return (
        <nav className="sticky top-0 flex w-full items-center justify-between bg-neutral-100 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
    
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent3"
          data-te-collapse-item>
          <a className="text-xl text-black" href="#">Workflows</a>
        </div>
      </div>
    </nav>
      )
}

export default Navbar