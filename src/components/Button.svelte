<script lang="ts">
  import { cn, buttonVariants } from "../lib/utils";
  import type { ButtonVariants } from "../lib/utils";

  let count = 0;

  function handleClick() {
    count += 1;
  }

  export let variant: ButtonVariants["variant"] = "default";
  export let size: ButtonVariants["size"] = "default";
  export let className: string = "";
</script>

<button
  class={cn(buttonVariants({ variant, size, className }))}
  on:click={handleClick}
>
  <slot /> {count}
</button>
