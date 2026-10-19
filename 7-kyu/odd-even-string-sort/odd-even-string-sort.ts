export function sortMyString(s:string):string {
    const arr = s.split('');
​
    const evenIndex = arr.filter((_,i)=> i%2===0).join('');
    const oddIndex = arr.filter((_,i)=> i%2!==0).join('');
​
    return `${evenIndex} ${oddIndex}`;
}
​
​