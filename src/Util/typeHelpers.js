export const getDamageValueBackground = value => {
    return value === 2
        ? '#0a0'
        : value === 1
            ? 'transparent'
            : value === 0 
                ? '#333'
                : '#a00';
}