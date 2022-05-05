export const convertTZ = (time, tzString) => {
  let date = new Date(time * 1000);
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
};
