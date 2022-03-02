import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

type Props = {
  IconType: string;
  IconSize: string;
};

const IconList = {
  dashboard: "dashboard.svg",
};

const ToIcons = ({IconType,IconSize}:Props) => {
  return (
    <Image 
      src={"/./assets/dashboard.svg"}
      alt={IconType}
      width={500}
      height={500}
    />
  );
};

export default ToIcons;
