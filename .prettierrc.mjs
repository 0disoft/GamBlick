/** @type {import("prettier").Config} */
export default {
  // 프로젝트 가이드라인에 따른 코드 라인 길이
  printWidth: 80,
  // 탭 너비는 2칸
  tabWidth: 2,
  // 작은따옴표 사용
  singleQuote: true,
  // 후행 쉼표를 가능한 모든 곳에 추가합니다.
  trailingComma: 'all',
  // 세미콜론 사용 안 함 (선택사항, 가이드라인에 명시되지 않아 일반적인 스타일로 설정)
  semi: false,
  // 설치한 플러그인 등록
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  // Astro 파일에 대한 파서 지정
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};