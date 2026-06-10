export const maskShape = (width, height) => [
    `M0 0`,
    `H${width}`,
    `V${height}`,
    `H0`,
    `Z`,
];

export const maskCutout = (radius, top, right, bottom, left) => [
    `M${left + radius} ${top}`,
    `H${right - radius}`,
    `A${radius} ${radius} 0 0 1 ${right} ${top + radius}`,
    `V${bottom - radius}`,
    `A${radius} ${radius} 0 0 1 ${right - radius} ${bottom}`,
    `H${left + radius}`,
    `A${radius} ${radius} 0 0 1 ${left} ${bottom - radius}`,
    `V${top + radius}`,
    `A${radius} ${radius} 0 0 1 ${left + radius} ${top}`,
    `Z`,
];
