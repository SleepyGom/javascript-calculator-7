export default class Seperator{

    static replaceAndCalculate(input) {
        // 커스텀 구분자 찾기
        const customSeparatorMatch = input.match(/\/\/(.*?)\\n/);
        let separator;
    
        if (customSeparatorMatch) {
            // 커스텀 구분자가 존재하는 경우
            separator = customSeparatorMatch[1]; // 커스텀 구분자
            // 커스텀 구분자를 +로 바꿈
            input = input.replace(/\/\/.*?\\n/, ''); // 커스텀 구분자 제거
        } else {
            // 기본 구분자 설정
            if (input.includes(',')) {
                separator = ',';
            } else if (input.includes(';')) {
                separator = ';';
            } else if (input.includes(':')) {
                separator = ':';
            } else {
                return "구분자가 없습니다."; // 구분자가 없을 경우
            }
        }
    
        // 구분자를 +로 바꾸고 숫자 배열로 변환
        // ','와 ':' 모두를 +로 변경
        input = input.replace(/[,;:]/g, '+');
        let result = eval(input)
        // 음수 숫자가 있는지 확인
        if (input.match(/-\d+/)) {
            throw new Error("[ERROR] 음수 숫자는 허용되지 않습니다."); // 에러 발생
        }
    
        // 문자열을 계산하여 결과 반환
        return `결과 : ${result}`; // eval을 사용하여 계산
    }
}
