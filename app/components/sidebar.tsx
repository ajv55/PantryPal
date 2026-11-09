import { FaLeaf } from "react-icons/fa";
import { FaHouseCrack } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";

const links = [
  { href: "#overview", label: "Overview", Icon: FaHouseCrack },
  { href: "#pantry", label: "Pantry", Icon: MdOutlineFoodBank },
  { href: "#shopping", label: "Shopping", Icon: GiShoppingCart },
];

export default function Sidebar() {
  return (
    <header className="border-b border-border bg-surface p-4 lg:sticky lg:top-0 lg:h-dvh lg:self-start lg:overflow-y-auto lg:border-b-0 lg:border-r lg:p-5">
      <div className="flex items-center gap-2 text-2xl font-bold text-brand-strong">
        <FaLeaf aria-hidden="true" />
        <span>PantryPal</span>
      </div>
      <p className="mt-1 text-sm text-muted">Know what you have. Buy what you need.</p>

      <nav aria-label="Dashboard sections" className="mt-4 flex flex-wrap gap-1 lg:mt-6 lg:flex-col">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2.5 text-sm font-medium text-brand hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon aria-hidden="true" className="shrink-0" />
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
