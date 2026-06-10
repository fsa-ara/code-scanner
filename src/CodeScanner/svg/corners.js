export const corners = (radius, top, right, bottom, left) => [
    `M${left} ${top + radius}`,
    `A${radius} ${radius} 0 0 1 ${left + radius} ${top}`,
    `M${right - radius} ${top}`,
    `A${radius} ${radius} 0 0 1 ${right} ${top + radius}`,
    `M${right} ${bottom - radius}`,
    `A${radius} ${radius} 0 0 1 ${right - radius} ${bottom}`,
    `M${left + radius} ${bottom}`,
    `A${radius} ${radius} 0 0 1 ${left} ${bottom - radius}`,
];
