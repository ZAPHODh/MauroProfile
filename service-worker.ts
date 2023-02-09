export const installEvent = () => {
  console.log('Service worker installed');
};

export const fetchEvent = () => {
  console.log('Service worker fetching');
};

self.addEventListener('install', installEvent);
self.addEventListener('fetch', fetchEvent);
