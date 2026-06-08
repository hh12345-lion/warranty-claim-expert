"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { NavDropdown as NavDropdownType } from "@/lib/navigation";

type Props = {
  item: NavDropdownType;
  mobile?: boolean;
  onNavigate?: () => void;
};

export function NavDropdown({ item, mobile = false, onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const id = useId();
  const menuId = `${id}-menu`;

  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + "/") ||
    item.children.some(
      (c) => pathname === c.href || pathname.startsWith(c.href + "/")
    );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (mobile) {
    return (
      <li>
        <button
          type="button"
          className="flex min-h-[44px] w-full items-center justify-between rounded-[var(--radius-sm)] px-3 text-sm font-medium text-body hover:bg-section-alt"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={menuId}
        >
          {item.label}
          <span
            className={`text-accent transition ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            &#9660;
          </span>
        </button>
        {open && (
          <ul
            id={menuId}
            className="ml-3 mt-1 max-h-[50vh] space-y-1 overflow-y-auto border-l border-border pl-3"
          >
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className="flex min-h-[44px] items-center rounded-[var(--radius-sm)] px-3 text-sm text-body hover:bg-section-alt"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 text-sm font-medium transition hover:text-accent ${
          isActive ? "text-accent" : "text-body"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
      >
        {item.label}
        <span
          className={`text-xs transition ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          &#9660;
        </span>
      </Link>

      {/* pt-2 bridge keeps dropdown open while moving pointer from trigger to menu */}
      <div
        id={menuId}
        role="menu"
        className={`absolute left-0 top-full z-50 min-w-[240px] max-w-[min(100vw-2rem,320px)] pt-2 transition-all duration-150 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-h-[70vh] overflow-y-auto rounded-[var(--radius-card)] border border-border bg-white py-2 card-shadow">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className={`block px-4 py-2.5 text-sm transition hover:bg-section-alt ${
                pathname === child.href ? "font-medium text-accent" : "text-body"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
