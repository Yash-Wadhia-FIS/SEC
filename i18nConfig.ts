interface I18nConfig {
    locales: string[];
    defaultLocale: string;
  }
  
  const i18nConfig: I18nConfig = {
    locales: ["en", "ar"],
    defaultLocale: "en", 
  };
  
  export { i18nConfig };
  