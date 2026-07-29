import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ServiceMarquee from "./ServiceMarquee";
import Vector from "../assets/Vector.png";
import arrowTop from "../assets/arrowTop.svg";
import Icon from "../assets/Icon.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import star from "../assets/star.svg";
import Shape from "../assets/Shape.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import linkdin from "../assets/linkdin.svg";
import LeftAbstract from "../assets/LeftAbstract.svg";
import rightAbstract from "../assets/rightAbstract.svg";
import Container from "../assets/Container.png";
import SideImage from "../assets/SideImage.png";
import rightSide from "../assets/rightSide.png";
import frame_1 from "../assets/frame_1.png";
import frame_2 from "../assets/frame_2.png";
import frame_3 from "../assets/frame_3.png";
import Logomain from "../assets/Logomain.png";

import { ChevronDown } from "lucide-react";

const Body = () => {
  const [openIndex, setOpenIndex] = useState(0);
  useScrollReveal();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What type of photography do you specialize in?",
      answer:
        "I specialize in portrait, landscape, event, and lifestyle photography, capturing moments that tell unique stories.",
    },
    {
      question: "How can I book a photography session with you?",
      answer:
        "You can book a session by filling out the contact form or reaching out via email.",
    },
    {
      question: "What equipment do you use for your photography?",
      answer:
        "I use professional cameras, lenses, lighting equipment, and editing software to deliver high-quality results.",
    },
    {
      question: "Can I request a specific location for a photoshoot?",
      answer:
        "Yes! You're welcome to suggest any location that matches your vision.",
    },
    {
      question: "What is your editing process like?",
      answer:
        "Every image is professionally color-corrected, retouched, and optimized while maintaining a natural look.",
    },
    {
      question: "Are digital files included in your photography packages?",
      answer:
        "Yes, high-resolution digital files are included in most photography packages.",
    },
    {
      question: "Do you offer prints of your photographs?",
      answer: "Yes, premium quality prints are available in various sizes.",
    },
    {
      question:
        "How long does it take to receive the edited photos after a session?",
      answer:
        "Delivery usually takes between 7–14 business days depending on the project.",
    },
  ];

  return (
    <>
      <main>
        <section className="w-full bg-black relative border-gray border-solid border-t-[1px] border-b-[1px] box-border overflow-hidden flex flex-col lg:flex-row items-center justify-between py-20 px-6 sm:px-10 md:px-16 lg:px-[122px] isolate gap-10 lg:gap-5 text-left text-[22px] text-dimgray font-Manrope">
          <figure>
            <img
              className="hero-vector h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[346px] lg:w-[346px] absolute top-1/2 left-1/2 object-cover z-[0] shrink-0"
              src={Vector}
              alt="Decorative background graphic"
            />
          </figure>

          {/* Left Content */}
          <article className="hero-load-1 flex flex-col items-center lg:items-start justify-center gap-2.5 z-[1] shrink-0 text-center lg:text-left lg:mr-20 xl:pr-90">
            <p className="relative uppercase font-medium text-[#62646c] font-manrope">
              Stunning Photography by
            </p>

            <h1 className="hero-load-2 relative text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] uppercase font-semibold text-white font-manrope">
              Damien Braun
            </h1>
          </article>

          {/* Right Content */}
          <article className="hero-load-3 flex flex-col items-center lg:items-start gap-2.5 z-[2] shrink-0 text-white text-center lg:text-left">
            <div className="flex items-center gap-2.5">
              <h2 className="hero-load-4 relative uppercase text-[34px] sm:text-[44px] lg:text-[58px] font-manrope">
                Let's
              </h2>

              <a
                href="#contact"
                className="btn-primary-animate hero-load-5 shadow-[4px_4px_17.4px_rgba(255,_255,_255,_0.28)_inset] bg-[#4a2ced] rounded-[100px] flex items-center py-[18px] px-[50px]"
                aria-label="Contact Damien Braun"
              >
                <img
                  className="h-[30px] w-[30px] relative"
                  src={arrowTop}
                  alt="Arrow icon"
                />
              </a>
            </div>

            <h2 className="hero-load-5 relative uppercase text-[34px] sm:text-[44px] lg:text-[58px] font-manrope">
              Work Together
            </h2>
          </article>
        </section>
      </main>

      {/* //add star icons */}

      <ServiceMarquee direction="left" />

      {/* main image section  */}

      <section className="scroll-reveal scroll-reveal-up">
        <div className="w-full relative bg-black flex flex-col items-start py-0 px-4 sm:px-8 md:px-12  lg:px-[142px] box-border">
          <img
            className="img-reveal-hover self-stretch max-h-[520px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt="main-image"
            src={Container}
          />
        </div>
      </section>

      <section
        className="scroll-reveal scroll-reveal-up w-full text-white bg-black relative flex flex-col items-start gap-10 md:gap-20 text-left text-[20px] text-slategray font-manrope px-4 sm:px-6 lg:px-0"
        aria-labelledby="about-heading"
      >
        <header className="scroll-reveal scroll-reveal-left scroll-delay-1 self-stretch px-15  lg:pt-20 border-gray-100 border-solid border-b-[1px] flex flex-col md:flex-row items-start md:items-center pt-0 px-0 pb-[50px] gap-5">
          <div className="flex-1 flex flex-col items-start gap-1">
            <p className="self-stretch relative uppercase font-semibold">
              About
            </p>
            <h1
              id="about-heading"
              className="self-stretch relative text-[32px] sm:text-[42px] md:text-[58px] uppercase font-semibold text-white"
            >
              I am Damien
            </h1>
          </div>

          <a
            href="#about-details"
            className="btn-animate rounded-[10px] bg-gray-200 border-gray-100 [background:#1c1c21_padding-box,_linear-gradient(135.66deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center py-4 px-6 text-num-18 text-white shrink-0"
          >
            <span className="relative leading-[150%] font-medium">
              Know More -&gt;
            </span>
          </a>
        </header>

        <div
          id="about-details"
          className="scroll-reveal scroll-reveal-up scroll-delay-2 self-stretch px-14 flex flex-col md:flex-row items-start md:items-center gap-[30px] text-[24px] md:text-[30px] text-lightgray"
        >
          <img
            className="scroll-reveal scroll-reveal-left scroll-delay-3 img-reveal-hover h-[280px] sm:h-[420px] md:h-[710px] w-full md:flex-1 relative max-w-full overflow-hidden object-cover rounded-[20px] md:rounded-none"
            alt="Damien, professional photographer, smiling portrait"
            src={SideImage}
            loading="lazy"
          />

          <article className="scroll-reveal scroll-reveal-right scroll-delay-3 w-full md:flex-1 rounded-[20px] border-gray-100 border-solid border-[1px] flex flex-col items-start">
            <div className="self-stretch border-gray-100 border-solid border-b-[1px] flex flex-col items-start p-6 md:p-10 gap-5">
              <h2 className="self-stretch flex items-end gap-2.5">
                <img
                  className="h-10 w-[39px] relative"
                  alt=""
                  src={Icon}
                  loading="lazy"
                />
                <span className="flex-1 relative font-medium text-[20px] md:text-[30px]">
                  Introduction
                </span>
              </h2>
              <p className="self-stretch relative text-num-18 leading-[150%] text-darkgray">
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>

            <div className="self-stretch flex flex-col items-start p-6 md:p-10 gap-6 md:gap-10 text-num-18">
              <h2 className="self-stretch flex items-end gap-2.5 text-[24px] md:text-[30px]">
                <img
                  className="h-10 w-[39px] relative"
                  alt=""
                  src={Icon}
                  loading="lazy"
                />
                <span className="flex-1 relative font-medium">
                  Contact Information
                </span>
              </h2>

              <address className="self-stretch flex flex-col sm:flex-row items-start gap-5 text-gainsboro not-italic">
                <div className="flex-1 flex flex-col items-start gap-2.5">
                  <span className="relative leading-[150%] font-medium">
                    Email
                  </span>
                  <a
                    href="mailto:damienbraun@gmail.com"
                    className="relative text-[20px] leading-[150%] text-darkgray hover:text-white transition-colors"
                  >
                    damienbraun@gmail.com
                  </a>
                </div>
                <div className="flex-1 flex flex-col items-start gap-2.5">
                  <span className="relative leading-[150%] font-medium">
                    Phone Number
                  </span>
                  <a
                    href="tel:+00000000000"
                    className="relative text-[20px] leading-[150%] text-darkgray hover:text-white transition-colors"
                  >
                    +00 000000000
                  </a>
                </div>
              </address>

              <div className="self-stretch flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-[60px] text-white">
                <nav aria-label="Social media links">
                  <ul className="rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] flex items-center justify-end p-2.5 gap-4 list-none">
                    <li>
                      <a
                        href="#"
                        aria-label="Visit Damien's Facebook profile"
                        className="btn-icon-animate rounded-[100px] bg-[#2F2F37] [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                      >
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src={facebook}
                          loading="lazy"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-label="Visit Damien's X (Twitter) profile"
                        className="btn-icon-animate rounded-[100px] bg-[#2F2F37] [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                      >
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src={x}
                          loading="lazy"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-label="Visit Damien's LinkedIn profile"
                        className="btn-icon-animate rounded-[100px] bg-[#2F2F37] [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                      >
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src={linkdin}
                          loading="lazy"
                        />
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex-1 flex flex-col sm:flex-row items-start justify-center gap-5">
                  <a
                    href="#contact"
                    className="btn-animate w-full sm:flex-1 text-center bg-gray-200 border-gray-100 rounded-[10px] [background:#1c1c21_padding-box,_linear-gradient(135.66deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center justify-center py-[18px] px-[34px]"
                  >
                    <span className="relative leading-[150%] font-medium">
                      Let's Work
                    </span>
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="btn-animate w-full sm:flex-1 text-center bg-gray-200 border-gray-100 rounded-[10px] [background:#1c1c21_padding-box,_linear-gradient(135.66deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center justify-center py-[18px] px-[34px]"
                  >
                    <span className="relative leading-[150%] font-medium">
                      Download CV
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        className="scroll-reveal scroll-reveal-up w-full bg-black text-white relative flex flex-col items-start gap-10 md:gap-20 text-left text-xl text-slategray font-manrope px-4 sm:px-6 lg:px-0"
        aria-labelledby="services-heading"
      >
        <header className="self-stretch px-20 lg:pt-20 border-gray-100 border-solid border-b-[1px] flex flex-col md:flex-row items-start md:items-center pt-0 px-0 pb-[50px] gap-5">
          <div className="flex-1 flex flex-col items-start gap-1">
            <p className="self-stretch relative uppercase font-semibold">
              Services
            </p>
            <h1
              id="services-heading"
              className="self-stretch relative text-[32px] sm:text-[42px] md:text-[58px] uppercase font-semibold text-white"
            >
              My Photography Services
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-[20px] sm:gap-[30px] text-lg text-white">
            <nav aria-label="Services gallery navigation">
              <ul className="rounded-[100px]  bg-gray-20 border-gray-100 border-solid border-[1px] flex items-center justify-end p-2.5 gap-4 list-none">
                <li>
                  <button
                    type="button"
                    aria-label="Previous service"
                    className="btn-icon-animate rounded-num-100 cursor-pointer rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border  [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                  >
                    <img
                      className="h-[34px] w-[34px] relative "
                      alt=""
                      loading="lazy"
                      src={leftArrow}
                    />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    aria-label="Next service"
                    className="btn-icon-animate rounded-num-100 cursor-pointer rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                  >
                    <img
                      className="h-[34px] w-[34px] relative"
                      alt=""
                      loading="lazy"
                      src={rightArrow}
                    />
                  </button>
                </li>
              </ul>
            </nav>

            <a
              href="#all-services"
              className="btn-animate rounded-[10px] bg-gray-200 border-gray-100 [background:#1c1c21_padding-box,_linear-gradient(135.66deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center py-4 px-6"
            >
              <span className="relative leading-[150%] font-medium">
                View All Services -&gt;
              </span>
            </a>
          </div>
        </header>

        <article className="scroll-reveal scroll-reveal-up scroll-delay-2 self-stretch px-20 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[50px] text-[28px] sm:text-[36px] md:text-[44px]">
          <div className="w-full md:flex-1 flex flex-col items-start gap-10 md:gap-[50px]">
            <div className="self-stretch flex flex-col items-start gap-5">
              <div className="self-stretch flex items-center gap-4 ">
                <h2 className="relative uppercase font-semibold text-[#797c86]">
                  Events
                </h2>
                <a
                  href="#contact"
                  className="btn-primary-animate shadow-[4px_4px_17.4px_rgba(255,_255,_255,_0.28)_inset] bg-[#4a2ced] rounded-[100px] flex items-center py-[18px] px-[50px]"
                  aria-label="Contact Damien Braun"
                >
                  <img
                    className="h-[30px] w-[30px] relative"
                    src={arrowTop}
                    alt="Arrow icon"
                  />
                </a>
              </div>
              <p className="self-stretch relative text-[24px] text-base sm:text-lg leading-[150%] text-[#797c86]">
                Our event photography service is dedicated to capturing the
                magic of your special occasions. Whether it's a wedding,
                corporate event, or milestone celebration, we're there to
                document every heartfelt moment. We blend into the background,
                ensuring natural and candid shots that reflect the emotions of
                the day.
              </p>
            </div>

            <div className="self-stretch flex flex-col items-start sm:items-end gap-5 text-lg text-lightgray">
              <h3 className="self-stretch relative leading-[150%] font-medium">
                Service Highlights
              </h3>
              <ul className="self-stretch flex flex-col items-start gap-2.5 text-darkgray list-none">
                <li className="self-stretch rounded-xl border-gray-100 py-5 border-solid border-[1px] flex items-center text-[25px]  py-num-18 px-5 gap-2.5">
                  <img
                    className="h-10 w-10 relative object-cover"
                    alt=""
                    loading="lazy"
                    src={star}
                  />
                  <span className="flex-1 relative leading-[150%] uppercase text-sm sm:text-base">
                    Coverage for weddings, parties, corporate functions, and
                    more.
                  </span>
                </li>
                <li className="self-stretch text-[25px] py-8 rounded-xl border-gray-100 border-solid border-[1px] flex items-center py-num-18 px-5 gap-2.5">
                  <img
                    className="h-10 w-10 relative object-cover"
                    alt=""
                    loading="lazy"
                    src={star}
                  />
                  <span className="flex-1 relative leading-[150%] uppercase text-sm sm:text-base">
                    Skilled photographers who know how to seize the moment.
                  </span>
                </li>
                <li className="self-stretch text-[25px] rounded-xl border-gray-100 py-8 border-solid border-[1px] flex items-center py-num-18 px-5 gap-2.5">
                  <img
                    className="h-10 w-10 relative object-cover"
                    alt=""
                    loading="lazy"
                    src={star}
                  />
                  <span className="flex-1 relative leading-[150%] uppercase text-sm sm:text-base">
                    A mix of candid and posed shots for a comprehensive story.
                  </span>
                </li>
                <li className="self-stretch text-[25px] rounded-xl py-8 border-gray-100 border-solid border-[1px] flex items-center py-num-18 px-5 gap-2.5">
                  <img
                    className="h-10 w-10 relative object-cover"
                    alt=""
                    loading="lazy"
                    src={star}
                  />
                  <span className="flex-1 relative leading-[150%] uppercase text-sm sm:text-base">
                    Quick turnaround for you to relive the day's highlights.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <img
            className="scroll-reveal scroll-reveal-right scroll-delay-3 img-reveal-hover h-[280px] sm:h-[420px] md:h-[625px] w-full md:flex-1 relative -mt-6 lg:-mt-160 rounded-[20px] md:rounded-t-[20px] md:rounded-br-[20px] md:rounded-bl-[100px] max-w-full overflow-hidden object-cover"
            alt="Photographer capturing candid moments at a wedding event"
            loading="lazy"
            src={rightSide}
          />
        </article>
      </section>

      <section className="scroll-reveal scroll-reveal-up">
        <header className="scroll-reveal scroll-reveal-left scroll-delay-1 self-stretch bg-black text-white px-20 lg:pt-20 border-gray-100 border-solid border-b-[1px] flex flex-col md:flex-row items-start md:items-center pt-0 px-0 pb-[50px] gap-5">
          <div className="flex-1 flex flex-col items-start gap-1">
            <p className="self-stretch relative uppercase font-semibold">
              PORTFOLIO
            </p>
            <h1
              id="services-heading"
              className="self-stretch relative text-[32px] sm:text-[42px] md:text-[58px] uppercase font-semibold text-white"
            >
              Explore My photography work.
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-[20px] sm:gap-[30px] text-lg text-white">
            <nav aria-label="Services gallery navigation">
              <ul className="rounded-[100px]  bg-gray-20 border-gray-100 border-solid border-[1px] flex items-center justify-end p-2.5 gap-4 list-none">
                <li>
                  <button
                    type="button"
                    aria-label="Previous service"
                    className="btn-icon-animate rounded-num-100 cursor-pointer rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border  [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                  >
                    <img
                      className="h-[34px] w-[34px] relative "
                      alt=""
                      loading="lazy"
                      src={leftArrow}
                    />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    aria-label="Next service"
                    className="btn-icon-animate rounded-num-100 cursor-pointer rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                  >
                    <img
                      className="h-[34px] w-[34px] relative"
                      alt=""
                      loading="lazy"
                      src={rightArrow}
                    />
                  </button>
                </li>
              </ul>
            </nav>

            <a
              href="#all-services"
              className="btn-animate rounded-[10px] bg-gray-200 border-gray-100 [background:#1c1c21_padding-box,_linear-gradient(135.66deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center py-4 px-6"
            >
              <span className="relative leading-[150%] font-medium">
                View All Services -&gt;
              </span>
            </a>
          </div>
        </header>

        <ul className="scroll-reveal scroll-reveal-up scroll-delay-2 w-full  bg-black text-white relative flex flex-col md:flex-row items-start gap-10 md:gap-[50px] text-left text-[20px] text-lightgray font-manrope list-none px-4 sm:px-6 lg:px-20">
          <li className="scroll-reveal scroll-reveal-up scroll-delay-3 w-full flex-1 flex flex-col items-start gap-[19px]">
            <article className="w-full flex flex-col items-start gap-[19px]">
              <img
                className="img-reveal-hover self-stretch h-[280px] sm:h-[380px] md:h-[519px] relative rounded-[20px] max-w-full overflow-hidden shrink-0 object-cover"
                alt="Faces of Resilience photography project cover"
                loading="lazy"
                src={frame_1}
              />
              <div className="self-stretch flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                <div className="flex-1 flex flex-col items-start gap-1">
                  <h3 className="self-stretch relative font-medium">
                    Faces of Resilience
                  </h3>
                  <time
                    className="self-stretch text-[#797c86] relative text-num-18 text-slategray"
                    dateTime="2022-03"
                  >
                    March 2022
                  </time>
                </div>
                <a
                  href="#"
                  className="btn-link-animate border-darkslategray border-solid border-b-[1px] border-[#2f2f37] flex items-start py-1.5 px-0 gap-2.5 text-num-18 text-whitesmoke shrink-0"
                >
                  <span className="relative uppercase font-medium ">
                    View Project
                  </span>
                  <img
                    className="h-6 w-6 relative hover:rotate-45   transition delay-120 duration-100 ease-in-out hover:-translate-y-1"
                    alt=""
                    loading="lazy"
                    src={arrowTop}
                  />
                </a>
              </div>
            </article>
          </li>

          <li className="scroll-reveal scroll-reveal-up scroll-delay-4 w-full flex-1 flex flex-col items-start gap-[19px]">
            <article className="w-full flex flex-col items-start gap-[19px]">
              <img
                className="img-reveal-hover self-stretch h-[280px] sm:h-[380px] md:h-[519px] relative rounded-[20px] max-w-full overflow-hidden shrink-0 object-cover"
                alt="A Wedding Tale photography project cover"
                loading="lazy"
                src={frame_2}
              />
              <div className="self-stretch flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                <div className="flex-1 flex flex-col items-start gap-1">
                  <h3 className="self-stretch relative font-medium">
                    A Wedding Tale
                  </h3>
                  <time
                    className="self-stretch text-[#797c86] relative text-num-18 text-slategray"
                    dateTime="2020-01"
                  >
                    January 2020
                  </time>
                </div>
                <a
                  href="#"
                  className="btn-link-animate border-darkslategray border-solid border-b-[1px] border-[#2f2f37] flex items-start py-1.5 px-0 gap-2.5 text-num-18 text-whitesmoke shrink-0"
                >
                  <span className="relative uppercase font-medium">
                    View Project
                  </span>
                  <img
                    className="h-6 w-6 relative hover:rotate-45   transition delay-120 duration-100 ease-in-out hover:-translate-y-1"
                    alt=""
                    loading="lazy"
                    src={arrowTop}
                  />
                </a>
              </div>
            </article>
          </li>

          <li className="scroll-reveal scroll-reveal-up scroll-delay-5 w-full flex-1 flex flex-col items-start gap-[19px]">
            <article className="w-full flex flex-col items-start gap-[19px]">
              <img
                className="img-reveal-hover self-stretch h-[280px] sm:h-[380px] md:h-[519px] relative rounded-[20px] max-w-full overflow-hidden shrink-0 object-cover"
                alt="Product Elegance photography project cover"
                loading="lazy"
                src={frame_3}
              />
              <div className="self-stretch flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                <div className="flex-1 flex flex-col items-start gap-1">
                  <h3 className="self-stretch relative font-medium">
                    Product Elegance
                  </h3>
                  <time
                    className="self-stretch text-[#797c86] relative text-num-18 text-slategray"
                    dateTime="2020-01"
                  >
                    January 2020
                  </time>
                </div>
                <a
                  href="#"
                  className="btn-link-animate border-darkslategray border-solid border-b-[1px] border-[#2f2f37] flex items-start py-1.5 px-0 gap-2.5 text-num-18 text-whitesmoke shrink-0"
                >
                  <span className="relative uppercase font-medium ">
                    View Project
                  </span>
                  <img
                    className="h-6 w-6 relative hover:rotate-45   transition delay-120 duration-100 ease-in-out hover:-translate-y-1"
                    alt=""
                    loading="lazy"
                    src={arrowTop}
                  />
                </a>
              </div>
            </article>
          </li>
        </ul>
      </section>

      {/* faq sectio */}

      <section className="scroll-reveal scroll-reveal-up w-full px-20 bg-black text-white">
        <div className="w-full relative flex flex-col">
          {/* Heading */}
          <header className="scroll-reveal scroll-reveal-left scroll-delay-1 border-b border-gray-200 pt-15 pb-10 pb-num-50">
            <p className="uppercase font-semibold text-num-20 text-slategray">
              FAQ'S
            </p>

            <h2 className="text-[58px] uppercase font-semibold mt-1">
              Frequently Asked Questions
            </h2>
          </header>

          {/* FAQ List */}
          <div className="grid md:grid-cols-2">
            {[faqs.slice(0, 4), faqs.slice(4)].map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`${
                  columnIndex === 0 ? "border-r border-gray-200" : ""
                } py-num-30`}
              >
                {column.map((faq, i) => {
                  const index = columnIndex * 4 + i;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={index}
                      className="scroll-reveal scroll-reveal-up border-b border-gray-200 last:border-none"
                      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
                    >
                      <h3>
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="btn-animate w-full flex justify-between items-center text-left px-num-50 py-num-30 gap-6"
                          aria-expanded={isOpen}
                          aria-controls={`faq-${index}`}
                        >
                          <span className="font-semibold uppercase">
                            {faq.question}
                          </span>

                          <span
                            className={`rounded-full border border-[#1c1c21] p-num-14 mr-6 md:mr-10 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <ChevronDown size={24} />
                          </span>
                        </button>
                      </h3>

                      <div
                        id={`faq-${index}`}
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? "max-h-40 opacity-100 px-num-50 pb-num-30"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[18px] leading-[150%] text-slategray">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //Testimonials */}

      <section className="scroll-reveal scroll-reveal-up">
        <header className="scroll-reveal scroll-reveal-left scroll-delay-1 self-stretch bg-black text-white px-20 lg:pt-20 border-gray-100 border-solid border-b-[1px] flex flex-col md:flex-row items-start md:items-center pt-0 px-0 pb-[50px] gap-5">
          <div className="flex-1 flex flex-col items-start gap-1">
            <p className="self-stretch relative uppercase font-semibold">
              PORTFOLIO
            </p>
            <h1
              id="services-heading"
              className="self-stretch relative text-[32px] sm:text-[42px] md:text-[58px] uppercase font-semibold text-white"
            >
              Explore My photography work.
            </h1>
          </div>

          {/* <div className="w-full relative text-lg leading-[150%] font-manrope text-dimgray text-left inline-block">Total Reviews</div>
    <div className="w-full relative text-[28px] leading-[150%] font-medium font-manrope text-lightgray text-lef inline-block">323</div> */}

          <div className="flex flex-wrap items-center gap-[20px] sm:gap-[30px] text-lg text-white">
            <nav aria-label="Services gallery navigation">
              <ul className="rounded-[100px]  bg-gray-20 border-gray-100 border-solid border-[1px] flex items-center justify-end p-2.5 gap-4 list-none">
                <li>
                  <button
                    type="button"
                    aria-label="Previous service"
                    className="btn-icon-animate rounded-num-100 cursor-pointer rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border  [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                  >
                    <img
                      className="h-[34px] w-[34px] relative "
                      alt=""
                      loading="lazy"
                      src={leftArrow}
                    />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    aria-label="Next service"
                    className="btn-icon-animate rounded-num-100 cursor-pointer rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
                  >
                    <img
                      className="h-[34px] w-[34px] relative"
                      alt=""
                      loading="lazy"
                      src={rightArrow}
                    />
                  </button>
                </li>
              </ul>
            </nav>

            <a
              href="#all-services"
              className="btn-animate rounded-[10px] bg-gray-200 border-gray-100 [background:#1c1c21_padding-box,_linear-gradient(135.66deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center py-4 px-6"
            >
              <span className="relative leading-[150%] font-medium">
                View All Services -&gt;
              </span>
            </a>
          </div>
        </header>

        <section
          className="w-full relative pt- flex flex-col md:flex-row items-start gap-[20px] md:gap-[30px] text-left text-num-20 text-gainsboro font-manrope px-4 sm:px-6 lg:px-0"
          aria-label="Client testimonials"
        >
          <ul className="scroll-reveal scroll-reveal-up scroll-delay-2 w-full bg-black px-18 text-white flex flex-col md:flex-row items-start gap-[20px] md:gap-[30px] list-none m-0 p-0">
            {/* Testimonial 1 */}
            <li className="scroll-reveal scroll-reveal-up scroll-delay-3 w-full flex-1">
              <article className="rounded-xl bg-gray-200 border-gray-100 border-solid border-[1px] overflow-hidden flex flex-col items-start p-6 sm:p-8 md:p-10 relative isolate gap-[20px] md:gap-[30px]">
                <div
                  aria-hidden="true"
                  className="w-[1141.7px] h-[946.9px]  absolute !!m-[0_important] top-[calc(50%_-_425px)] left-[calc(50%_-_607.15px)] opacity-[0.5] z-[0] shrink-0 pointer-events-none"
                >
                  <div className="absolute top-[520.73px] right-[-156.8px] rounded-num-22 [background:linear-gradient(206.57deg,_#18181b,_rgba(24,_24,_27,_0))] w-[373.4px] h-[373.4px] [transform:_rotate(-144.5deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[946.89px] right-[252.31px] rounded-num-22 [background:linear-gradient(206.57deg,_#18181b,_rgba(24,_24,_27,_0))] w-[489.8px] h-[489.8px] [transform:_rotate(-54.7deg)] [transform-origin:0_0]" />
                </div>

                <header className="self-stretch flex flex-wrap items-center gap-4 md:gap-[26px] z-[1] shrink-0">
                  <div className="flex-1 flex flex-col items-start min-w-[140px]">
                    <h3 className="self-stretch relative leading-[150%] font-medium not-italic">
                      Emily Johnson
                    </h3>
                    <p className="self-stretch relative text-[16px] md:text-[18px] leading-[150%] text-dimgray">
                      USA, California
                    </p>
                  </div>

                  <nav aria-label="Share this testimonial">
                    <ul className="rounded-num-100 bg-gray-200 border-gray-100 rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border w-full border-solid border-[1px] flex items-center justify-end p-2.5 gap-2.5 list-none m-0">
                      <li>
                        <a
                          href="#"
                          aria-label="Share on Facebook"
                          className="rounded-num-100 bg-black  [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={facebook}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Share on X (Twitter)"
                          className="rounded-num-100 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={x}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Share on LinkedIn"
                          className="rounded-num-100 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={linkdin}
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </header>

                <div
                  className="flex items-start gap-[5px] z-[2] shrink-0"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                </div>

                <blockquote className="self-stretch relative leading-[150%] font-medium z-[3] shrink-0 m-0 text-[16px] sm:text-num-20">
                  Damien's photography doesn't just capture moments; it captures
                  emotions. Hes work is simply mesmerizing.
                </blockquote>
              </article>
            </li>

            {/* Testimonial 2 */}
            <li className="scroll-reveal scroll-reveal-up scroll-delay-4 w-full flex-1">
              <article className="rounded-xl bg-gray-200 border-gray-100 border-solid border-[1px] overflow-hidden flex flex-col items-start p-6 sm:p-8 md:p-10 relative isolate gap-[20px] md:gap-[30px]">
                <div
                  aria-hidden="true"
                  className="w-[1141.7px] h-[946.9px] absolute !!m-[0_important] top-[calc(50%_-_425px)] left-[calc(50%_-_607.48px)] opacity-[0.5] z-[0] shrink-0 pointer-events-none"
                >
                  <div className="absolute top-[520.73px] right-[-156.8px] rounded-num-22 [background:linear-gradient(206.57deg,_#18181b,_rgba(24,_24,_27,_0))] w-[373.4px] h-[373.4px] [transform:_rotate(-144.5deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[946.89px] right-[252.31px] rounded-num-22 [background:linear-gradient(206.57deg,_#18181b,_rgba(24,_24,_27,_0))] w-[489.8px] h-[489.8px] [transform:_rotate(-54.7deg)] [transform-origin:0_0]" />
                </div>

                <header className="self-stretch flex flex-wrap items-center gap-4 md:gap-[26px] z-[1] shrink-0">
                  <div className="flex-1 flex flex-col items-start min-w-[140px]">
                    <h3 className="self-stretch relative leading-[150%] font-medium not-italic">
                      John Smith
                    </h3>
                    <p className="self-stretch relative text-[16px] md:text-[18px] leading-[150%] text-dimgray">
                      USA, California
                    </p>
                  </div>

                  <nav aria-label="Share this testimonial">
                    <ul className="rounded-num-100 bg-gray-200 border-gray-100 rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border w-full border-solid border-[1px] flex items-center justify-end p-2.5 gap-2.5 list-none m-0">
                      <li>
                        <a
                          href="#"
                          aria-label="Share on Facebook"
                          className="rounded-num-100 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={facebook}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Share on X (Twitter)"
                          className="rounded-num-100 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={x}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Share on LinkedIn"
                          className="rounded-num-100 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={linkdin}
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </header>

                <div
                  className="flex items-start gap-[5px] z-[2] shrink-0"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                </div>

                <blockquote className="self-stretch relative leading-[150%] font-medium z-[3] shrink-0 m-0 text-[16px] sm:text-num-20">
                  Damien has an incredible talent for making every event feel
                  effortless, and the results speak for themselves.
                </blockquote>
              </article>
            </li>

            {/* Testimonial 3 */}
            <li className="scroll-reveal scroll-reveal-up scroll-delay-5 w-full flex-1">
              <article className="rounded-xl bg-gray-200 border-gray-100 border-solid border-[1px] overflow-hidden flex flex-col items-start p-6 sm:p-8 md:p-10 relative isolate gap-[20px] md:gap-[30px]">
                <div
                  aria-hidden="true"
                  className="w-[1141.7px] h-[946.9px] absolute !!m-[0_important] top-[calc(50%_-_425px)] left-[calc(50%_-_606.82px)] opacity-[0.5] z-[0] shrink-0 pointer-events-none"
                >
                  <div className="absolute top-[520.73px] right-[-156.8px] rounded-num-22 [background:linear-gradient(206.57deg,_#18181b,_rgba(24,_24,_27,_0))] w-[373.4px] h-[373.4px] [transform:_rotate(-144.5deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[946.89px] right-[252.31px] rounded-num-22 [background:linear-gradient(206.57deg,_#18181b,_rgba(24,_24,_27,_0))] w-[489.8px] h-[489.8px] [transform:_rotate(-54.7deg)] [transform-origin:0_0]" />
                </div>

                <header className="self-stretch flex flex-wrap items-center gap-4 md:gap-[26px] z-[1] shrink-0">
                  <div className="flex-1 flex flex-col items-start min-w-[140px]">
                    <h3 className="self-stretch relative leading-[150%] font-medium not-italic">
                      Samantha Davis
                    </h3>
                    <p className="self-stretch relative text-[16px] md:text-[18px] leading-[150%] text-dimgray">
                      USA, California
                    </p>
                  </div>

                  <nav aria-label="Share this testimonial">
                    <ul className="rounded-num-100 bg-gray-200 border-gray-100 rounded-[100px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border w-full border-solid border-[1px] flex items-center justify-end p-2.5 gap-2.5 list-none m-0">
                      <li>
                        <a
                          href="#"
                          aria-label="Share on Facebook"
                          className="rounded-num-100  [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={facebook}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Share on X (Twitter)"
                          className="rounded-num-100   border border-transparent overflow-hidden flex items-center p-num-14"
                          style={{
                            background:
                              "#1c1c21 padding-box, linear-gradient(180deg, #2f2f37 27.85%, rgba(47, 47, 55, 0)) border-box",
                          }}
                        >
                          <img
                            className="h-5 w-5 "
                            src={x}
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="#"
                          aria-label="Share on LinkedIn"
                          className="rounded-num-100 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-num-14"
                        >
                          <img
                            className="h-5 w-5 relative"
                            alt=""
                            loading="lazy"
                            src={linkdin}
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </header>

                <div
                  className="flex items-start gap-[5px] z-[2] shrink-0"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                  <img
                    className="h-6 w-6 relative rounded-num-2"
                    alt=""
                    loading="lazy"
                    src={Shape}
                  />
                </div>

                <blockquote className="self-stretch relative leading-[150%] font-medium z-[3] shrink-0 m-0 text-[16px] sm:text-num-20">
                  I was blown away by Damien's ability to capture the essence of
                  our wedding day. Hes photographs are our cherished memories.
                </blockquote>
              </article>
            </li>
          </ul>
        </section>
      </section>

      {/* Main site Name logo */}

      <section className="scroll-reveal scroll-reveal-up">
        <div className="w-full bg-black text-white relative flex flex-col items-end justify-center gap-[100px] text-left text-num-18 text-thistle font-manrope">
          <div className="scroll-reveal scroll-reveal-scale scroll-delay-1 flex flex-col items-start pt-6 md:pt-8 lg:pt-25 pl-4 md:pl-8 lg:pl-0 pr-0 md:pr-16 lg:pr-[162px]">
            <img
              className="w-full max-w-[1058px] h-auto"
              alt=""
              src={Logomain}
            />
          </div>

          <ServiceMarquee direction="right" textSize="text-[16px]" />
        </div>
      </section>

      {/* footer section */}

      <footer className="scroll-reveal scroll-reveal-up w-full bg-black text-white relative flex flex-col lg:flex-row items-start py-0 px-4 sm:px-10 lg:px-[162px] box-border isolate text-left text-[20px] text-slategray font-manrope overflow-x-hidden">
        {/* Left CTA Block */}
        <div className="scroll-reveal scroll-reveal-left scroll-delay-1 w-full lg:w-auto border-gray-200 border-solid border-l-[1px] flex flex-col items-start py-[50px] sm:py-[70px] lg:py-[100px] px-6 sm:px-10 lg:px-20 gap-[40px] lg:gap-[60px] z-[0] shrink-0">
          <p className="relative uppercase font-semibold text-sm sm:text-base lg:text-[20px] text-[#797c86]">
            A more meaningful home for photography
          </p>

          <div className="flex flex-col items-start gap-2.5 text-[36px] sm:text-[48px] lg:text-[58px] text-white">
            <div className="flex items-center gap-2.5">
              <span className="relative uppercase font-semibold">Let's</span>
              <a
                href="#contact"
                className="btn-primary-animate shadow-[4px_4px_17.4px_rgba(255,_255,_255,_0.28)_inset] bg-[#4a2ced] rounded-[100px] flex items-center py-[18px] px-[50px]"
                aria-label="Contact Damien Braun"
              >
                <img
                  className="h-[30px] w-[30px] relative"
                  src={arrowTop}
                  alt="Arrow icon"
                />
              </a>
            </div>
            <h2 className="relative uppercase font-semibold m-0">
              Work Together
            </h2>
          </div>
        </div>

        {/* Nav Links Block */}
        <nav
          aria-label="Footer navigation"
          className="scroll-reveal scroll-reveal-right scroll-delay-2 w-full flex-1 border-gray-200 border-solid border-r-[1px] border-l-[1px] flex flex-wrap items-start justify-between py-[50px] sm:py-[70px] lg:py-[100px] px-6 sm:px-10 lg:px-20 gap-8 lg:gap-5 z-[1] shrink-0 text-num-18"
        >
          {/* Home column */}
          <div className="flex flex-col items-start gap-5 min-w-[120px]">
            <h3 className="relative uppercase font-semibold text-slategray text-[#797c86]">
              Home
            </h3>
            <ul className="flex flex-col items-start gap-1.5 text-whitesmoke list-none m-0 p-0">
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#about"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#works"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  My Works
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#testimonials"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Clients column */}
          <div className="flex flex-col items-start gap-5 min-w-[120px]">
            <h3 className="relative uppercase font-semibold text-slategray text-[#797c86]">
              Clients
            </h3>
            <ul className="flex flex-col items-start gap-1.5 text-whitesmoke list-none m-0 p-0">
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Klovesto
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Nukeway
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Cloven's
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  MenVol
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio column */}
          <div className="flex flex-col items-start gap-5 min-w-[120px]">
            <h3 className="relative uppercase font-semibold text-slategray text-[#797c86]">
              Portfolio
            </h3>
            <ul className="flex flex-col items-start gap-1.5 text-whitesmoke list-none m-0 p-0">
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#events"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#portrait"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Portrait
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37]py-num-6">
                <a
                  href="#branding"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Branding
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#commercial"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Commerciale
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#wedding"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Wedding
                </a>
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col items-start gap-5 min-w-[120px]">
            <h3 className="relative uppercase font-semibold text-slategray text-[#797c86]">
              Services
            </h3>
            <ul className="flex flex-col items-start gap-1.5 text-whitesmoke list-none m-0 p-0">
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#portraits"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Portraits
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#events"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li className="border-darkslategray border-solid border-b-[1px] border-[#2f2f37] py-num-6">
                <a
                  href="#commercial"
                  className="relative uppercase font-medium hover:text-white transition-colors"
                >
                  Commercial
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Decorative absolute images */}
        <img
          className="hidden lg:block h-[200px] w-[200px] absolute top-[calc(50%_-_100.5px)] left-[-19px] object-contain z-[2] shrink-0"
          alt=""
          loading="lazy"
          src={LeftAbstract}
        />
        <img
          className="hidden lg:block h-[200px] w-[200px] absolute top-[calc(50%_-_100.5px)] right-[-19px] object-contain z-[3] shrink-0"
          alt=""
          loading="lazy"
          src={rightAbstract}
        />
      </footer>

      <div className="scroll-reveal scroll-reveal-fade w-full relative bg-black text-white border-gray-100 border-solid border-t-[1px] box-border flex flex-col sm:flex-row items-center justify-between py-6 sm:py-10 px-4 sm:px-10 lg:px-[162px] isolate gap-4 sm:gap-5 text-left text-lg text-slategray font-manrope overflow-x-hidden">
        {/* Legal Links */}
        <nav
          aria-label="Legal links"
          className="flex items-center gap-[11px] z-[0] shrink-0 order-2 sm:order-1"
        >
          <a
            href="#terms"
            className="relative leading-[150%] hover:text-white transition-colors text-[#797c86]"
          >
            Terms &amp; Conditions
          </a>
          <span
            aria-hidden="true"
            className="self-stretch w-px relative border-gray-100 border-solid border-r-[1px] box-border"
          />
          <a
            href="#privacy"
            className="relative leading-[150%] hover:text-white transition-colors text-[#797c86]"
          >
            Privacy Policy
          </a>
        </nav>

        {/* Copyright */}
        <small className="relative leading-[150%] z-[1] text-[#797c86] shrink-0 text-base order-3 sm:order-2 text-center">
          © 2024 Damien Braun Photography. All rights reserved.
        </small>

        {/* Social Icons — centered absolutely on desktop, inline on mobile */}
        <nav
          aria-label="Social media links"
          className="relative sm:absolute sm:top-[calc(50%_-_33.5px)] sm:left-[calc(50%_-_92px)] rounded-[100px] bg-gray border-gray-100 border-solid border-[1px] flex items-center justify-end p-2.5 gap-2.5 z-[2] shrink-0 order-1 sm:order-none"
        >
          <ul className="flex items-center gap-2.5 list-none m-0 p-0">
            <li>
              <a
                href="#"
                aria-label="Follow on Facebook"
                className="btn-icon-animate rounded-[100px] bg-gray-200 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
              >
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  loading="lazy"
                  src={facebook}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Follow on X (Twitter)"
                className="btn-icon-animate rounded-[100px] bg-gray-200 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
              >
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  loading="lazy"
                  src={x}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Follow on LinkedIn"
                className="btn-icon-animate rounded-[100px] bg-gray-200 [background:#1c1c21_padding-box,_linear-gradient(180deg,_#2f2f37_27.85%,_rgba(47,_47,_55,_0))_border-box] [border:1px_solid_transparent] overflow-hidden flex items-center p-3.5"
              >
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  loading="lazy"
                  src={linkdin}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Body;
