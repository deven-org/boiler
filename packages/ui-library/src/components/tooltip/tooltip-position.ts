import {
  VirtualElement as VirtualElementType,
  autoUpdate,
  computePosition,
  flip,
  offset,
  arrow,
  Placement as PlacementType,
} from '@floating-ui/dom';
import { componentTokens } from '../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs';

const toolTip = componentTokens.cmp.tooltip;

const getArrowSettings = (tooltip: HTMLElement, paddingTopBottom: number, paddingLeftRight: number, side: string) => {
  const element = tooltip.querySelector('.arrow') as HTMLElement;

  const padding =
    side === 'top' || 'bottom' ? paddingTopBottom : side === 'left' || 'right' ? paddingLeftRight : undefined;

  return element
    ? {
        element,
        height: 4,
        padding,
      }
    : undefined;
};

export const tooltipPosition = (
  reference: Element | VirtualElementType,
  tooltip: HTMLElement,
  placement: PlacementType = 'top',
  offsetValue = 0
) => {
  autoUpdate(reference, tooltip, () => {
    const side = placement.split('-')[0];

    const arrowSettings = getArrowSettings(
      tooltip,
      parseFloat(toolTip.nosewrapper.padding_v),
      parseFloat(toolTip.nosewrapper.padding_h),
      side
    );

    computePosition(reference, tooltip, {
      placement,
      middleware: [
        offset(offsetValue + (arrowSettings ? arrowSettings.height : 0)),
        flip(),
        arrowSettings && arrow({ element: arrowSettings.element, padding: arrowSettings.padding }),
      ],
    }).then(({ x, y, middlewareData, placement }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      if (middlewareData.arrow && arrowSettings) {
        const { x, y, centerOffset } = middlewareData.arrow;
        const isCentered = centerOffset === 0;
        const side = placement.split('-')[0];

        const staticSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[side];

        const staticRotation = {
          top: 'rotate(0)',
          right: 'rotate(90deg)',
          bottom: 'rotate(180deg)',
          left: 'rotate(-90deg)',
        }[side];

        arrowSettings.element.style.cssText = '';

        Object.assign(arrowSettings.element.style, {
          top: isCentered && y !== null ? `${y}px` : '',
          right: !isCentered && x !== null ? `${x}px` : '',
          bottom: !isCentered && y !== null ? `${y}px` : '',
          left: isCentered && x !== null ? `${x}px` : '',
          transform: staticRotation,
          [`${staticSide}`]: `-${arrowSettings?.height}px`,
        });
      }
    });
  });
};
