import { get } from "lodash";
import { useRouter } from "next/router";
import ar from "../public/locales/ar.json";
import en from "../public/locales/en.json";

// console.log(data, "datadata");
const useTranslation = () => {
  const router = useRouter();
  const T = (path: any) => {
    return router.locale === "en" ? get(en, path) : get(ar, path);
    // return get(data, path);
  };
  const locale = router.locale;
  return { T, locale };
};
export default useTranslation;
