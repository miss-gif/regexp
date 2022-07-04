const str = `
010-1234-1234
abc@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
aaabbbcccdddd est EST
`;

// const regexp = new RegExp("est", "gi"); // g 모두 찾기 i 대소문자 구분 하지 않음
const regexp = /est/gi;
console.log(str.match(regexp));
