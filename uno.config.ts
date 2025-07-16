import presetWind4 from '@unocss/preset-wind4';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true, }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});