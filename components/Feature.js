import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import useTranslation from "../hook/useTranslation";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { T, locale } = useTranslation();

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto overflow-hidden"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png" //change image
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center ml-auto w-full sm:w-11/12 lg:w-9/12"
            variants={scrollAnimation}
            dir={locale === "en" ? "ltr" : "rtl"}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              {T("features.h1")}
            </h3>
            <p className="my-2 text-black-500">{T("features.p")}</p>
            <ul className="text-black-500 self-start list-inside ml-8">
              <motion.li
                className={`relative circle-check custom-list ${
                  locale === "ar" ? "rtl-circle-check" : ""
                }`}
                custom={{ duration: 3 }}
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {T("features.feature1")}
              </motion.li>
              <motion.li
                className="relative circle-check custom-list"
                custom={{ duration: 3 }}
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {T("features.feature2")}
              </motion.li>
              <motion.li
                className="relative circle-check custom-list"
                custom={{ duration: 3 }}
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {T("features.feature3")}
              </motion.li>
              <motion.li
                className="relative circle-check custom-list"
                custom={{ duration: 3 }}
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {T("features.feature4")}
              </motion.li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
