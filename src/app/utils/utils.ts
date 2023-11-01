const classNames = (...classes: Array<string | undefined>) => {
  return classes.filter(Boolean).join(' ');
};

export { classNames };
