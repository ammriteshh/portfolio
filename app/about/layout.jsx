import Footer from "@/components/Footer";

export const metadata = {
  title: "Amritesh | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
