export const observeForElement = (element, callback) => {
  const intersect = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    if (entries[0].intersectionRatio <= 0) return;
    callback();
  });

  intersect.observe(element);
};
