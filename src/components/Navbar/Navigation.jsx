"use client";

const Navigation = () => {
    return (
        /*  <div className=" w-full h-32 flex justify-center">
            <div className="w-1/3 flex justify-center items-center">
                {" "}
                <ul className="flex flex-row">
                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-black text-white px-5">
                        Zesan H.
                    </li>
                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-[#E5E5E6] px-5">Projects</li>
                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-[#E5E5E6] px-5">Linkedin</li>
                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-[#E5E5E6] px-5">E-mail</li>
                </ul>
            </div>
        </div> */

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#F5F5F5] rounded-box w-52"
                    >
                        <li className="mx-1 md:mx-2 py-3 my-2 text-center rounded-3xl bg-black text-white px-5">
                            Zesan H.
                        </li>
                        <li className="mx-1 md:mx-2 py-3 my-2 text-center rounded-3xl bg-[#E5E5E6] px-5">
                            Projects
                        </li>
                        <li className="mx-1 md:mx-2 py-3 my-2 text-center rounded-3xl bg-[#E5E5E6] px-5">
                            Linkedin
                        </li>
                        <li className="mx-1 md:mx-2 py-3 my-2 text-center rounded-3xl bg-[#E5E5E6] px-5">
                            E-mail
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl md:hidden ml-12">Zesan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-0 my-10 bg-[#F5F5F5] py-2 rounded-3xl">
                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-black text-white px-5 cursor-pointer">
                        Zesan H.
                    </li>

                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-[#E5E5E6] px-5 cursor-pointer">
                        Projects
                    </li>
                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-[#E5E5E6] px-5 cursor-pointer">
                        Linkedin
                    </li>
                    <li className="mx-1 md:mx-2 py-3 rounded-3xl bg-[#E5E5E6] px-5 cursor-pointer">
                        E-mail
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn hidden">Get started</a>
            </div>
        </div>
    );
};

export default Navigation;
