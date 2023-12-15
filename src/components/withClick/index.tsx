import { motion, HTMLMotionProps, MotionStyle } from "framer-motion";

export function withClick<T extends HTMLMotionProps<"div">>(Component: any) {
  return function ClickableComponent(props: any) {
    return <Component {...props} />;
  };
}
