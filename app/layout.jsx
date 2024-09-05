import { Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/utils/ContextProvider";
import ToasterProvider from "@/common/ToasterProvider";
import { ReduxProvider } from "@/redux/ReduxProviders";

const style = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Admin Panel",
  description: "Admin panel created with Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.className}>
        <main className="h-screen w-screen">
          <ToasterProvider>
            <ReduxProvider>
              <ModalProvider>{children}</ModalProvider>
            </ReduxProvider>
          </ToasterProvider>
        </main>
      </body>
    </html>
  );
}
