import { lazy, Suspense } from "react";
import styles from "./style";
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Stats = lazy(() => import("./components/Stats"));
const Business = lazy(() => import("./components/Business"));
const Billing = lazy(() => import("./components/Billing"));
const CardDeal = lazy(() => import("./components/CardDeal"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Clients = lazy(() => import("./components/Clients"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));

const Application = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Suspense
          fallback={
            <div
              className={`${styles.heading2} text-white text-center justify-center w-full text-[28px] `}
            >
              Loading Navbar...
            </div>
          }
        >
          <Navbar />
        </Suspense>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Suspense
          fallback={
            <div
              className={`${styles.heading2} text-white text-center justify-center w-full text-[28px] `}
            >
              Loading Hero...
            </div>
          }
        >
          <Hero />
        </Suspense>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Suspense
          fallback={
            <div
              className={`${styles.heading2} text-white text-center justify-center w-full text-[28px] `}
            >
              Loading components...
            </div>
          }
        >
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </Suspense>
      </div>
    </div>
  </div>
);
export default Application;
