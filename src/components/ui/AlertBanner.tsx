import Link from "next/link";

type AlertBannerProps = {
  children: React.ReactNode;
  href?: string;
  linkText?: string;
};

export function AlertBanner({ children, href, linkText }: AlertBannerProps) {
  return (
    <div
      className="border-b border-border bg-section-alt px-4 py-3"
      role="alert"
    >
      <div className="page-wrap flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
        <p className="flex-1 border-l-2 border-accent pl-3 text-sm font-medium text-heading">
          {children}
        </p>
        {href && linkText && (
          <Link
            href={href}
            className="shrink-0 text-sm font-semibold text-accent underline underline-offset-2 transition hover:text-accent-hover"
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}
