import { set } from '../redux';

export default function setValueFor(curveIndex) {
  return function handleMove(index, x, y) {
    return set({
      [`curves[curveIndex].value[${index * 2}]`]: x,
      [`curves[curveIndex].value[${index * 2 + 1}]`]: y,
    });
  };
}
