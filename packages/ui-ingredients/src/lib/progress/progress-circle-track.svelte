<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressCircleTrackProps
    extends HtmlIngredientProps<'circle', SVGCircleElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressCircleTrackProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(progress.getCircleTrackProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <circle bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </circle>
{/if}
