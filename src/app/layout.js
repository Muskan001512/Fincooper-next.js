import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
