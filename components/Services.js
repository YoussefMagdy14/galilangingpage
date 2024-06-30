import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import useTranslation from "../hook/useTranslation";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { T, locale } = useTranslation();

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="services"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
          <div className="relative">
            <ScrollAnimationWrapper className="relative w-full mt-16">
              <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                    <div>
                      {/* <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </span>
                  </div> */}
                      <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white ">
                          {T("servicescar.h1")}
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 ">
                          {T("servicescar.p")}
                        </p>
                        {/* <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        href="/login"
                      >
                        Learn More
                      </a>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        width={647}
                        height={486}
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ color: "transparent" }}
                        src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                    <div>
                      <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white ">
                          {T("servicesmotorcycle.h1")}
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 ">
                          {T("servicesmotorcycle.p")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        width={646}
                        height={485}
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ color: "transparent" }}
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                    <div>
                      <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white ">
                          {T("servicestuktok.h1")}
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                          {T("servicestuktok.p")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        width={646}
                        height={485}
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ color: "transparent" }}
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              {T("testimonilist.h1")}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              {T("testimonilist.p")}
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <div id="getourapp">
            <ScrollAnimationWrapper className="relative w-full mt-16">
              <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                  <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                      {T("ourapp.h1")}
                      <br />
                      {T("ourapp.p")}
                    </h5>
                  </div>
                  <p>add two QR code </p>
                </div>
                <div
                  className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                  style={{ filter: "blur(114px)" }}
                ></div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

// export function Code() {
//   return (
//     <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
//       <div className="flex flex-col w-full">
//         <ScrollAnimationWrapper>
//           <motion.h3
//             variants={scrollAnimation}
//             className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
//           >
//             Choose Your Plan
//           </motion.h3>
//           <motion.p
//             variants={scrollAnimation}
//             className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
//           >
//             Let's choose the package that is best for you and explore it happily
//             and cheerfully.
//           </motion.p>
//         </ScrollAnimationWrapper>
//         <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
//           <ScrollAnimationWrapper className="flex justify-center">
//             <motion.div
//               variants={scrollAnimation}
//               className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
//               whileHover={{
//                 scale: 1.1,
//                 transition: {
//                   duration: 0.2,
//                 },
//               }}
//             >
//               <div className="p-4 lg:p-0 mt-6 lg:mt-16">
//                 <Image
//                   src="/assets/Free.png"
//                   width={145}
//                   height={165}
//                   alt="Free Plan"
//                 />
//               </div>
//               <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
//                 Free Plan
//               </p>
//               <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
//                 <li className="relative check custom-list my-2">
//                   Unlimited Bandwitch
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Encrypted Connection
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   No Traffic Logs
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Works on All Devices
//                 </li>
//               </ul>
//               <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
//                 <p className="text-2xl text-black-600 text-center mb-4 ">
//                   Free
//                 </p>
//                 <ButtonOutline>Select</ButtonOutline>
//               </div>
//             </motion.div>
//           </ScrollAnimationWrapper>
//           <ScrollAnimationWrapper className="flex justify-center">
//             <motion.div
//               variants={scrollAnimation}
//               className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
//               whileHover={{
//                 scale: 1.1,
//                 transition: {
//                   duration: 0.2,
//                 },
//               }}
//             >
//               <div className="p-4 lg:p-0 mt-6 lg:mt-16">
//                 <Image
//                   src="/assets/Standard.png"
//                   width={145}
//                   height={165}
//                   alt="Standard Plan"
//                 />
//               </div>
//               <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
//                 Standard Plan{" "}
//               </p>
//               <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
//                 <li className="relative check custom-list my-2">
//                   Unlimited Bandwitch
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Encrypted Connection
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   No Traffic Logs
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Works on All Devices
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Connect Anyware{" "}
//                 </li>
//               </ul>
//               <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
//                 <p className="text-2xl text-black-600 text-center mb-4 ">
//                   $9 <span className="text-black-500">/ mo</span>
//                 </p>
//                 <ButtonOutline>Select</ButtonOutline>
//               </div>
//             </motion.div>
//           </ScrollAnimationWrapper>
//           <ScrollAnimationWrapper className="flex justify-center">
//             <motion.div
//               variants={scrollAnimation}
//               className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
//               whileHover={{
//                 scale: 1.1,
//                 transition: {
//                   duration: 0.2,
//                 },
//               }}
//             >
//               <div className="p-4 lg:p-0 mt-6 lg:mt-16">
//                 <Image
//                   src="/assets/Premium.png"
//                   width={145}
//                   height={165}
//                   alt="Premium Plan"
//                 />
//               </div>
//               <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
//                 Premium Plan{" "}
//               </p>
//               <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
//                 <li className="relative check custom-list my-2">
//                   Unlimited Bandwitch
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Encrypted Connection
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   No Traffic Logs
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Works on All Devices
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Connect Anyware{" "}
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Get New Features{" "}
//                 </li>
//               </ul>
//               <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
//                 <p className="text-2xl text-black-600 text-center mb-4 ">
//                   $12 <span className="text-black-500">/ mo</span>
//                 </p>

//                 <ButtonOutline>Select</ButtonOutline>
//               </div>
//             </motion.div>
//           </ScrollAnimationWrapper>
//         </div>
//       </div>
//       <div className="flex flex-col w-full my-16">
//         <ScrollAnimationWrapper>
//           <motion.h3
//             variants={scrollAnimation}
//             className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
//           >
//             Huge Global Network of Fast VPN{" "}
//           </motion.h3>
//           <motion.p
//             className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
//             variants={scrollAnimation}
//           >
//             See LaslesVPN everywhere to make it easier for you when you move
//             locations.
//           </motion.p>
//         </ScrollAnimationWrapper>
//         <ScrollAnimationWrapper>
//           <motion.div
//             className="py-12 w-full px-8 mt-16"
//             variants={scrollAnimation}
//           >
//             <Maps className="w-full h-auto" />
//           </motion.div>
//         </ScrollAnimationWrapper>
//         <ScrollAnimationWrapper>
//           <motion.div
//             className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
//             variants={scrollAnimation}
//           >
//             {/* <Netflix className="h-18 w-auto" /> */}
//             <img
//               src="/assets/Icon/amazon.png"
//               className="h-14 w-auto mt-4 lg:mt-2"
//               alt=""
//             />
//             <img
//               src="/assets/Icon/netflix.png"
//               className="h-14 w-auto mt-2 lg:mt-0"
//               alt=""
//             />
//             <img
//               src="/assets/Icon/reddit.png"
//               className="h-12 w-auto mt-2 lg:mt-0"
//               alt=""
//             />
//             <img
//               src="/assets/Icon/discord.png"
//               className="h-14 w-auto mt-2 lg:mt-0"
//               alt=""
//             />
//             <img
//               src="/assets/Icon/spotify.png"
//               className="h-12 w-auto mt-2 lg:mt-0"
//               alt=""
//             />
//           </motion.div>
//         </ScrollAnimationWrapper>
//       </div>
//       <div className="flex flex-col w-full my-16" id="testimoni">
//         <ScrollAnimationWrapper>
//           <motion.h3
//             variants={scrollAnimation}
//             className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
//           >
//             Trusted by Thousands of Happy Customer{" "}
//           </motion.h3>
//           <motion.p
//             variants={scrollAnimation}
//             className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
//           >
//             These are the stories of our customers who have joined us with great
//             pleasure when using this crazy feature.
//           </motion.p>
//         </ScrollAnimationWrapper>
//         <ScrollAnimationWrapper className="w-full flex flex-col py-12">
//           <motion.div variants={scrollAnimation}>
//             <Testimoni />
//           </motion.div>
//         </ScrollAnimationWrapper>
//         <ScrollAnimationWrapper className="relative w-full mt-16">
//           <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
//             <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
//               <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
//                 <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
//                   Subscribe Now for <br /> Get Special Features!
//                 </h5>
//                 <p>Let's subscribe with us and find the fun.</p>
//               </div>
//               <ButtonPrimary>Get Started</ButtonPrimary>
//             </div>
//             <div
//               className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
//               style={{ filter: "blur(114px)" }}
//             ></div>
//           </motion.div>
//         </ScrollAnimationWrapper>
//       </div>
//     </div>
//   );
// }
