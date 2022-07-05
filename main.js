let str = `
010-1234-1234.
abc@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
aaabbbcccdddd est EST
`;

// const regexp = new RegExp("est", "gi"); // g 모두 찾기 i 대소문자 구분 하지 않음
// const regexp = /porro/gi;
console.log(str.match(/\.$/gim));

// 정규 표현식에서 .(마침표)는 특정한 문자를 검색하는 패턴이다.
// 여기서 사용하고자 하는 것은 문자로서의 .(마침표)임으로 이스케이프 문자화한다.
