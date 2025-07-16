// @ts-check
import UnoCSS from '@unocss/astro'; // 1. UnoCSS를 import 합니다.
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS(), // 2. integrations 배열에 추가합니다.
  ],
});
