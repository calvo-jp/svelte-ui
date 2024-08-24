import {getEnvironmentContext} from '$lib/environment-provider/index.js';
import {getLocaleContext} from '$lib/locale-provider/index.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import {normalizeProps, reflect} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';

export interface CreateToasterProps {
  id?: string | null;
  max?: toast.GroupMachineContext['max'];
  gap?: toast.GroupMachineContext['gap'];
  hotkey?: toast.GroupMachineContext['hotkey'];
  offsets?: toast.GroupMachineContext['offsets'];
  overlap?: toast.GroupMachineContext['overlap'];
  duration?: toast.GroupMachineContext['duration'];
  placement?: toast.GroupMachineContext['placement'];
  removeDelay?: toast.GroupMachineContext['removeDelay'];
  pauseOnPageIdle?: toast.GroupMachineContext['pauseOnPageIdle'];
}

export interface CreateToasterReturn extends ReturnType<typeof createToaster> {}

export function createToaster(props?: CreateToasterProps) {
  const localContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const machine = $derived(
    toast.group.machine({
      ...props,
      id: props?.id ?? createUniqueId(),
      dir: localContext?.dir,
      getRootNode: environmentContext?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => ({
      machine,
      ...toast.group.connect(machine, machine.send, normalizeProps),
    })),
  );

  return api;
}
