const str = `
010-1234-1234
abc@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
abbcccdddd
`;

console.log(str.match(/(?<=@).{1,}/g));
