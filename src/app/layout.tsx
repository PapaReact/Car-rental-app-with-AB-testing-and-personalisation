import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Script from "next/script";

export const metadata = {
  title: "Acme Lease",
  description: "Prepr example implementation on how to use personalization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            ! function (e, t, p, r, n, a, s) {
              e[r] || ((n = e[r] = function () {
              n.process ? n.process.apply(n, arguments) : n.queue.push(arguments)
              }).queue = [], n.t = +new Date, (a = t.createElement(p)).async = 1, a.src = "https://cdn.tracking.prepr.io/js/prepr_v2.min.js?t=" + 864e5 * Math.ceil(new Date / 864e5), (s = t.getElementsByTagName(p)[0]).parentNode.insertBefore(a, s))
              }(window, document, "script", "prepr"), prepr("init", "1270b7375b273aef5f142cdfb4aa94ab2bbde62cefeb61857daf7bb4fff68755"), prepr("event", "pageload");`,
          }}
        />
      </head>
      <body className="font-ubuntu">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
