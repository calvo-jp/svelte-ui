# DatePicker

A component for selecting a date from a calendar interface.

## Usage

### Single

```svelte
<script>
  import {DatePicker} from 'ui-ingredients';
  import {CalendarIcon, ChevronLeftIcon, ChevronRightIcon} from '$lib/icons';

  /** @type {string[]} */
  let value = $state([]);
</script>

<DatePicker.Root
  {value}
  onValueChange={function (detail) {
    value = detail.valueAsString;
  }}
>
  {#snippet children(context)}
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.Trigger>
        <CalendarIcon />
      </DatePicker.Trigger>
    </DatePicker.Control>

    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.ViewControl>
            <DatePicker.PrevTrigger>
              <ChevronLeftIcon />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger>
              <ChevronRightIcon />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table>
            <DatePicker.TableHead>
              <DatePicker.TableRow>
                {#each context.weekDays as weekDay}
                  <DatePicker.TableHeader>
                    {weekDay.narrow}
                  </DatePicker.TableHeader>
                {/each}
              </DatePicker.TableRow>
            </DatePicker.TableHead>

            <DatePicker.TableBody>
              {#each context.weeks as week}
                <DatePicker.TableRow>
                  {#each week as day}
                    <DatePicker.DayTableCell value={day}>
                      <DatePicker.DayTableCellTrigger>
                        {day.day}
                      </DatePicker.DayTableCellTrigger>
                    </DatePicker.DayTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>

        <!-- MONTH -->
        <DatePicker.View view="month">
          <DatePicker.ViewControl>
            <DatePicker.PrevTrigger>
              <ChevronLeftIcon />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger>
              <ChevronRightIcon />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table>
            <DatePicker.TableBody>
              {#each context.getMonthsGrid( {columns: 4, format: 'short'}, ) as months}
                <DatePicker.TableRow>
                  {#each months as month}
                    <DatePicker.MonthTableCell value={month.value}>
                      <DatePicker.MonthTableCellTrigger>
                        {month.label}
                      </DatePicker.MonthTableCellTrigger>
                    </DatePicker.MonthTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>

        <!-- YEAR -->
        <DatePicker.View view="year">
          <DatePicker.ViewControl>
            <DatePicker.PrevTrigger>
              <ChevronLeftIcon />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger>
              <ChevronRightIcon />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table>
            <DatePicker.TableBody>
              {#each context.getYearsGrid({columns: 4}) as years}
                <DatePicker.TableRow>
                  {#each years as year}
                    <DatePicker.YearTableCell value={year.value}>
                      <DatePicker.YearTableCellTrigger>
                        {year.label}
                      </DatePicker.YearTableCellTrigger>
                    </DatePicker.YearTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  {/snippet}
</DatePicker.Root>
```

### Range

```svelte
<script>
  import {DatePicker} from 'ui-ingredients';
  import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XCloseIcon,
  } from '$lib/icons';

  /** @type {string[]} */
  let value = $state([]);
</script>

<DatePicker.Root
  fixedWeeks
  positioning={{
    sameWidth: true,
  }}
  {value}
  onValueChange={function (detail) {
    value = detail.valueAsString;
  }}
  selectionMode="range"
>
  {#snippet children(context)}
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control class="flex gap-2">
      <DatePicker.Input index={0} />
      <DatePicker.Input index={1} />
      <DatePicker.ClearTrigger>
        <XCloseIcon />
      </DatePicker.ClearTrigger>
      <DatePicker.Trigger>
        <CalendarIcon />
      </DatePicker.Trigger>
    </DatePicker.Control>

    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.ViewControl>
            <DatePicker.PrevTrigger>
              <ChevronLeftIcon />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger>
              <ChevronRightIcon />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table>
            <DatePicker.TableHead>
              <DatePicker.TableRow>
                {#each context.weekDays as weekDay}
                  <DatePicker.TableHeader>
                    {weekDay.narrow}
                  </DatePicker.TableHeader>
                {/each}
              </DatePicker.TableRow>
            </DatePicker.TableHead>

            <DatePicker.TableBody>
              {#each context.weeks as week}
                <DatePicker.TableRow>
                  {#each week as day}
                    <DatePicker.DayTableCell value={day}>
                      <DatePicker.DayTableCellTrigger>
                        {day.day}
                      </DatePicker.DayTableCellTrigger>
                    </DatePicker.DayTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>

        <!-- MONTH -->
        <DatePicker.View view="month">
          <DatePicker.ViewControl>
            <DatePicker.PrevTrigger>
              <ChevronLeftIcon />
            </DatePicker.PrevTrigger>

            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>

            <DatePicker.NextTrigger>
              <ChevronRightIcon />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table>
            <DatePicker.TableBody>
              {#each context.getMonthsGrid( {columns: 4, format: 'short'}, ) as months}
                <DatePicker.TableRow>
                  {#each months as month}
                    <DatePicker.MonthTableCell value={month.value}>
                      <DatePicker.MonthTableCellTrigger>
                        {month.label}
                      </DatePicker.MonthTableCellTrigger>
                    </DatePicker.MonthTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>

        <!-- YEAR -->
        <DatePicker.View view="year">
          <DatePicker.ViewControl>
            <DatePicker.PrevTrigger>
              <ChevronLeftIcon />
            </DatePicker.PrevTrigger>

            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>

            <DatePicker.NextTrigger>
              <ChevronRightIcon />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table>
            <DatePicker.TableBody>
              {#each context.getYearsGrid({columns: 4}) as years}
                <DatePicker.TableRow>
                  {#each years as year}
                    <DatePicker.YearTableCell value={year.value}>
                      <DatePicker.YearTableCellTrigger>
                        {year.label}
                      </DatePicker.YearTableCellTrigger>
                    </DatePicker.YearTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  {/snippet}
</DatePicker.Root>
```
