import { CheckboxTagName } from './components/checkbox/renderFunction';
import { IconButtonTagName } from './components/icon-button/renderFunction';
import { LoaderTagName } from './components/loader/renderFunction';
import { NumberInputTagName } from './components/number-input/renderFunction';
import { RadioGroupTagName } from './components/radio-group/renderFunction';
import { RadioTagName } from './components/radio/renderFunction';
import { SelectTagName } from './components/select/renderFunction';
import { RangeLegendSliderTagName } from './components/slider-single-value/range-legend-slider/renderFunction';
import { RangeSliderTagName } from './components/slider-single-value/range-slider/renderFunction';
import { RangeLegendMinMaxSliderTagName } from './components/slider-two-values/range-legend-min-max-slider/renderFunction';
import { RangeMinMaxSliderTagName } from './components/slider-two-values/range-min-max-slider/renderFunction';
import { TextButtonTagName } from './components/text-button/renderFunction';
import { TextInputTagName } from './components/text-input/renderFunction';
import { TextareaTagName } from './components/textarea/renderFunction';
import { ToggleSwitchTagName } from './components/toggle-switch/renderFunction';
import { TooltipBubbleTagName } from './components/tooltip-bubble/renderFunction';
import { TooltipTagName } from './components/tooltip/renderFunction';

// Actions
export { BlrIconButton } from './components/icon-button';

export { BlrTextButton } from './components/text-button';

// Feedback
export { BlrLoader } from './components/loader';

export { BlrTooltipBubble } from './components/tooltip-bubble';

export { BlrTooltip } from './components/tooltip';

// Forms
export { BlrCheckbox } from './components/checkbox';

export { BlrNumberInput } from './components/number-input';

export { BlrRadio } from './components/radio';

export { BlrRadioGroup } from './components/radio-group';

export { BlrSelect } from './components/select';

export { BlrRangeSlider } from './components/slider-single-value/range-slider';

export { BlrRangeLegendSlider } from './components/slider-single-value/range-legend-slider';

export { BlrRangeMinMaxSlider } from './components/slider-two-values/range-min-max-slider';

export { BlrRangeLegendMinMaxSlider } from './components/slider-two-values/range-legend-min-max-slider';

export { BlrTextInput } from './components/text-input';

export { BlrTextarea } from './components/textarea';

export { BlrToggleSwitch } from './components/toggle-switch';

// Internal
export { BlrCounter } from './components/counter';

export { BlrFormCaptionGroup } from './components/form-caption-group';

export { BlrFormCaption } from './components/form-caption';

export { BlrFormLabel } from './components/form-label';

// Navigation
export { BlrTabBar } from './components/tab-bar';

// UI
export { BlrButtonGroup } from './components/button-group';

export { BlrDivider } from './components/divider';

export { BlrIcon } from './components/icon';

export { BlrIconLink } from './components/icon-link';

// Tag Names

export const TagNames = {
  TextButton: TextButtonTagName,
  IconButton: IconButtonTagName,
  Loader: LoaderTagName,
  TooltipBubble: TooltipBubbleTagName,
  Tooltip: TooltipTagName,
  Checkbox: CheckboxTagName,
  NumberInput: NumberInputTagName,
  Radio: RadioTagName,
  RadioGroup: RadioGroupTagName,
  Select: SelectTagName,
  RangeSlider: RangeSliderTagName,
  RangeLegendSlider: RangeLegendSliderTagName,
  RangeMinMaxSlider: RangeMinMaxSliderTagName,
  RangeLegendMinMaxSlider: RangeLegendMinMaxSliderTagName,
  TextInput: TextInputTagName,
  Textarea: TextareaTagName,
  ToggleSwitch: ToggleSwitchTagName,
};
