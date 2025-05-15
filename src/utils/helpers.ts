// src/utils/scrollHelpers.ts
export const handleScroll = (href: string, offset: number = 130) => {
  const target = document.querySelector(href);

  if (target) {
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
};
