import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveals its children with a fade + lift the first time they scroll into
 * view. Pass a `delay` to stagger siblings into a waterfall. Honors the
 * user's reduced-motion preference by rendering content immediately.
 */
const Reveal = ({ children, delay = 0, y = 24, sx, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate3d(0, ${y}px, 0)`,
        transition:
          "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  y: PropTypes.number,
  sx: PropTypes.object,
};

export default Reveal;
