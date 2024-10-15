import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/homes/home-1/Cta";
import Faq from "@/components/homes/home-1/Faq";
import Service from "@/components/homes/home-1/Service";
import Pricing from "@/components/homes/home-1/Pricing";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Header from "@/components/headers/Header";
import Banner from "@/components/dashboard/Banner";
import Result from "@/components/dashboard/Results";
import Partners from "@/components/dashboard/Partners";
import Features from "@/components/dashboard/Features";
import Tool from "@/components/dashboard/Tools";
import Features2 from "@/components/dashboard/Features2";
import Roadmap from "@/components/dashboard/RoadMap";
export const metadata = {
  title: "Home 1 || MunAi - AI Writer & Copywriting Nextjs Template",
  description: "MunAi - AI Writer & Copywriting Nextjs Template",
};
export default function Dashboard() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header/>
          <Banner />
          <Result />
          <Partners/>
          <Features />
          <Tool />
          <Features2 />
          {/* <Service /> */}
          <Roadmap />
          {/* <Pricing />
          <Faq />
          <Cta />
          <Footer1 /> */}
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
