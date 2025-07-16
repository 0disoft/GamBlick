<script lang="ts">
  // 1. 'class-variance-authority'에서 cva를 가져옵니다.
  import { cn } from "$lib/utils";
  import { cva, type VariantProps } from "class-variance-authority";

  // 2. tv() 대신 cva() 함수를 사용합니다. 기본 클래스가 첫 인자로 들어갑니다.
  const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        },
        size: {
          default: "h-10 px-4 py-2",
          lg: "h-11 rounded-md px-8",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  type Variant = VariantProps<typeof buttonVariants>["variant"];
  type Size = VariantProps<typeof buttonVariants>["size"];

  export let variant: Variant = "default";
  export let size: Size = "default";
  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<button
  class={cn(buttonVariants({ variant, size, className }))}
  on:click
  {...$$restProps}
>
  <slot />
</button>
