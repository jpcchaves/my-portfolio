// Hooks
import { useEffect, useState } from "react";
// Utils
import { classNames } from "../../utils/classNames";
import { Button } from "./style";
// styled-components

const ButtonTop = () => {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <Button
        type="button"
        onClick={scrollToTop}
      >
        &#9650;
      </Button>
    </>
  );
};

export default ButtonTop;
