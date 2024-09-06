export const apenasVogais = (str) => {
    const vogaiss = 'aeiouAEIOU';
    return str.split('').filter(char => vogaiss.includes(char)).length;
}













