<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreatePaginationProps,
    CreatePaginationReturn,
  } from './create-pagination.svelte.js';

  export interface PaginationProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreatePaginationReturn>,
      CreatePaginationProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createPagination} from './create-pagination.svelte.js';
  import {setPaginationContext} from './pagination-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PaginationProps = $props();

  let [createPaginationProps, localProps] = $derived(
    createSplitProps<CreatePaginationProps>([
      'id',
      'ids',
      'type',
      'page',
      'pageSize',
      'count',
      'siblingCount',
      'translations',
      'onPageChange',
      'onPageSizeChange',
    ])(props),
  );

  let pagination = createPagination(reflect(() => createPaginationProps));

  let mergedProps = $derived(mergeProps(pagination.getRootProps(), localProps));

  setPaginationContext(pagination);
</script>

{#if asChild}
  {@render asChild(mergedProps, pagination)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(pagination)}
  </div>
{/if}
