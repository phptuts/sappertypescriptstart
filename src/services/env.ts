export const getEnvParam = (property, defaultString = 'unknown'): string => {
  const potentialProp = process['env'][property];
  if (typeof potentialProp === 'string') {
    return potentialProp;
  }
  return defaultString;
};

export const isBrowser = () => {
  return Boolean(process['env']['browser']) === true;
}
