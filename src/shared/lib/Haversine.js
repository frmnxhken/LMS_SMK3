export const Haversine = (mk1, mk2) => {
  const R = 6371000; // Radius bumi dalam meter
  const rlat1 = mk1.lat * (Math.PI / 180);
  const rlat2 = mk2.lat * (Math.PI / 180);
  const difflat = rlat2 - rlat1;
  const difflon = (mk2.lng - mk1.lng) * (Math.PI / 180);

  const a =
    Math.sin(difflat / 2) * Math.sin(difflat / 2) +
    Math.cos(rlat1) *
      Math.cos(rlat2) *
      Math.sin(difflon / 2) *
      Math.sin(difflon / 2);

  const d = 2 * R * Math.asin(Math.sqrt(a));
  return d; // Hasil dalam meter
};
