"use client";

import { Fragment, useState } from "react";
import Logo from "./shared/Logo";
import { Clear, Menu, ProfileCircle, SearchNormal } from "./shared/svgs";
import Button from "./shared/ui-kit/Button";
import NavLink from "./shared/ui-kit/NavLink";

const navItems = [
  { name: "خانه", href: "/" },
  { name: "طراحی سایت", href: "#" },
  { name: "کمپین‌های بازاریابی و تبلیغاتی", href: "#" },
  { name: "اتوماسیون و بازاریابی", href: "#" },
  { name: "تولید محتوا", href: "#" },
  { name: "سئو", href: "#" },
  { name: "تماس با ما", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <header className="sticky top-0 z-50 w-full border-b border-white-02 bg-white-01 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between md:justify-around px-4">
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu />
            </Button>
            <Logo />
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <SearchNormal />
            </Button>

            <Button variant="outline" size="icon">
              <ProfileCircle />
            </Button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-50 transition ${isOpen
          ? "pointer-events-auto bg-black/40 opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${isOpen
            ? "translate-x-0"
            : "translate-x-full"
            }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-100 px-4">
            <Logo />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              <Clear />
            </Button>
          </div>
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 hover:bg-gray-100"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </Fragment>
  );
}
