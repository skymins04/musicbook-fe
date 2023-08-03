export const getCookie = (cookies: string | undefined, name: string) => {
  const array = cookies?.split(escape(name) + "=");
  if (array && array.length >= 2) {
    const arraySub = array[1].split(";");
    return unescape(arraySub[0]);
  }
  return undefined;
};
