<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface ColorPickerContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerContentProps = $props();

  let colorPicker = getColorPickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      colorPicker.getContentProps(),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.setReference, mergedProps)}
  {:else}
    <div bind:this={ref} use:presence.setReference {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
