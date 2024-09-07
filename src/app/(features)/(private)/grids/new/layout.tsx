import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New grid",
  description: "Add new grid",
};

export default function NewGridLayout({
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
