import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Use login and password",
};

export default function LoginLayout({
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
