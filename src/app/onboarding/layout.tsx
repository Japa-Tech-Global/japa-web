import { ReactNode } from "react";
import Footer from "./Components/Footer/Footer";

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
