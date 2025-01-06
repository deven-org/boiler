export interface componentTokens {
  cmp: Cmp;
}
export interface Cmp {
  buttongroup: Buttongroup;
  formcaption: Formcaption;
  captiongroup: ControlwithstatelabelOrCaptiongroup;
  checkbox: Checkbox;
  counter: Counter;
  dialog: Dialog;
  divider: Divider;
  formlabel: Formlabel;
  icon: Icon;
  buttonicon: Buttonicon;
  icondropdown: IcondropdownOrTextdropdown;
  loader: Loader;
  menu: Menu;
  inputfieldnumber: Inputfieldnumber;
  radio: Radio;
  radiogroup: Radiogroup;
  slider: Slider;
  stepperbutton: Stepperbutton;
  steppercombo: Steppercombo;
  tabbar: Tabbar;
  textarea: Textarea;
  buttontext: Buttontext;
  textdropdown: IcondropdownOrTextdropdown;
  toggleswitch: Toggleswitch;
  tooltip: Tooltip;
  blanket: Blanket;
}
export interface Buttongroup {
  container: Container;
}
export interface Container {
  itemspacing: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
}
export interface ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface Formcaption {
  container: Container1;
  iconwrapper: IconwrapperOrControlwrapperOrCaptionslot;
  icon: Icon1;
  textwrapper: Textwrapper;
  text: Text;
}
export interface Container1 {
  itemspacing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding_h: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding_v: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight {
  sm: string;
  md: string;
  lg: string;
}
export interface IconwrapperOrControlwrapperOrCaptionslot {
  paddingtop: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Icon1 {
  iconsize: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  iconcolor: IconcolorOrTextcolor;
}
export interface IconcolorOrTextcolor {
  hint: string;
  error: string;
}
export interface Textwrapper {
  padding_h: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding_v: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Text {
  textcolor: IconcolorOrTextcolor;
  typography: Typography;
}
export interface Typography {
  sm: SmOrMdOrLgOrTypography;
  md: SmOrMdOrLgOrTypography;
  lg: SmOrMdOrLgOrTypography;
}
export interface SmOrMdOrLgOrTypography {
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
export interface ControlwithstatelabelOrCaptiongroup {
  container: ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol;
}
export interface ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol {
  itemspacing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Checkbox {
  contentcol: Contentcol;
  contentrow: ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol;
  controlwrapper: IconwrapperOrControlwrapperOrCaptionslot;
  control: Control;
}
export interface Contentcol {
  itemspacing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  paddingtop: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Control {
  container: Container2;
  icon: Icon2;
}
export interface Container2 {
  borderwidth: BorderwidthOrIconsize;
  borderradius: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  size: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  bgcolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
  bordercolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
}
export interface BorderwidthOrIconsize {
  sm: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
  md: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
  lg: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
}
export interface SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor {
  active: ActiveOrInactiveOrSmOrMdOrLg;
  inactive: ActiveOrInactiveOrSmOrMdOrLg;
}
export interface ActiveOrInactiveOrSmOrMdOrLg {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  error: string;
}
export interface Icon2 {
  iconsize: Iconsize;
  iconcolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
}
export interface Iconsize {
  sm: ActiveOrInactiveOrSmOrMdOrLg;
  md: ActiveOrInactiveOrSmOrMdOrLg;
  lg: ActiveOrInactiveOrSmOrMdOrLg;
}
export interface Counter {
  container: Container3;
  text: Text1;
}
export interface Container3 {
  padding_v: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding_h: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  borderradius: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  borderwidth: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  itemspacing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  bordercolor: BordercolorOrBgcolorOrTextcolor;
  bgcolor: BordercolorOrBgcolorOrTextcolor;
}
export interface BordercolorOrBgcolorOrTextcolor {
  neutral: string;
  warning: string;
  error: string;
}
export interface Text1 {
  textcolor: BordercolorOrBgcolorOrTextcolor;
  typography: Typography;
}
export interface Dialog {
  container: Container4;
  contentsection: Contentsection;
  headersection: Headersection;
  footersection: Footersection;
}
export interface Container4 {
  maxwidth: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  padding: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  borderradius: string;
  bgcolor: string;
}
export interface Contentsection {
  container: Container5;
  text: TextOrHeadline;
}
export interface Container5 {
  padding: string;
  padding_h: string;
  padding_v: string;
}
export interface TextOrHeadline {
  textcolor: string;
  typography: SmOrMdOrLgOrTypography;
}
export interface Headersection {
  container: Container5;
  headline: TextOrHeadline;
}
export interface Footersection {
  container: Container5;
}
export interface Divider {
  container: Container6;
}
export interface Container6 {
  horizontal: Horizontal;
  vertical: Vertical;
  bgcolor: string;
}
export interface Horizontal {
  height: string;
}
export interface Vertical {
  width: string;
}
export interface Formlabel {
  container: Container7;
  label: LabelOrLabelappendixOrInlinelabel;
  labelappendix: LabelOrLabelappendixOrInlinelabel;
  inlinelabel: LabelOrLabelappendixOrInlinelabel;
}
export interface Container7 {
  itemspacing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface LabelOrLabelappendixOrInlinelabel {
  textcolor: TextcolorOrBgcolorOrBordercolor;
  typography: Typography;
}
export interface TextcolorOrBgcolorOrBordercolor {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  readonly: string;
  error: string;
}
export interface Icon {
  container: Container8;
}
export interface Container8 {
  size: Size;
}
export interface Size {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface Buttonicon {
  container: Container9;
}
export interface Container9 {
  padding: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  itemspacing: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  borderradius: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
}
export interface IcondropdownOrTextdropdown {
  container: Container10;
}
export interface Container10 {
  paddingtop: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  paddingright: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  paddingbottom: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  paddingleft: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  padding: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  itemspacing: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  borderradius: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
}
export interface Loader {
  container: Container11;
  background: BackgroundOrForeground;
  foreground: BackgroundOrForeground;
}
export interface Container11 {
  size: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface BackgroundOrForeground {
  borderwidth: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  bordercolor: Bordercolor;
}
export interface Bordercolor {
  default: string;
  inverted: string;
}
export interface Menu {
  container: Container12;
  menuitem: Menuitem;
  menusection: Menusection;
  menusectionstack: Menusectionstack;
}
export interface Container12 {
  borderradius: string;
  bgcolor: string;
  elevation: ElevationOrElevated;
}
export interface ElevationOrElevated {
  blur: string;
  spread: string;
  color: string;
  type: string;
  offsetX: string;
  offsetY: string;
}
export interface Menuitem {
  itemcontainer: Itemcontainer;
  contentrow: ContentrowOrContentstackOrItemstack;
  contentstack: ContentrowOrContentstackOrItemstack;
  itemicon: Itemicon;
  itemlabel: ItemlabelOrItemdescription;
  itemdescription: ItemlabelOrItemdescription;
}
export interface Itemcontainer {
  padding: string;
  borderradius: string;
  padding_h: string;
  padding_v: string;
  bgcolor: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
  bordercolor: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
}
export interface BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity {
  active: Active;
  inactive: InactiveOrBgcolorOrBordercolorOrIconcolorOrActive;
}
export interface Active {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
}
export interface InactiveOrBgcolorOrBordercolorOrIconcolorOrActive {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
}
export interface ContentrowOrContentstackOrItemstack {
  itemspacing: string;
}
export interface Itemicon {
  iconsize: string;
  iconcolor: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
}
export interface ItemlabelOrItemdescription {
  textcolor: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
  typography: SmOrMdOrLgOrTypography;
}
export interface Menusection {
  sectiontitlewrapper: Sectiontitlewrapper;
  itemstack: ContentrowOrContentstackOrItemstack;
  sectiontitle: string;
}
export interface Sectiontitlewrapper {
  padding: string;
  padding_h: string;
  paddingtop: string;
  paddingbottom: string;
}
export interface Menusectionstack {
  itemspacing: string;
  padding: string;
}
export interface Inputfieldnumber {
  inputfield: Inputfield;
}
export interface Inputfield {
  textwrapper: ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol;
}
export interface Radio {
  control: Control1;
  contentcol: Contentcol;
  contentrow: Contentrow;
  controlwrapper: IconwrapperOrControlwrapperOrCaptionslot;
}
export interface Control1 {
  container: Container13;
  icon: Icon3;
}
export interface Container13 {
  size: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  borderradius: string;
  borderwidth: BorderwidthOrIconsize;
  bgcolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
  bordercolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
  border: Border;
}
export interface Border {
  sm: SmOrMdOrLg;
  md: SmOrMdOrLg;
  lg: SmOrMdOrLg;
}
export interface SmOrMdOrLg {
  active: ActiveOrInactive;
  inactive: ActiveOrInactive;
}
export interface ActiveOrInactive {
  rest: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  hover: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  pressed: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  focus: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  disabled: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  error: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
}
export interface RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive {
  color: string;
  width: string;
  style: string;
}
export interface Icon3 {
  iconsize: BorderwidthOrIconsize;
  iconcolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor;
}
export interface Contentrow {
  itemspacing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding_v: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Radiogroup {
  captionslot: IconwrapperOrControlwrapperOrCaptionslot;
  legendwrapper: Legendwrapper;
  radiostackhorizontal: ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol;
  radiostackvertical: ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol;
  legend: Legend;
}
export interface Legendwrapper {
  paddingbottom: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Legend {
  textcolor: Textcolor;
  sm: SmOrMdOrLgOrTypography;
  md: SmOrMdOrLgOrTypography;
  lg: SmOrMdOrLgOrTypography;
}
export interface Textcolor {
  default: string;
  disabled: string;
  error: string;
}
export interface Slider {
  thumb: Thumb;
  tickmark: Tickmark;
  track: Track;
  legend: Legend1;
}
export interface Thumb {
  shape: Shape;
  container: Container14;
}
export interface Shape {
  borderwidth: BorderwidthOrSize;
  size: BorderwidthOrSize;
  bgcolor: TextcolorOrBgcolorOrBordercolor;
  bordercolor: TextcolorOrBgcolorOrBordercolor;
  border: Border1;
}
export interface BorderwidthOrSize {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  readonly: string;
}
export interface Border1 {
  rest: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  hover: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  pressed: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  focus: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  disabled: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  readonly: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
}
export interface Container14 {
  size: string;
}
export interface Tickmark {
  borderwidth: BorderwidthOrBordercolorOrBgcolor;
  size: string;
  bordercolor: BorderwidthOrBordercolorOrBgcolor;
  bgcolor: BorderwidthOrBordercolorOrBgcolor;
  border: Border2;
}
export interface BorderwidthOrBordercolorOrBgcolor {
  default: DefaultOrMute;
  mute: DefaultOrMute;
}
export interface DefaultOrMute {
  active: string;
  inactive: string;
}
export interface Border2 {
  default: DefaultOrMute1;
  mute: DefaultOrMute1;
}
export interface DefaultOrMute1 {
  active: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
  inactive: RestOrHoverOrPressedOrFocusOrDisabledOrErrorOrReadonlyOrActiveOrInactive;
}
export interface Track {
  bordercolor: BorderwidthOrBordercolorOrBgcolor;
  border: Border2;
}
export interface Legend1 {
  textcolor: Textcolor1;
  typography: SmOrMdOrLgOrTypography;
}
export interface Textcolor1 {
  default: string;
  disabled: string;
}
export interface Stepperbutton {
  container: Container15;
  icon: Icon4;
}
export interface Container15 {
  width: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  borderradius: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  borderwidth: string;
  bgcolor: InactiveOrBgcolorOrBordercolorOrIconcolorOrActive;
  bordercolor: InactiveOrBgcolorOrBordercolorOrIconcolorOrActive;
}
export interface Icon4 {
  iconsize: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  iconcolor: InactiveOrBgcolorOrBordercolorOrIconcolorOrActive;
}
export interface Steppercombo {
  container: Container16;
  dividerwrapper: Dividerwrapper;
}
export interface Container16 {
  width: Width;
}
export interface Width {
  vertical: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  horizontal: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Dividerwrapper {
  padding_v: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding_h: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: Padding;
}
export interface Padding {
  verticallayout: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  horizontallayout: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Tabbar {
  buttonwrapper: Buttonwrapper;
  tab: Tab;
}
export interface Buttonwrapper {
  innerpadding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: Padding1;
}
export interface Padding1 {
  leading: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  trailing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Tab {
  highlightline: Highlightline;
  contentcol: Contentcol;
  contentrow: Contentrow1;
  icon: Icon5;
  label: Label;
}
export interface Highlightline {
  height: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  bgcolor: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
  opacity: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
}
export interface Contentrow1 {
  padding_h: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  itemspacing: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Icon5 {
  iconsize: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  iconcolor: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
}
export interface Label {
  textcolor: BgcolorOrBordercolorOrIconcolorOrTextcolorOrOpacity;
  typography: Typography;
}
export interface Textarea {
  inputfield: Inputfield1;
}
export interface Inputfield1 {
  minheight: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Buttontext {
  container: Container17;
}
export interface Container17 {
  padding_v: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  padding_h: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  padding: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  itemspacing: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
  borderradius: ItemspacingOrMaxwidthOrPaddingOrBorderradiusOrPaddingtopOrPaddingrightOrPaddingbottomOrPaddingleftOrPaddingVOrPaddingH;
}
export interface Toggleswitch {
  container: ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol;
  contentcol: ContainerOrContentrowOrTextwrapperOrRadiostackhorizontalOrRadiostackverticalOrContentcol;
  control: Control2;
  controlwithstatelabel: ControlwithstatelabelOrCaptiongroup;
}
export interface Control2 {
  container: Container18;
  ay11icon: Ay11icon;
  ay11iconcontainer: Ay11iconcontainer;
  knob: Knob;
}
export interface Container18 {
  borderradius: string;
  borderwidth: Borderwidth;
  width: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  height: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  padding: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  bgcolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
  bordercolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
}
export interface Borderwidth {
  sm: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
  md: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
  lg: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
}
export interface SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1 {
  active: InactiveOrBgcolorOrBordercolorOrIconcolorOrActive;
  inactive: InactiveOrBgcolorOrBordercolorOrIconcolorOrActive;
}
export interface Ay11icon {
  iconsize: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  iconcolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
}
export interface Ay11iconcontainer {
  padding_h: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
}
export interface Knob {
  size: ItemspacingOrPaddingHOrPaddingVOrPaddingOrPaddingtopOrIconsizeOrBorderradiusOrSizeOrBorderwidthOrPaddingbottomOrWidthOrVerticalOrHorizontalOrVerticallayoutOrHorizontallayoutOrLeadingOrTrailingOrInnerpaddingOrHeightOrMinheight;
  borderwidth: Borderwidth;
  bgcolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
  bordercolor: SmOrMdOrLgOrBgcolorOrBordercolorOrIconcolor1;
}
export interface Tooltip {
  textwrapper: Textwrapper1;
  nosewrapper: Nosewrapper;
  container: Container19;
  text: TextOrHeadline;
}
export interface Textwrapper1 {
  padding: string;
  borderradius: string;
  minwidth: string;
  maxwidth: string;
  padding_v: string;
  padding_h: string;
}
export interface Nosewrapper {
  padding_v: string;
  padding_h: string;
}
export interface Container19 {
  bgcolor: string;
  elevation: Elevation;
}
export interface Elevation {
  elevated: ElevationOrElevated;
}
export interface Blanket {
  surface: string;
}
