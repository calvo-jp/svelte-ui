<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {SegmentPathProps} from '@zag-js/signature-pad';

  export interface SignaturePadSegmentPathProps
    extends Assign<
      HtmlIngredientProps<'path', SVGPathElement>,
      SegmentPathProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    ref = $bindable(null),
    path,
    asChild,
    children,
    ...props
  }: SignaturePadSegmentPathProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(
    mergeProps(signaturePad.getSegmentPathProps({path}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <path bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </path>
{/if}
