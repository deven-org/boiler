declare const root: RootObject;
export default root;
interface RootObject {
  sem: Sem;
  cmp: Cmp;
}
interface Cmp {
  formcaption: Inputfield;
  checkbox: Checkbox;
  buttonicon: Buttonicon;
  icondropdown: Icondropdown;
  menu: Menu;
  stepperbutton: Inputfield;
  tabbar: Tabbar;
  buttontext: Buttonicon;
  textdropdown: Textdropdown;
  toggleswitch: Toggleswitch;
}
interface Toggleswitch {
  control: Control;
}
interface Control {
  ay11icon: Icon;
}
interface Textdropdown {
  chevron: Loader;
}
interface Tabbar {
  tab: Inputfield;
}
interface Menu {
  menuitem: Menuitem;
}
interface Menuitem {
  icon: Icon2;
}
interface Icon2 {
  sizevariant: string;
}
interface Icondropdown {
  icon: Loader;
  chevron: Loader;
}
interface Buttonicon {
  icon: Loader;
}
interface Checkbox {
  control: Inputfield;
}
interface Sem {
  buttons: Buttons;
  forms: Forms;
}
interface Forms {
  inputfield: Inputfield;
}
interface Inputfield {
  icon: Icon;
}
interface Icon {
  sizevariant: Sizevariant2;
}
interface Sizevariant2 {
  sm: string;
  md: string;
  lg: string;
}
interface Buttons {
  loader: Loader;
}
interface Loader {
  sizevariant: Sizevariant;
}
interface Sizevariant {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
