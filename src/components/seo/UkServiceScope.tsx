import {
  UK_SERVICE_SCOPE_DETAILS,
  UK_SERVICE_SCOPE_HEADING,
  UK_SERVICE_SCOPE_INTRO,
} from "@/lib/uk-scope";

type Props = {
  className?: string;
};

export function UkServiceScope({ className = "" }: Props) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-heading sm:text-3xl">
        {UK_SERVICE_SCOPE_HEADING}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-body">
        {UK_SERVICE_SCOPE_INTRO}
      </p>
      <ul className="mt-6 max-w-3xl space-y-4">
        {UK_SERVICE_SCOPE_DETAILS.map((paragraph) => (
          <li
            key={paragraph.slice(0, 40)}
            className="flex items-start gap-3 text-sm leading-relaxed text-body sm:text-base"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {paragraph}
          </li>
        ))}
      </ul>
    </div>
  );
}
