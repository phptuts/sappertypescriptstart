export const getEnvParam = (property, defaultString = 'unknown'): string => {
  const potentialProp = process['env'][property];
  if (typeof potentialProp === 'string') {
    return potentialProp;
  }
  return defaultString;
};
