declare const root: RootObject;
export default root;
interface RootObject {
  sem: Sem;
}
interface Sem {
  buttons: Buttons;
  forms: Forms;
  global: Global;
  selectables: Selectables;
  ui: Ui;
}
interface Ui {
  headline: Headline;
  paragraph: Headline;
  background: Background;
}
interface Background {
  level_1: string;
  level_2: string;
}
interface Headline {
  default: string;
}
interface Selectables {
  container: Container3;
  label: Label2;
  textsecondary: Label2;
  icon: Icon3;
}
interface Icon3 {
  iconcolor: Bgcolor3;
}
interface Label2 {
  textcolor: Bgcolor3;
}
interface Container3 {
  bgcolor: Bgcolor3;
  bordercolor: Bgcolor3;
}
interface Bgcolor3 {
  inactive: Inactive;
  active: Inactive;
}
interface Inactive {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
}
interface Global {
  focusring: Focusring;
}
interface Focusring {
  borderwidth: string;
  bordercolor: string;
  border: Rest;
}
interface Forms {
  captionslot: Captionslot;
  inputfield: Inputfield;
  inputslot: Inputslot;
  labelslot: Labelslot;
  fieldset: Fieldset;
}
interface Fieldset {
  legend: Legend;
}
interface Legend {
  textcolor: Textcolor;
  typography: Typography2;
}
interface Textcolor {
  default: string;
  disabled: string;
  readonly: string;
  error: string;
}
interface Labelslot {
  padding: Margintop;
  padding_bottom: Margintop;
}
interface Inputslot {
  margin_v: Margintop;
  margin_h: Margintop;
  margin: Margintop;
}
interface Inputfield {
  container: Container2;
  icon: Icon2;
  placeholder: Placeholder;
  prefixsuffix: Placeholder;
  userinput: Placeholder;
}
interface Placeholder {
  textcolor: Bgcolor2;
  typography: Typography2;
}
interface Typography2 {
  sm: Xs;
  md: Xs;
  lg: Xs;
}
interface Icon2 {
  iconsize: Margintop;
  iconcolor: Bgcolor2;
  sizevariant: Margintop;
}
interface Container2 {
  padding_v: Margintop;
  padding_h: Margintop;
  padding: Margintop;
  borderradius: string;
  borderwidth: Borderwidth;
  bgcolor: Bgcolor2;
  bordercolor: Bgcolor2;
  border: Border2;
}
interface Border2 {
  default: Default;
  error: Error2;
}
interface Error2 {
  rest: Rest;
  hover: Rest;
  pressed: Rest;
  focus: Rest;
}
interface Default {
  rest: Rest;
  hover: Rest;
  pressed: Rest;
  focus: Rest;
  disabled: Rest;
  readonly: Rest;
}
interface Bgcolor2 {
  default: Borderwidth;
  error: Error;
}
interface Error {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
}
interface Borderwidth {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  readonly: string;
}
interface Captionslot {
  margintop: Margintop;
  margin: Margintop;
}
interface Margintop {
  sm: string;
  md: string;
  lg: string;
}
interface Buttons {
  container: Container;
  icon: Icon;
  label: Label;
  loader: Loader;
}
interface Loader {
  sizevariant: Borderradius;
}
interface Label {
  textcolor: Bgcolor;
  typography: Typography;
}
interface Typography {
  xs: Xs;
  sm: Xs;
  md: Xs;
  lg: Xs;
  xl: Xs;
}
interface Xs {
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
interface Icon {
  iconcolor: Bgcolor;
}
interface Container {
  borderradius: Borderradius;
  borderwidth: string;
  bgcolor: Bgcolor;
  bordercolor: Bgcolor;
  border: Border;
}
interface Border {
  cta: Cta2;
  primary: Cta2;
  secondary: Cta2;
  silent: Cta2;
  destructive: Cta2;
  encourage: Cta2;
}
interface Cta2 {
  rest: Rest;
  hover: Rest;
  pressed: Rest;
  focus: Rest;
  disabled: Rest;
  loading: Rest;
}
interface Rest {
  color: string;
  width: string;
  style: string;
}
interface Bgcolor {
  cta: Cta;
  primary: Cta;
  secondary: Cta;
  silent: Cta;
  destructive: Cta;
  encourage: Cta;
}
interface Cta {
  rest: string;
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  loading: string;
}
interface Borderradius {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
