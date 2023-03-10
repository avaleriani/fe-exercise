export const formattedDate = (
  value: string | undefined,
  locale: string = "en-US"
) => {
  if (value) {
    const formattedDate = new Date(value).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  }
};

export const getOnlyYear = (value: string | undefined) => {
  if (value) {
    return new Date(value).getFullYear();
  }
};
