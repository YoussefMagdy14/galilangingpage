// pages/index.js
import { useRouter } from "next/router";
import useTranslation from "../hook/useTranslation";
import { LuLanguages } from "react-icons/lu";

export default function Home() {
  const { T } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lang) => {
    router.push(router.asPath, router.asPath, {
      locale: lang,
    });
  };

  return (
    // <div>
    //   <nav>
    //     {router.locales &&
    //       router.locales.map((loc) => (
    //         <button key={loc} onClick={() => changeLanguage(loc)} locale={loc}>
    //           <div>
    //              {loc}
    //           <LuLanguages />
    //           </div>

    //         </button>
    //       ))}
    //   </nav>
    // </div>
    <div>
      <nav className="flex space-x-4">
        {router.locales &&
          router.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => changeLanguage(loc)}
              locale={loc}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <div className="flex items-center space-x-2">
                <span>{loc === "en" ? "English" : "العربيه"}</span>
              </div>
            </button>
          ))}
      </nav>
    </div>
  );
}
