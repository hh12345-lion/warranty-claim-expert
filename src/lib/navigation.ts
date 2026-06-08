import { SERVICES, serviceHref } from "@/data/services";
import { DISPUTE_TYPES } from "@/data/dispute-types";
import { CASE_TYPES } from "@/data/case-types";
import { GUIDES } from "@/data/guides";

export type NavLink = { href: string; label: string };

export type NavDropdown = {
  label: string;
  href: string;
  children: NavLink[];
};

export const SERVICE_NAV_LINKS: NavLink[] = [
  { href: "/services", label: "All Services" },
  ...SERVICES.map((s) => ({
    href: serviceHref(s.slug),
    label: s.shortTitle,
  })),
];

export const DISPUTE_TYPE_NAV_LINKS: NavLink[] = [
  { href: "/dispute-types", label: "All Dispute Types" },
  ...DISPUTE_TYPES.map((d) => ({
    href: d.href,
    label: d.shortTitle,
  })),
];

export const CASE_TYPE_NAV_LINKS: NavLink[] = [
  { href: "/case-types", label: "All Case Types" },
  ...CASE_TYPES.map((c) => ({
    href: `/case-types/${c.slug}`,
    label: c.title,
  })),
];

export const RESOURCES_NAV_LINKS: NavLink[] = [
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

export const GUIDE_NAV_LINKS: NavLink[] = GUIDES.map((g) => ({
  href: `/guides/${g.slug}`,
  label: g.title,
}));

export const NAV_DROPDOWNS: NavDropdown[] = [
  {
    label: "Services",
    href: "/services",
    children: SERVICE_NAV_LINKS,
  },
  {
    label: "Dispute Types",
    href: "/dispute-types",
    children: DISPUTE_TYPE_NAV_LINKS,
  },
  {
    label: "Case Types",
    href: "/case-types",
    children: CASE_TYPE_NAV_LINKS,
  },
  {
    label: "Resources",
    href: "/guides",
    children: RESOURCES_NAV_LINKS,
  },
];

export const NAV_STANDALONE_LINKS: NavLink[] = [
  { href: "/how-warranty-claims-work", label: "How Claims Work" },
];
