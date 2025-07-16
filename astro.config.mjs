import svelte from "@astrojs/svelte";
import uno from "@unocss/astro";
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    uno({
      // presetWind4에 내장되어 있으므로 별도 패키지 설치 없이 사용 가능
      injectReset: true,
    }),
    svelte()
  ]
});