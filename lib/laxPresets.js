const laxPresets = [
  {
    name: "fadeInOutA",
    options: {
      "data-lax-opacity": "(vh*0.85) 0, (vh*0.70) 1, (vh*0.3) 1, (vh*0.2) 0",
    },
  },
  {
    name: "scaleInFadeOut",
    options: {
      "data-lax-scale": "(elh) 0, (-vh*0.01) 1, (-vh*0.3) 1, (-vh*0.8) 14",
      "data-lax-opacity": "(elh) 0, (-vh*0.01) 1",
      "data-lax-border-radius": "(elh) 4, (-vh*0.01) 20",
      "data-lax-translate-3d-rel": `(vh) -50, 0 -50`,
    },
  },
  {
    name: "videoMaskFade",
    options: {
      "data-lax-opacity": "(-vh*0.98) 1, (-vh*1.6) 0",
    },
  },
  {
    name: "videoScale",
    options: {
      "data-lax-scale": "(-vh*0.98) 2, (-vh*1.6) 1",
      // "data-lax-opacity": "(-vh*0.6) 0, (-vh*0.85) 1"
      // "data-lax-translate-3d-rel": `(vh) -50, 0 -50`
    },
  },
];

export default laxPresets;
