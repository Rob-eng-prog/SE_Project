import { useEffect, useState } from "react";
import Link from "next/link";

const _logout = () => {
  localStorage.clear();
  location.reload();
};
const Navbar = () => {
  const [_id, setId] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("Current_Id");
    setId(user);
  }, []);
  return (
    <nav className="flex flex-row justify-around bg-red-400 text-gray-300">
      <h1 className="p-2 m-2 text-3xl text-white">
        {" "}
        Platts <span className="text-red-800 italic">Connect</span>
      </h1>
      <ul className="flex justify-self-end">
        <li className="p-2 m-2 hover:text-white">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="p-2 m-2 hover:text-white">
          <Link href="/account">
            <a>Account</a>
          </Link>
        </li>
        <li className="p-2 m-2 hover:text-white">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {_id ? (
          <li className="p-2 m-2 text-white ">
            <Link href="/">
              <a>
                <button
                  className="hover:bg-red-800 rounded-lg px-4 py-1 bg-red-600"
                  onClick={_logout}
                >
                  Logout
                </button>
              </a>
            </Link>
          </li>
        ) : (
          <>
            <li className="p-2 m-2 hover:text-white">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li className="p-2 m-2 text-white ">
              <Link href="/signUp">
                <a>
                  <button className="hover:bg-red-800 rounded-lg px-4 py-1 bg-red-600">
                    SignUp
                  </button>
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
