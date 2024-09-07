import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Files",
  description: "Add new files to describe your work style and habits",
};

export default function UploadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="h-full">
      {children}
    </section>
  );
}
