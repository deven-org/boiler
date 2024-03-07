import { BlrFloaterType } from ".";
import { genericBlrComponentRenderer } from "../../utils/typesafe-generic-component-renderer";

export const TAG_NAME = 'blr-floater';

export const BlrFloaterRenderFunction = (params: BlrFloaterType) => genericBlrComponentRenderer<BlrFloaterType>(TAG_NAME, { ...params })
