let str = `
010-1234-1234.
abc@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
aaabbbcccdddd airi AIRI
`;

console.log(str.match(/\b\w{2,3}\b/g));
