import type { ReactNode } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { LAYOUT_STYLES } from "../constants/styles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={LAYOUT_STYLES.page}>
      <Header />
      <Navbar />
      <main className={LAYOUT_STYLES.content}>{children}</main>
    </div>
  );
}
