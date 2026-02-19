import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";

export function NavLink(props: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        `
        flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition
        ${isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}
        `
      }
    />
  );
}
