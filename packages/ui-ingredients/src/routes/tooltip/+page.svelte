<script lang="ts">
  import {Portal, Tooltip} from '$lib/index.js';
  import {Button} from '../shared/index.js';
</script>

<Tooltip.Root lazyMount>
  <Tooltip.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Hover me</Button>
    {/snippet}
  </Tooltip.Trigger>

  <Portal data-id="tooltip">
    <Tooltip.Positioner>
      <Tooltip.Content
        class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded px-3.5 py-2.5 shadow-md"
      >
        <Tooltip.Arrow
          class="[--arrow-background:theme(colors.neutral[800])] [--arrow-size:theme(spacing.4)]"
        >
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>

        <span>I am a tooltip</span>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
