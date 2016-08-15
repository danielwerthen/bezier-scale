export function single(foo, name) {
  if (!name) throw new Error('Need prop name');
  return props => {
    return {
      ...props,
      [name]: foo(props),
    };
  };
}
