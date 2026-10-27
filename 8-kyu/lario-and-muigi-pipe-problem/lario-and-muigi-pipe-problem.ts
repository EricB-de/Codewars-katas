export const pipeFix = (pipes: number[]): number[] => {
    const start = pipes[0];
    const end = pipes[pipes.length - 1];
    
    const fixedPipes: number[] = [];
    
    for (let i = start; i <= end; i++) {
        fixedPipes.push(i);
    }
    
    return fixedPipes;
}
​