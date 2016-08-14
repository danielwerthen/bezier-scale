import { single } from './_base';
import Bezier from 'bezier-js';

function rearrange(arr) {
  return [
    ...arr.slice(4, 6),
    ...arr.slice(0, 2),
    ...arr.slice(2, 4),
    ...arr.slice(6, 8),
  ];
}

export function bezier({
  value,
}) {
  return new Bezier(rearrange(value));
}

export default single(bezier);
