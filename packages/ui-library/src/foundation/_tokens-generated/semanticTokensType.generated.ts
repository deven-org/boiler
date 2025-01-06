export interface semanticTokens {
  sem: Sem;
}
export interface Sem {
  buttons: Buttons;
  forms: Forms;
  global: Global;
  selectables: Selectables;
  ui: Ui;
}
export interface Buttons {
  container: Container;
  icon: Icon;
  label: Label;
  loader: Loader;
}
export interface Container {
  borderradius: BorderradiusOrSizevariant;
  borderwidth: string;
  bgcolor: BgcolorOrBordercolorOrIconcolorOrTextcolor;
  bordercolor: BgcolorOrBordercolorOrIconcolorOrTextcolor;
  border: Border;
}
export interface BorderradiusOrSizevariant {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface BgcolorOrBordercolorOrIconcolorOrTextcolor {
  cta: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage;
  primary: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage;
  secondary: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage;
  silent: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage;
  destructive: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage;
  encourage: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage;
}
export interface CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  loading: string;
}
export interface Border {
  cta: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage1;
  primary: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage1;
  secondary: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage1;
  silent: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage1;
  destructive: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage1;
  encourage: CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage1;
}
export interface CtaOrPrimaryOrSecondaryOrSilentOrDestructiveOrEncourage1 {
  rest: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  hover: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  pressed: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  focus: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  disabled: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  loading: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
}
export interface RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder {
  color: string;
  width: string;
  style: string;
}
export interface Icon {
  iconcolor: BgcolorOrBordercolorOrIconcolorOrTextcolor;
}
export interface Label {
  textcolor: BgcolorOrBordercolorOrIconcolorOrTextcolor;
  typography: Typography;
}
export interface Typography {
  xs: XsOrSmOrMdOrLgOrXl;
  sm: XsOrSmOrMdOrLgOrXl;
  md: XsOrSmOrMdOrLgOrXl;
  lg: XsOrSmOrMdOrLgOrXl;
  xl: XsOrSmOrMdOrLgOrXl;
}
export interface XsOrSmOrMdOrLgOrXl {
  fontFamily: string;
  fontWeight: number;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: string;
  paragraphIndent: string;
  textDecoration: string;
  textCase: string;
}
export interface Loader {
  sizevariant: BorderradiusOrSizevariant;
}
export interface Forms {
  captionslot: Captionslot;
  inputfield: Inputfield;
  inputslot: Inputslot;
  labelslot: Labelslot;
  fieldset: Fieldset;
}
export interface Captionslot {
  margintop: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  margin: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
}
export interface MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom {
  sm: string;
  md: string;
  lg: string;
}
export interface Inputfield {
  container: Container1;
  icon: Icon1;
  placeholder: PlaceholderOrPrefixsuffixOrUserinput;
  prefixsuffix: PlaceholderOrPrefixsuffixOrUserinput;
  userinput: PlaceholderOrPrefixsuffixOrUserinput;
}
export interface Container1 {
  padding_v: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  padding_h: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  padding: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  borderradius: string;
  borderwidth: DefaultOrBorderwidth;
  bgcolor: BgcolorOrBordercolorOrIconcolorOrTextcolor1;
  bordercolor: BgcolorOrBordercolorOrIconcolorOrTextcolor1;
  border: Border1;
}
export interface DefaultOrBorderwidth {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  readonly: string;
}
export interface BgcolorOrBordercolorOrIconcolorOrTextcolor1 {
  default: DefaultOrBorderwidth;
  error: Error;
}
export interface Error {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
}
export interface Border1 {
  default: Default;
  error: Error1;
}
export interface Default {
  rest: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  hover: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  pressed: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  focus: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  disabled: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  readonly: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
}
export interface Error1 {
  rest: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  hover: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  pressed: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
  focus: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
}
export interface Icon1 {
  iconsize: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  iconcolor: BgcolorOrBordercolorOrIconcolorOrTextcolor1;
  sizevariant: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
}
export interface PlaceholderOrPrefixsuffixOrUserinput {
  textcolor: BgcolorOrBordercolorOrIconcolorOrTextcolor1;
  typography: Typography1;
}
export interface Typography1 {
  sm: XsOrSmOrMdOrLgOrXl;
  md: XsOrSmOrMdOrLgOrXl;
  lg: XsOrSmOrMdOrLgOrXl;
}
export interface Inputslot {
  margin_v: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  margin_h: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  margin: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
}
export interface Labelslot {
  padding: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
  padding_bottom: MargintopOrMarginOrPaddingVOrPaddingHOrPaddingOrIconsizeOrSizevariantOrMarginVOrMarginHOrPaddingBottom;
}
export interface Fieldset {
  legend: Legend;
}
export interface Legend {
  textcolor: Textcolor;
  typography: Typography1;
}
export interface Textcolor {
  default: string;
  disabled: string;
  readonly: string;
  error: string;
}
export interface Global {
  focusring: Focusring;
}
export interface Focusring {
  borderwidth: string;
  bordercolor: string;
  border: RestOrHoverOrPressedOrFocusOrDisabledOrLoadingOrReadonlyOrBorder;
}
export interface Selectables {
  container: Container2;
  label: LabelOrTextsecondary;
  textsecondary: LabelOrTextsecondary;
  icon: Icon2;
}
export interface Container2 {
  bgcolor: BgcolorOrBordercolorOrTextcolorOrIconcolor;
  bordercolor: BgcolorOrBordercolorOrTextcolorOrIconcolor;
}
export interface BgcolorOrBordercolorOrTextcolorOrIconcolor {
  inactive: InactiveOrActive;
  active: InactiveOrActive;
}
export interface InactiveOrActive {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
}
export interface LabelOrTextsecondary {
  textcolor: BgcolorOrBordercolorOrTextcolorOrIconcolor;
}
export interface Icon2 {
  iconcolor: BgcolorOrBordercolorOrTextcolorOrIconcolor;
}
export interface Ui {
  headline: HeadlineOrParagraph;
  paragraph: HeadlineOrParagraph;
  background: Background;
}
export interface HeadlineOrParagraph {
  default: string;
}
export interface Background {
  level_1: string;
  level_2: string;
}
