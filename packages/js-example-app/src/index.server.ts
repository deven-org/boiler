import { render } from '@lit-labs/ssr';
import { html } from 'lit';
import '@boiler/ui-library';

export function* renderIndex() {
  yield* render(html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Boiler | Vanilla JS Example App</title>
        <link href="https://fonts.cdnfonts.com/css/8bit-wonder" rel="stylesheet" />
        <link href="/packages/js-example-app/src/style.css" rel="stylesheet" />
      </head>
      <body>
        <div class="logoWrapper">
          <img src="/packages/js-example-app/src/assets/logo.svg" width="200" height="100" alt="boiler" />
          <h2>Vanilla JS Example Application</h2>
        </div>

        <div class="contentWrapper">
          <div class="componentWrapper">
            <div class="component">
              <p>Button Text</p>
              <blr-button-text
                theme="Light"
                variant="cta"
                size-variant="md"
                label="Button"
                has-icon="true"
                icon-position="leading"
                icon="blr360"
                button-text-id="button-id"
              ></blr-button-text>
              <button id="toggleLoadingState">Toggle Loading State</button>
              <button id="toggleDisabledState">Toggle Disabled State</button>
            </div>

            <div class="component">
              <p>Icon Button</p>
              <blr-button-icon
                theme="Light"
                variant="primary"
                size-variant="md"
                icon="blr360"
                aria-label="Button Icon"
                button-icon-id="buttonIconId"
              >
              </blr-button-icon>
            </div>

            <div class="component">
              <p>Select</p>
              <blr-select
                theme="Light"
                size-variant="md"
                has-label="true"
                label="Label-text"
                label-appendix="(Appendix)"
                icon="blrChevronDown"
                aria-label="Select"
                select-id="selectId"
                name="select"
                options=${JSON.stringify([
                  { label: '--Please choose an option--', value: '' },
                  { label: 'option 1', value: 'option1' },
                  { label: 'option 2', value: 'option2' },
                  { label: 'option 3', value: 'option3', disabled: true },
                  { label: 'option 4', value: 'option4' },
                  { label: 'option 5', value: 'option5', selected: true },
                ])}
              >
              </blr-select>
            </div>

            <div class="component">
              <p>Checkbox</p>
              <blr-checkbox
                theme="Light"
                size-variant="md"
                has-label="true"
                label="Label-text"
                arialabel="checkbox"
                checkbox-id="checkboxId"
                name="checkInputId"
              >
              </blr-checkbox>
            </div>

            <div class="component">
              <p>Input Field Text</p>
              <blr-input-field-text
                theme="Light"
                size-variant="md"
                type="text"
                placeholder="Placeholder-text"
                value=""
                max-length="140"
                has-label="true"
                label="Label-text"
                label-appendix="(Appendix)"
                has-icon="true"
                icon="blr360"
                aria-label="InputFieldText"
                name="InputFieldText"
                input-field-text-id="Input Id"
              >
              </blr-input-field-text>
            </div>

            <div class="component">
              <p>Input Field Number</p>
              <blr-input-field-number
                value="1000"
                size-variant="md"
                stepper-variant="vertical"
                placeholder="Placeholder-text"
                fraction-digits="10"
                total-digits="10"
                has-unit="true"
                unit-position="prefix"
                unit="kg"
                step="1"
                has-label="true"
                label="Label-text"
                label-appendix="(Appendix)"
                input-field-number-id="test-id"
                theme="Light"
                name="InputFieldNumber"
                decimals="10"
                leading-zeros="3"
              ></blr-input-field-number>
            </div>

            <div class="component">
              <p>Textarea</p>
              <blr-textarea
                theme="Light"
                size-variant="md"
                resize="both"
                cols="40"
                rows="4"
                placeholder="Placeholder-text"
                value=""
                min-length="10"
                max-length="140"
                has-label="true"
                label="Label-text"
                label-appendix="(Appendix)"
                has-counter="true"
                warning-limit-type="warningLimitInt"
                warning-limit-int="105"
                aria-label="Text Area"
                text-area-id="#textAreaId"
                name="Text Area"
              >
              </blr-textarea>
            </div>

            <div class="component">
              <p>Tooltip</p>

              <blr-tooltip
                theme="Light"
                placement="top"
                elevation="true"
                has-arrow="true"
                offset="20"
                message="Message-text"
              >
                <blr-button-text theme="Light" variant="secondary" size="md" label="Hover me"></blr-button-text>
              </blr-tooltip>
            </div>

            <div class="component">
              <p>Radio Input</p>
              <blr-radio
                theme="Light"
                size-variant="md"
                value="radioValue"
                label="Label"
                aria-label=""
                radio-id="radioId"
                name="Radio Button"
              >
              </blr-radio>
            </div>

            <div class="component">
              <p>Radio Group</p>
              <blr-radio-group
                theme="Light"
                size-variant="md"
                value=""
                label="Label"
                aria-label=""
                radio-id="radioId"
                name="Radio Group"
              >
                <blr-radio label="male" value="male" checked></blr-radio>
                <blr-radio label="female" value="female"></blr-radio>
                <blr-radio label="other" value="other"></blr-radio>
              </blr-radio-group>
            </div>

            <div class="component">
              <p>Tab Bar</p>
              <blr-tab-bar
                theme="Light"
                variant="standard"
                overflow-variant-standard="buttons"
                size="md"
                show-divider="true"
                tab-content="labelAndIcon"
                icon-position="leading"
                alignment="left"
                ><p disabled label="Tab 1" icon="blr360">Tab 1</p>
                <p label="Tab 2" icon="blr360">Tab 2</p>
                <p label="Tab 3" icon="blr360">Tab 3</p>
                <p label="Tab 4" icon="blr360">Tab 4</p>
                <p label="Tab 5" icon="blr360">Tab 5</p>
                <p label="Tab 6" icon="blr360">Tab 6</p>
                <p label="Tab 7" icon="blr360">Tab 7</p>
                <p label="Tab 8" icon="blr360">Tab 8</p>
                <p label="Tab 9" icon="blr360">Tab 9</p>
                <p label="Tab 10" icon="blr360">Tab 10</p>
                <p label="Tab 11" icon="blr360">Tab 11</p>
              </blr-tab-bar>
            </div>

            <div class="component">
              <p>Toggle Switch</p>
              <blr-label-toggleswitch
                theme="Light"
                size="md"
                show-state-label="true"
                label="Label-text"
                check-input-id="toggle-switchId"
                variant="trailing"
                name="toggle-switch-name"
              ></blr-label-toggleswitch>
            </div>
          </div>

          <div id="logs" class="logsWrapper"></div>
        </div>
        <script type="module" src="/packages/js-example-app/dist/index.client.js"></script>
      </body>
    </html>
  `);
}
