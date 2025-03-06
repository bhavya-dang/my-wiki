import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    template: "%s | Bhavya Dang",
    default: "Bhavya Dang",
  },
  description: "Bhavya Dang | Wiki",
  openGraph: {
    title: "Bhavya Dang",
    description: "Bhavya Dang | Wiki",
    url: "https://bhavyadang.in",
    siteName: "Bhavya Dang",
    images: [
      {
        url: "https://github.com/bhavya-dang/my-website/blob/master/public/bhavyadang.jpeg?raw=true",
        width: 800,
        height: 600,
        alt: "Bhavya Dang profile image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const navbar = (
  <Navbar
    logo={
      <>
        <span
          style={{
            marginLeft: ".4em",
            fontSize: "20px",
            fontWeight: 600,
            display: "flex",
            gap: 13,
          }}
        >
          <Image width={30} height={30} src="/avatar_cropped.png" alt="" />{" "}
          Bhavya Dang
        </span>
      </>
    }
    logoLink={"https://bhavyadang.in"}
    projectLink="https://github.com/bhavya-dang"
    chatLink="https://www.linkedin.com/in/bhavya-dang-27506b223/"
    chatIcon={<LinkedInLogoIcon style={{ width: "25px", height: "50px" }} />}
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Bhavya Dang.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="icon" href="/avatar_cropped.png" sizes="any" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/bhavya-dang/my-wiki"
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
