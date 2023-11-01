import { forwardRef } from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  tagName?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
type TypographyTagProps = Omit<TypographyProps, 'tagName'>;

const tagMap = {
  p: forwardRef<HTMLParagraphElement, TypographyTagProps>((props, ref) => {
    return <p ref={ref} {...props} />;
  }),
  h1: forwardRef<HTMLHeadingElement, TypographyTagProps>((props, ref) => {
    return <h1 ref={ref} {...props} />;
  }),
  h2: forwardRef<HTMLHeadingElement, TypographyTagProps>((props, ref) => {
    return <h2 ref={ref} {...props} />;
  }),
  h3: forwardRef<HTMLHeadingElement, TypographyTagProps>((props, ref) => {
    return <h3 ref={ref} {...props} />;
  }),
  h4: forwardRef<HTMLHeadingElement, TypographyTagProps>((props, ref) => {
    return <h4 ref={ref} {...props} />;
  }),
  h5: forwardRef<HTMLHeadingElement, TypographyTagProps>((props, ref) => {
    return <h5 ref={ref} {...props} />;
  }),
  h6: forwardRef<HTMLHeadingElement, TypographyTagProps>((props, ref) => {
    return <h6 ref={ref} {...props} />;
  }),
};

const Typography = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  TypographyProps
>(({ tagName = 'p', ...props }, ref) => {
  const TypographyElement = tagMap[tagName];
  return <TypographyElement {...props} ref={ref} />;
});

export default Typography;
