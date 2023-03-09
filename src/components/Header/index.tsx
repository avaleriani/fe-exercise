import React from "react";
import { HeaderStyled } from "./styled";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/">
        <HeaderStyled>
          <h1>Movie List App</h1>
        </HeaderStyled>
      </Link>
    </>
  );
};
export default Header;
