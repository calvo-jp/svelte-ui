<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateFloatingPanelProps,
    CreateFloatingPanelReturn,
  } from './create-floating-panel.svelte.js';

  export interface FloatingPanelProps
    extends CreateFloatingPanelProps,
      PresenceStrategyProps {
    children?: Snippet<[CreateFloatingPanelReturn]>;
  }
</script>

<script lang="ts">
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createFloatingPanel} from './create-floating-panel.svelte.js';
  import {setFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {children, ...props}: FloatingPanelProps = $props();

  let [presenceStrategyProps, createFloatingPanelProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let floatingPanel = createFloatingPanel(
    reflect(() => createFloatingPanelProps),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: floatingPanel.open,
    })),
  );

  setFloatingPanelContext(floatingPanel);
  setPresenceContext(presence);
</script>

{@render children?.(floatingPanel)}
