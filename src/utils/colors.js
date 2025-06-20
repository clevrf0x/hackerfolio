export const colorMap = {
  red: 'red',
  green: 'green',
  blue: 'blue',
  purple: 'purple',
  orange: 'orange',
  yellow: 'yellow',
  white: 'white',
};

export function getActiveColor(mode) {
  return colorMap[mode] || 'green';
}
