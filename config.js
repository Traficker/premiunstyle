const CONFIG = {
  brandName: "PREMIUN STYLE",
  brandSigla: "Premiun style",
  legalEntity: "PREMIUN STYLE",
  nit: "900.492.634-4",
  camaraComercio: "Cámara de Comercio de Barranquilla (Inscripción No. 535.160)",
  domain: "premiunstyle.site",
  url: "https://premiunstyle.site",
  phoneDisplay: "+57 310 446 2657",
  phoneRaw: "573104462657",
  email: "contacto@premiunstyle.site",
  address: "CR 43 B No 98 - 36",
  city: "Barranquilla, Atlántico",
  postalCode: "080020",
  country: "Colombia",
  whatsappBase: "https://wa.me/573104462657",
  prices: {
    unitPromo: 37900,
    minUnits: 3,
    combos: [
      { qty: 3, total: 113700, label: "Combo 3 Camisetas (Mínimo)", popular: true, savings: "Ahorras $36.000" },
      { qty: 4, total: 149900, label: "Combo 4 Camisetas (Favorito)", popular: false, savings: "Ahorras $50.000" },
      { qty: 5, total: 185000, label: "Combo 5 Camisetas (Look Total)", popular: false, savings: "Ahorras $65.000" }
    ]
  }
};
if (typeof module !== 'undefined') module.exports = CONFIG;
