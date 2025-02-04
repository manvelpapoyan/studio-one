  export function findFibonacciSequence(num:number) {
        let a = 0, b = 1;
        while (b < num) {
            const temp = a + b;
            a = b;
            b = temp;
        }

        return a + b;
}

export const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
