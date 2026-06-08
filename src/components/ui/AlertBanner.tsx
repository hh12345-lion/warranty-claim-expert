import Link from "next/link";

type AlertBannerProps = {
  children: React.ReactNode;
  href?: string;
  linkText?: string;
};

export function AlertBanner({ children, href, linkText }: AlertBannerProps) {
  return (
    <div
      className="border-b border-highlight/30 bg-highlight/10 px-4 py-3"
      role="alert"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
        <p className="flex-1 text-sm font-medium text-heading">{children}</p>
        {href && linkText && (
          <Link
            href={href}
            className="shrink-0 text-sm font-semibold text-highlight underline underline-offset-2 hover:text-highlight/80"
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}
