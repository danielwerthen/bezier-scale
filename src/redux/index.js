export function set(changes) {
  return {
    sym: set,
    changes,
  };
}

export function updatePoint(name, value) {
  return {
    sym: updatePoint,
    name,
    value,
  };
}
