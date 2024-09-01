import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as checkbox from '@zag-js/checkbox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateCheckboxProps
  extends Omit<checkbox.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateCheckboxReturn extends checkbox.Api {}

export function createCheckbox(
  props: CreateCheckboxProps,
): CreateCheckboxReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    checkbox.machine({
      ids: {
        label: field?.ids.label,
        hiddenInput: field?.ids.control,
      },
      invalid: field?.invalid,
      disabled: field?.disabled,
      readOnly: field?.readOnly,
      required: field?.required,
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => checkbox.connect(state, send, normalizeProps)),
  );

  return api;
}
