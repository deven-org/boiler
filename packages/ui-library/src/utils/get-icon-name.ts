const capturingRegex = /(?<size>Xxs|Xs|Sm|Md|Lg|Xl)/;

const removeIconSizes = (icons: string[]) => {
  return icons.map((icon: string) => {
    const found = icon.match(capturingRegex);
    if (found && found.groups) {
      const size = found.groups.size;
      return icon.replace(size, '');
    } else {
      return icons;
    }
  });
};

export const getIconName = (icons: string[]) => {
  return [...new Set(removeIconSizes(icons))];
};
