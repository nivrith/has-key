
export function hasKey (object: any, key: keyof any) {
  let val = object[key];
  return (typeof val  !== 'undefined');
}

export default hasKey;