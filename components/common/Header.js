/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import DefAvatar from "../users/avatar";
import classNames from "@/utils/classNames";



//HEADER SETUP
const logoUrl = "/logo.png";
const navigation = {
  categories: [],
  pages: [{ name: "Creadores", href: "/owners" }],
};

const Header = () => {
  const { data: session } = useSession();
  //this is the random avatar generator

  // console.log(session);
  return (
    <Popover className="relative bg-gen-rosita">
      <div
        className="absolute inset-0 shadow z-20 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative h-[90px] z-20">
        {/* DESKTOP */}
        <div className="max-w-7xl mx-auto flex justify-around items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          {session ? (
            <>
                <div className="flex justify-around w-screen items-center">
              <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-offset-2  focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/user/profile">
                            <a
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Mi perfil
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                             <Menu.Item>
         {({ active }) => (
           <div
             className={classNames(
               active ? "bg-gray-100" : "",
               "block px-4 py-2 text-sm text-black cursor-pointer"
             )}
             onClick={() => signOut()}
          >
            Salir
           </div>
    )}
       </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Link href="/user/profile">
                  <a className="left-4 top-4 p-2 rounded-full">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={
                        session.user.image
                          ? session.user.image
                          : `https://avatars.dicebear.com/api/micah/${session.user.email}.svg?background=%23ffffff`
                      }
                      alt="Avatar"
                      aria-hidden="true"
                    />
                  </a>

                </Link>
              <Link href="/">
                  <a className="left-4 top-4 p-2 rounded-full">
                    <img
                      className="h-12 w-12"
                      src={logoUrl}
                      alt="Logo"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
                </div>
            </>
          ) : (
            <>
             
              <div className="flex justify-around w-screen items-center">
              <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-offset-2  focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/auth/signin">
                            <a
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Iniciar sesión
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link href="/auth/signup">
                            <a
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Registrarse
                            </a>
                          </Link>
                        )}
                      </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              <Link href="/">
                  <a className="left-4 top-4 p-2 rounded-full">
                    <img
                      className="h-12 w-12"
                      src={logoUrl}
                      alt="Logo"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
             
                
               



              </div>
                              </>

               
              
          )}
        </div> 
      </div>
    </Popover>
  );
};

export default Header;

// <Menu as="div" className="ml-3 relative">
//   <div>
//     <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-offset-2  focus:ring-white">
//       <span className="sr-only">Open user menu</span>
//       {session.user.image ? (
//         <img
//           className="h-8 w-8 rounded-full"
//           src={session.user.image}
//           alt=""
//         />
//       ) : (
//         <img
//           className="h-8 w-8 rounded-full"
//           src={`https://avatars.dicebear.com/api/micah/${session.user.email}.svg?background=%23ffffff`}
//           alt=""
//         />
//       )}
//     </Menu.Button>
//   </div>
//   <Transition
//     as={Fragment}
//     enter="transition ease-out duration-100"
//     enterFrom="transform opacity-0 scale-95"
//     enterTo="transform opacity-100 scale-100"
//     leave="transition ease-in duration-75"
//     leaveFrom="transform opacity-100 scale-100"
//     leaveTo="transform opacity-0 scale-95"
//   >
//     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
//       <Menu.Item>
//         {({ active }) => (
//           <Link href="/user/profile">
//             <a
//               className={classNames(
//                 active ? "bg-gray-100" : "",
//                 "block px-4 py-2 text-sm text-white"
//               )}
//             >
//               Mi Cuenta
//             </a>
//           </Link>
//         )}
//       </Menu.Item>

//       {session.user.roles.includes("admin") && (
//         <Menu.Item>
//           {({ active }) => (
//             <Link href="/admin/dashboard">
//               <a
//                 className={classNames(
//                   active ? "bg-gray-100" : "",
//                   "block px-4 py-2 text-sm text-gray-700"
//                 )}
//               >
//                 Admin Dashboard
//               </a>
//             </Link>
//           )}
//         </Menu.Item>
//       )}

//       <Menu.Item>
//         {({ active }) => (
//           <div
//             className={classNames(
//               active ? "bg-gray-100" : "",
//               "block px-4 py-2 text-sm text-white cursor-pointer"
//             )}
//             onClick={() => signOut()}
//           >
//             Salir
//           </div>
//         )}
//       </Menu.Item>
//     </Menu.Items>
//   </Transition>
// </Menu>
