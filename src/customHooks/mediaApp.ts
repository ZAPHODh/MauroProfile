export const mediaApp = (app: string) => {
  let hasMediaApp = false;

  if (navigator.userAgent.match(new RegExp(`${app}`, 'i'))) {
    hasMediaApp = true;
  }

  return hasMediaApp;
};
