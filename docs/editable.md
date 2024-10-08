# Editable

A component that allows users to modify its content.

## Usage

```svelte
<script>
  import {Editable} from 'ui-ingredients';

  let value = $state('Hello world!');
</script>

<Editable.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  <Editable.Label>Label</Editable.Label>

  <Editable.Area>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>

  <Editable.EditTrigger>Edit</Editable.EditTrigger>
  <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
  <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
</Editable.Root>
```

### Using the `Field` component

```svelte
<script>
  import {Editable, Field} from 'ui-ingredients';
</script>

<Field.Root>
  <Editable.Root>
    <Editable.Label>Label</Editable.Label>

    <Editable.Area>
      <Editable.Input />
      <Editable.Preview />
    </Editable.Area>

    <Editable.EditTrigger>Edit</Editable.EditTrigger>
    <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
    <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
  </Editable.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
