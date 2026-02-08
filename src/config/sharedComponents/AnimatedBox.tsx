import { motion } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';

interface AnimatedBoxProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const AnimatedBox = forwardRef<HTMLDivElement, AnimatedBoxProps>(
  ({ children, style }, ref) => (
    <motion.div
      ref={ref}
      initial={{ y: -48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      style={{
        ...style,
      }}
    >
      {children}
    </motion.div>
  ),
);

AnimatedBox.displayName = 'AnimatedBox';
