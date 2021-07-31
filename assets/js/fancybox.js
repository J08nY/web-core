(function() {
  const l10n = {
    cs: {
      CLOSE: "Zavřít",
      NEXT: "Další",
      PREV: "Předchozí",
      MODAL: "Stiskněte ESC pro zavření okna",
    },
    sk: {
      CLOSE: "Zavrieť",
      NEXT: "Ďalší",
      PREV: "Predchádzajúca",
      MODAL: "Stlačte ESC pre zatvorenie okna",
    },
  }

  Fancybox.bind("[data-fancybox]", {
    l10n: {
      ...Fancybox.defaults.l10n,
      ...l10n[window.fakta.lang],
    },
  });
})();
