import * as React from "react";
import ListItem from "./ListItem";
import { User } from "../interfaces";
import { useTranslation } from "next-i18next";

type Props = {
  title?: string;
};

const Header = ({ title }: Props) => {
  const { t } = useTranslation("common");
  return (
    <header className="h-10  p-2 bg-red-500">
      <span> {title} | {t('header.title')}</span>
    </header>
  );
};

export default Header;
