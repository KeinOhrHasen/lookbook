import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grids",
  description: "Setup grid for main page",
};

export default function GridsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section>
      {children}
    </section>
  );
}
