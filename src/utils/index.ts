const round = (value: number, decimals: number): number => Number(`${Math.round(Number(`${value}e${decimals}`))}e-${decimals}`);

export const kelvinToCelsius = (value: number): number => round((value - 273.15), 2);
