"use client";

import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { NavbarMenu } from "./NavbarMenu/NavbarMenu";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarToggler } from "./NavbarToggler";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const menuID = `menu-${useId()}`;
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbar();

  return (
    <nav className="h-20 flex flex-col justify-center relative z-10 bg-white">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <Navbar.Logo />
          <Navbar.Toggler
            menuID={menuID}
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
          <Navbar.Menu id={menuID} isMobileMenuOpen={isMobileMenuOpen}>
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Home"
              href="/"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Finansowanie"
              href="/finansowanie"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Garansi"
              href="/garansi"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Mobil Tersedia"
              href="/mobil"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Sprzedaliśmy"
              href="/sprzedalismy"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Kontak"
              href="/kontak"
            />
            <Navbar.Menu.Item
              label="+62 882-0052-95050"
              href="https://api.whatsapp.com/send?phone=62882005295050&text=Assalamualaikum%20mas%20Ulil,%20Saya%20berminat%20menggunakan%20Jasa%20%20Pembuatan%20Website,%20bisa%20tolong%20dibantu?"
              button
              onClick={() => null}
            />
          </Navbar.Menu>
        </div>
      </Container>
    </nav>
  );
};

Navbar.Logo = NavbarLogo;
Navbar.Menu = NavbarMenu;
Navbar.Toggler = NavbarToggler;
