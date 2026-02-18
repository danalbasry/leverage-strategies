import Navigation from "@/components/layout/Navigation";
import CTABanner from "@/components/layout/CTABanner";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <CTABanner />
      <Footer />
    </>
  );
}
