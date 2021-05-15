export const formatPriceWithCurrency = (value) => {
  if (value > 0) {
    return `${value.toFixed(2).replace(/\./g, ",")} zł`;
  }
  return "Darmowe";
};

export const formatDuration = (value) => {
  if (typeof value === "string") {
    const duration = value.split(":");
    return `${duration[0]} h ${duration[1]} min`;
  }
};
