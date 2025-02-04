export const generateFibonacci = (index: number): number => {
    if (index <= 1) return index;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= index; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

export const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
