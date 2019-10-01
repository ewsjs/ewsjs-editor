
export const getEnumMembers = _enum => Object.keys(_enum).filter((x) => isNaN(Number(x))).map(y => ({ key: y, text: y }))
