export const filters = [
  { id: "todos", label: "Todos" },
  { id: "autos", label: "Autos" },
  { id: "pickups", label: "Pickups y Comerciales" },
  { id: "suvs", label: "SUVs y Crossovers" },
];

export const options = [
  { id: "nada", label: <>Nada</> },
  {
    id: "precio-asc",
    label: (
      <>
        De <strong>menor</strong> a <strong>mayor</strong> precio
      </>
    ),
  },
  {
    id: "precio-desc",
    label: (
      <>
        De <strong>mayor</strong> a <strong>menor</strong> precio
      </>
    ),
  },
  {
    id: "nuevos",
    label: (
      <>
        Más <strong>nuevos</strong> primero
      </>
    ),
  },
  {
    id: "viejos",
    label: (
      <>
        Más <strong>viejos</strong> primero
      </>
    ),
  },
];
