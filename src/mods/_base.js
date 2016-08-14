export function single(foo, name) {
  if (!name && !foo.name) throw new Error('Need prop name');
  return props => {
    return {
      ...props,
      [name || foo.name]: foo(props),
    };
  };
}
