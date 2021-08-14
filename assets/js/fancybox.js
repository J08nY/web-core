(function() {
  const i18n = {
    cs: {
      CLOSE: 'Zavřít',
      NEXT: 'Další',
      PREV: 'Předchozí',
      DOWNLOAD: 'Stáhnout',
    },
    sk: {
      CLOSE: 'Zavrieť',
      NEXT: 'Ďalší',
      PREV: 'Predchádzajúca',
      DOWNLOAD: 'Stiahnuť',
    },
  };

  const defaults = $.fancybox.defaults;
  defaults.lang = window.fakta.lang;
  defaults.buttons = [
    'close',
  ];
  for (const [lang, values] of Object.entries(i18n)) {
    defaults.i18n[lang] = {
      ...defaults.i18n.en,
      ...values,
    };
  }
})();
