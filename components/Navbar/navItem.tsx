import * as React from "react";
import ToIcons from "../Icons";

type Props = {
  title?: string;
};

interface iNavItem {
  src: string;
  icon: React.ReactNode;
}

const TestJson: Array<iNavItem> = [
  {
    src: "/",
    icon: <ToIcons />,
  },
  {
    src: "/about",
    icon: (
      <svg
        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
      </svg>
    ),
  },
  {
    src: "/users",
    icon: (
      <svg
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
];

const NavItem = ({ title }: Props) => {
  return (
    <ul className="space-y-2">
      {TestJson.map((item) => (
        <>
          <li>
            <a
              href={item.src}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.icon}
              <span className="flex-1 ml-3 whitespace-nowrap">Peformance</span>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span>
            </a>
          </li>
        </>
      ))}

      <li>
        <a
          href="#"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
         <ToIcons IconType = {"dashboard"} IconSize = {"sm"} />
          <span className="flex-1 ml-3 whitespace-nowrap">Notifications</span>
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
            3
          </span>
        </a>
      </li>
    </ul>
  );
};

export default NavItem;
