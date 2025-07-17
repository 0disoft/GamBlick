# Astro DB 초기 설정 및 스키마 정의

## 1. 작업 개요

Astro DB를 프로젝트에 통합하고, 초기 데이터베이스 스키마(Users, Games, Scores 테이블)를 정의했습니다. 또한, `astro:db` 모듈 인식 오류를 해결하기 위해 `tsconfig.json` 파일을 수정했습니다.

## 2. 변경된 파일 목록

- `astro.config.mjs`
- `db/config.ts`
- `tsconfig.json`

## 3. 특이사항 및 참고

- `@astrojs/db` 통합 설치 및 `astro.config.mjs`에 추가.
- `db/config.ts` 파일에 Drizzle ORM을 사용하여 Users, Games, Scores 테이블 스키마 정의.
- `astro.config.mjs`에서 `defineDb`를 잘못 호출하여 발생한 오류 수정.
- `bunx astro db sync` 명령어가 더 이상 필요 없다는 메시지 확인 (Astro DB 최신 버전에서 자동 처리).
- `db/config.ts`에서 `astro:db` 모듈을 인식하지 못하는 TypeScript 오류 해결을 위해 `tsconfig.json`의 `compilerOptions.types`에 `@astrojs/db` 추가.