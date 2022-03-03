import * as React from "react";
import { BsMoon, BsBell } from "react-icons/bs";

type Props = {
  title?: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className="p-2 flex flex-row justify-between font-Oxygen">
      <div className="p-2">
        <span className="text-xl font-bold px-4"> {title}</span>
      </div>
      <div className="flex flex-row justify-center p-2">
        <div className="input-group relative flex flex-row gap-3 items-stretch w-full justify-centre">
          <BsMoon className="w-7 h-7 cursor-pointer"></BsMoon>
          <BsBell className="w-7 h-7 cursor-pointer"></BsBell>
          <div className="flex-shrink-0 px-2 cursor-pointer">
            <img
              className="w-8 h-8 rounded-full  object-cover border-2 ring-2 ring-offset-2 ring-zinc-900 ring-opacity-80"
              src="defaultprofile.png"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
