import Header from "./header";
import Footer from "./footer";

export default function MainLayout({ children }: any) {
  return (
    <>
      <div className="flex flex-col min-h-screen items-stretch">
        <div className="mb-20">
          <Header />
        </div>
        <div className="flex-grow">
          <main className="flex-shrink-0">{children}</main>
        </div>
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
