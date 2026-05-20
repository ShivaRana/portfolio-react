import { useState } from 'react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 30) {
      setVisible(true);
    } else if (scrolled <= 30) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      id="btn-top"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <i className="bi bi-caret-up"></i>
    </button>
  );
};
