<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/pagination';

  export interface PaginationItemProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      Omit<ItemProps, 'type'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPaginationContext} from './pagination-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    asChild,
    children,
    ...props
  }: PaginationItemProps = $props();

  let pagination = getPaginationContext();

  let mergedProps = $derived(
    mergeProps(
      pagination.getItemProps({
        type: 'page',
        value,
      }),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {value}
    {/if}
  </button>
{/if}
