<script lang="ts">
  import {Menu, Portal} from '$lib/index.js';
  import {CheckIcon, ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Button} from '../shared/index.js';

  let items = [
    {value: 'Item 1'},
    {value: 'Item 2'},
    {value: 'Item 3'},
    {value: 'Item 4'},
    {value: 'Item 5', disabled: true},
  ];

  let selected: string[] = $state([]);
</script>

<div class="flex gap-2">
  <Menu.Root
    lazyMount
    onSelect={(details) => {
      console.log(details.value);
    }}
  >
    <Menu.Trigger>
      {#snippet asChild(attrs)}
        <Button {...attrs}>
          <span>Basic</span>
          <Menu.Indicator
            class="data-open:rotate-180 transition-transform duration-200"
          >
            <ChevronDownIcon />
          </Menu.Indicator>
        </Button>
      {/snippet}
    </Menu.Trigger>

    <Portal data-id="menu">
      <Menu.Positioner>
        <Menu.Content
          class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
        >
          {#each items as item (item.value)}
            <Menu.Item
              class="data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:bg-lighter/50 flex w-32 cursor-default items-center rounded px-2.5 py-1"
              value={item.value}
              disabled={item.disabled}
            >
              {item.value}
            </Menu.Item>
          {/each}
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>

  <Menu.Root lazyMount>
    <Menu.Trigger>
      {#snippet asChild(attrs)}
        <Button {...attrs}>
          <span>Checkbox</span>
          <Menu.Indicator
            class="data-open:rotate-180 transition-transform duration-200"
          >
            <ChevronDownIcon />
          </Menu.Indicator>
        </Button>
      {/snippet}
    </Menu.Trigger>

    <Portal data-id="menu">
      <Menu.Positioner>
        <Menu.Content
          class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
        >
          {#each items as item (item.value)}
            <Menu.OptionItem
              class="data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:bg-lighter/50 group flex w-32 cursor-default items-center gap-2 rounded px-2.5 py-1"
              type="checkbox"
              value={item.value}
              valueText={item.value}
              disabled={item.disabled}
              closeOnSelect={false}
              checked={selected.includes(item.value)}
              onCheckedChange={(checked) => {
                selected = checked
                  ? [...selected, item.value]
                  : [...selected].filter((value) => value !== item.value);
              }}
            >
              <div
                class="group-data-checked:border-accent group-data-checked:bg-accent border-lighter flex size-4 items-center justify-center rounded border-2"
              >
                <Menu.OptionItemIndicator>
                  <CheckIcon class="size-3 text-white" />
                </Menu.OptionItemIndicator>
              </div>
              <Menu.OptionItemText />
            </Menu.OptionItem>
          {/each}
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
</div>
