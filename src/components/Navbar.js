import React from "react";
import { Link } from "gatsby";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  return (
    <nav class="w-full  flex-wrap overflow-hidden">
      <Menu as="div" class="md:hidden bg-gray-700 text-white px-2 w-full py-2 ">
        <Menu.Button class="inline-flex w-full justify-left rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </Menu.Button>
        <Menu.Items class="divide-y-2">
          <Menu.Item as="div" class="bg-gray-600 text-white px-2 py-2 ">
            {({ active }) => (
              <Link
                class={`${
                  active ? "bg-blue-500 text-white" : "bg-gray-600 text-black"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                to="/"
              >
                <p class="pl-2  text-xl">Home</p>
              </Link>
            )}
          </Menu.Item>

          <Menu.Item as="div" class="bg-gray-600 text-white  px-2 py-2">
            {({ active }) => (
              <Link
                class={`${
                  active ? "bg-blue-500 text-white" : "bg-gray-600 text-black"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                to="/product"
              >
                <p class="pl-2  text-xl">Products</p>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item as="div" class="bg-gray-600 text-white  px-2 py-2">
            {({ active }) => (
              <Link
                class={`${
                  active ? "bg-blue-500 text-white" : "bg-gray-600 text-black"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                to="/career"
              >
                <p class="pl-2  text-xl">Career</p>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      <div class=" invisible md:visible items-center p-4 bg-gray-600 text-white text-2xl">
        <ul class=" navbar-nav flex flex-row pl-5 list-style-none mr-auto">
          <li class="nav-item pr-2">
            <Link class="nav-link text-2xl" to="/">
              EDNAM
            </Link>
          </li>
          <li class="nav-item px-2">
            <Link
              class="nav-link text-gray-500 text-xl hover:text-gray-700 focus:text-gray-700 p-0 "
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li class="nav-item pr-2">
            <Link
              class="nav-link text-gray-500 text-xl hover:text-gray-700 focus:text-gray-700 p-0"
              to="/career"
            >
              Careers
            </Link>
          </li>
          <li class="nav-item pr-2">
            <Link
              class="nav-link text-gray-500 text-xl hover:text-gray-700 focus:text-gray-700 p-0"
              to="/startup"
            >
              Startup Diaries
            </Link>
          </li>
          <li class="nav-item pr-2">
            <Link
              class="nav-link text-gray-500 text-xl hover:text-gray-700 focus:text-gray-700 p-0"
              to="/product"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
