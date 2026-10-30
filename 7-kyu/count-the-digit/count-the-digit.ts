export class G964 {
    public static nbDig(n: number, d: number): number {
        let count = 0;
        const targetDigit = d.toString();
​
        for (let k = 0; k <= n; k++) {
            const squareStr = (k * k).toString();
            
            for (const char of squareStr) {
                if (char === targetDigit) {
                    count++;
                }
            }
        }
​
        return count;
    }
}
​