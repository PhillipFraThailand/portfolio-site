import { CSSProperties, FC, ReactNode } from "react";
import styles from "./animatedWrapper.module.css";
type AnimatedWrapperProps = {
  index: number;
  children: ReactNode;
};

// Wraps components and adds an animation delay based on the index prop.
export const AnimatedWrapper: FC<AnimatedWrapperProps> = ({
  index,
  children,
}) => {
  const style = { "--i": index + 1 } as CSSProperties; // Cast to avoid ts error.

  return (
    <div className={styles.animate} style={style}>
      {children}
    </div>
  );
};
