<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardTriggerProps
    extends HtmlIngredientProps<'a', HTMLAnchorElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getHoverCardContext} from './hover-card-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: HoverCardTriggerProps = $props();

  let hoverCard = getHoverCardContext();

  let mergedProps = $derived(mergeProps(hoverCard.getTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <a bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </a>
{/if}
