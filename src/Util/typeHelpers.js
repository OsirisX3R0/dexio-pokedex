export const getDamageValueBackground = value => {
    return value === 4
        ? '#218698'
        : value === 2
            ? '#0a0'
            : value === 0.5
                ? '#a00'
                : value === 0.25
                    ? '#b45600'
                    : value === 0 
                        ? '#333'
                        : 'transparent';
}