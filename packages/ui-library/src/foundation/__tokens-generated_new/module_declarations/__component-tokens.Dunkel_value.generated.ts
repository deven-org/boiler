declare const root: RootObject;
export default root;
interface RootObject {
  cmp: Cmp;
}
interface Cmp {
  buttongroup: Buttongroup;
  formcaption: Formcaption;
  captiongroup: Captiongroup;
  checkbox: Checkbox;
  counter: Counter;
  dialog: Dialog;
  divider: Divider;
  formlabel: Formlabel;
  icon: Icon3;
  buttonicon: Buttonicon;
  icondropdown: Icondropdown;
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
  textdropdown: Icondropdown;
  toggleswitch: Toggleswitch;
  tooltip: Tooltip;
  blanket: Blanket;
}
interface Blanket {
  surface: string;
}
interface Tooltip {
  textwrapper: Textwrapper2;
  nosewrapper: Nosewrapper;
  container: Container21;
  text: Text3;
}
interface Container21 {
  bgcolor: string;
  elevation: Elevation2;
}
interface Elevation2 {
  elevated: Elevation;
}
interface Nosewrapper {
  padding_v: string;
  padding_h: string;
}
interface Textwrapper2 {
  padding: string;
  borderradius: string;
  minwidth: string;
  maxwidth: string;
  padding_v: string;
  padding_h: string;
}
interface Toggleswitch {
  container: Container3;
  contentcol: Container3;
  control: Control3;
  controlwithstatelabel: Captiongroup;
}
interface Control3 {
  container: Container20;
  ay11icon: Ay11icon;
  ay11iconcontainer: Ay11iconcontainer;
  knob: Knob;
}
interface Knob {
  size: Itemspacing2;
  borderwidth: Borderwidth4;
  bgcolor: Sm4;
  bordercolor: Sm4;
}
interface Ay11iconcontainer {
  padding_h: Itemspacing2;
}
interface Ay11icon {
  iconsize: Itemspacing2;
  iconcolor: Sm4;
}
interface Container20 {
  borderradius: string;
  borderwidth: Borderwidth4;
  width: Itemspacing2;
  height: Itemspacing2;
  padding: Itemspacing2;
  bgcolor: Sm4;
  bordercolor: Sm4;
}
interface Borderwidth4 {
  sm: Sm4;
  md: Sm4;
  lg: Sm4;
}
interface Sm4 {
  active: Inactive;
  inactive: Inactive;
}
interface Buttontext {
  container: Container19;
}
interface Container19 {
  padding_v: Itemspacing;
  padding_h: Itemspacing;
  padding: Itemspacing;
  itemspacing: Itemspacing;
  borderradius: Itemspacing;
}
interface Textarea {
  inputfield: Inputfield2;
}
interface Inputfield2 {
  minheight: Itemspacing2;
}
interface Tabbar {
  buttonwrapper: Buttonwrapper;
  tab: Tab;
}
interface Tab {
  highlightline: Highlightline;
  contentcol: Contentcol;
  contentrow: Contentrow3;
  icon: Icon6;
  label: Label2;
}
interface Label2 {
  textcolor: Bgcolor;
  typography: Typography;
}
interface Icon6 {
  iconsize: Itemspacing2;
  iconcolor: Bgcolor;
}
interface Contentrow3 {
  padding_h: Itemspacing2;
  itemspacing: Itemspacing2;
}
interface Highlightline {
  height: Itemspacing2;
  bgcolor: Bgcolor;
  opacity: Bgcolor;
}
interface Buttonwrapper {
  innerpadding: Itemspacing2;
  padding: Padding2;
}
interface Padding2 {
  leading: Itemspacing2;
  trailing: Itemspacing2;
}
interface Steppercombo {
  container: Container18;
  dividerwrapper: Dividerwrapper;
}
interface Dividerwrapper {
  padding_v: Itemspacing2;
  padding_h: Itemspacing2;
  padding: Padding;
}
interface Padding {
  verticallayout: Itemspacing2;
  horizontallayout: Itemspacing2;
}
interface Container18 {
  width: Width;
}
interface Width {
  vertical: Itemspacing2;
  horizontal: Itemspacing2;
}
interface Stepperbutton {
  container: Container17;
  icon: Icon5;
}
interface Icon5 {
  iconsize: Itemspacing2;
  iconcolor: Inactive;
}
interface Container17 {
  width: Itemspacing2;
  borderradius: Itemspacing2;
  borderwidth: string;
  bgcolor: Inactive;
  bordercolor: Inactive;
}
interface Slider {
  thumb: Thumb;
  tickmark: Tickmark;
  track: Track;
  legend: Legend2;
}
interface Legend2 {
  textcolor: Textcolor3;
  typography: Sm;
}
interface Textcolor3 {
  default: string;
  disabled: string;
}
interface Track {
  bordercolor: Borderwidth3;
  border: Border3;
}
interface Tickmark {
  borderwidth: Borderwidth3;
  size: string;
  bordercolor: Borderwidth3;
  bgcolor: Borderwidth3;
  border: Border3;
}
interface Border3 {
  default: Default2;
  mute: Default2;
}
interface Default2 {
  active: Rest;
  inactive: Rest;
}
interface Borderwidth3 {
  default: Default;
  mute: Default;
}
interface Default {
  active: string;
  inactive: string;
}
interface Thumb {
  shape: Shape;
  container: Container16;
}
interface Container16 {
  size: string;
}
interface Shape {
  borderwidth: Borderwidth2;
  size: Borderwidth2;
  bgcolor: Textcolor;
  bordercolor: Textcolor;
  border: Border2;
}
interface Border2 {
  rest: Rest;
  hover: Rest;
  pressed: Rest;
  focus: Rest;
  disabled: Rest;
  readonly: Rest;
}
interface Borderwidth2 {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  readonly: string;
}
interface Radiogroup {
  captionslot: Iconwrapper;
  legendwrapper: Legendwrapper;
  radiostackhorizontal: Container3;
  radiostackvertical: Container3;
  legend: Legend;
}
interface Legend {
  textcolor: Textcolor2;
  sm: Sm;
  md: Sm;
  lg: Sm;
}
interface Textcolor2 {
  default: string;
  disabled: string;
  error: string;
}
interface Legendwrapper {
  paddingbottom: Itemspacing2;
}
interface Radio {
  control: Control2;
  contentcol: Contentcol;
  contentrow: Contentrow2;
  controlwrapper: Iconwrapper;
}
interface Contentrow2 {
  itemspacing: Itemspacing2;
  padding: Itemspacing2;
  padding_v: Itemspacing2;
}
interface Control2 {
  container: Container15;
  icon: Icon4;
}
interface Icon4 {
  iconsize: Borderwidth;
  iconcolor: Sm2;
}
interface Container15 {
  size: Itemspacing2;
  borderradius: string;
  borderwidth: Borderwidth;
  bgcolor: Sm2;
  bordercolor: Sm2;
  border: Border;
}
interface Border {
  sm: Sm3;
  md: Sm3;
  lg: Sm3;
}
interface Sm3 {
  active: Active3;
  inactive: Active3;
}
interface Active3 {
  rest: Rest;
  hover: Rest;
  pressed: Rest;
  focus: Rest;
  disabled: Rest;
  error: Rest;
}
interface Rest {
  color: string;
  width: string;
  style: string;
}
interface Inputfieldnumber {
  inputfield: Inputfield;
}
interface Inputfield {
  textwrapper: Container3;
}
interface Menu {
  container: Container14;
  menuitem: Menuitem;
  menusection: Menusection;
  menusectionstack: Menusectionstack;
}
interface Menusectionstack {
  itemspacing: string;
  padding: string;
}
interface Menusection {
  sectiontitlewrapper: Sectiontitlewrapper;
  itemstack: Contentrow;
  sectiontitle: string;
}
interface Sectiontitlewrapper {
  padding: string;
  padding_h: string;
  paddingtop: string;
  paddingbottom: string;
}
interface Menuitem {
  itemcontainer: Itemcontainer;
  contentrow: Contentrow;
  contentstack: Contentrow;
  itemicon: Itemicon;
  itemlabel: Itemlabel;
  itemdescription: Itemlabel;
}
interface Itemlabel {
  textcolor: Bgcolor;
  typography: Sm;
}
interface Itemicon {
  iconsize: string;
  iconcolor: Bgcolor;
}
interface Contentrow {
  itemspacing: string;
}
interface Itemcontainer {
  padding: string;
  borderradius: string;
  padding_h: string;
  padding_v: string;
  bgcolor: Bgcolor;
  bordercolor: Bgcolor;
}
interface Bgcolor {
  active: Active2;
  inactive: Inactive;
}
interface Inactive {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
}
interface Active2 {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
}
interface Container14 {
  borderradius: string;
  bgcolor: string;
  elevation: Elevation;
}
interface Elevation {
  blur: string;
  spread: string;
  color: string;
  type: string;
  offsetX: string;
  offsetY: string;
}
interface Loader {
  container: Container13;
  background: Background;
  foreground: Background;
}
interface Background {
  borderwidth: Itemspacing2;
  bordercolor: Bordercolor2;
}
interface Bordercolor2 {
  default: string;
  inverted: string;
}
interface Container13 {
  size: Itemspacing2;
  padding: Itemspacing2;
}
interface Icondropdown {
  container: Container12;
}
interface Container12 {
  paddingtop: Itemspacing;
  paddingright: Itemspacing;
  paddingbottom: Itemspacing;
  paddingleft: Itemspacing;
  padding: Itemspacing;
  itemspacing: Itemspacing;
  borderradius: Itemspacing;
}
interface Buttonicon {
  container: Container11;
}
interface Container11 {
  padding: Itemspacing;
  itemspacing: Itemspacing;
  borderradius: Itemspacing;
}
interface Icon3 {
  container: Container10;
}
interface Container10 {
  size: Size;
}
interface Size {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
interface Formlabel {
  container: Container9;
  label: Label;
  labelappendix: Label;
  inlinelabel: Label;
}
interface Label {
  textcolor: Textcolor;
  typography: Typography;
}
interface Textcolor {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  readonly: string;
  error: string;
}
interface Container9 {
  itemspacing: Itemspacing2;
  padding: Itemspacing2;
}
interface Divider {
  container: Container8;
}
interface Container8 {
  horizontal: Horizontal;
  vertical: Vertical;
  bgcolor: string;
}
interface Vertical {
  width: string;
}
interface Horizontal {
  height: string;
}
interface Dialog {
  container: Container6;
  contentsection: Contentsection;
  headersection: Headersection;
  footersection: Footersection;
}
interface Footersection {
  container: Container7;
}
interface Headersection {
  container: Container7;
  headline: Text3;
}
interface Contentsection {
  container: Container7;
  text: Text3;
}
interface Text3 {
  textcolor: string;
  typography: Sm;
}
interface Container7 {
  padding: string;
  padding_h: string;
  padding_v: string;
}
interface Container6 {
  maxwidth: Itemspacing;
  padding: Itemspacing;
  borderradius: string;
  bgcolor: string;
}
interface Counter {
  container: Container5;
  text: Text2;
}
interface Text2 {
  textcolor: Bordercolor;
  typography: Typography;
}
interface Container5 {
  padding_v: Itemspacing2;
  padding_h: Itemspacing2;
  padding: Itemspacing2;
  borderradius: Itemspacing2;
  borderwidth: Itemspacing2;
  itemspacing: Itemspacing2;
  bordercolor: Bordercolor;
  bgcolor: Bordercolor;
}
interface Bordercolor {
  neutral: string;
  warning: string;
  error: string;
}
interface Checkbox {
  contentcol: Contentcol;
  contentrow: Container3;
  controlwrapper: Iconwrapper;
  control: Control;
}
interface Control {
  container: Container4;
  icon: Icon2;
}
interface Icon2 {
  iconsize: Iconsize;
  iconcolor: Sm2;
}
interface Iconsize {
  sm: Active;
  md: Active;
  lg: Active;
}
interface Container4 {
  borderwidth: Borderwidth;
  borderradius: Itemspacing2;
  size: Itemspacing2;
  bgcolor: Sm2;
  bordercolor: Sm2;
}
interface Borderwidth {
  sm: Sm2;
  md: Sm2;
  lg: Sm2;
}
interface Sm2 {
  active: Active;
  inactive: Active;
}
interface Active {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  error: string;
}
interface Contentcol {
  itemspacing: Itemspacing2;
  paddingtop: Itemspacing2;
}
interface Captiongroup {
  container: Container3;
}
interface Container3 {
  itemspacing: Itemspacing2;
}
interface Formcaption {
  container: Container2;
  iconwrapper: Iconwrapper;
  icon: Icon;
  textwrapper: Textwrapper;
  text: Text;
}
interface Text {
  textcolor: Iconcolor;
  typography: Typography;
}
interface Typography {
  sm: Sm;
  md: Sm;
  lg: Sm;
}
interface Sm {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: string;
  paragraphIndent: string;
  textDecoration: string;
  textCase: string;
}
interface Textwrapper {
  padding_h: Itemspacing2;
  padding_v: Itemspacing2;
  padding: Itemspacing2;
}
interface Icon {
  iconsize: Itemspacing2;
  iconcolor: Iconcolor;
}
interface Iconcolor {
  hint: string;
  error: string;
}
interface Iconwrapper {
  paddingtop: Itemspacing2;
}
interface Container2 {
  itemspacing: Itemspacing2;
  padding_h: Itemspacing2;
  padding_v: Itemspacing2;
  padding: Itemspacing2;
}
interface Itemspacing2 {
  sm: string;
  md: string;
  lg: string;
}
interface Buttongroup {
  container: Container;
}
interface Container {
  itemspacing: Itemspacing;
}
interface Itemspacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
