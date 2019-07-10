
export function keyExists (object: any, key: keyof any) {
  let val = object[key];
  return (typeof val  !== 'undefined');
}

export default keyExists;