import React, { MouseEvent, ReactNode } from 'react';
import { IMainNavLink } from './types';
interface Props {
    links: IMainNavLink[];
    classes: {
        [name: string]: string;
    };
    rightSide?: ReactNode;
    logoDoubleClick: (e: MouseEvent<HTMLImageElement>) => void;
}
declare const _default: React.ComponentType<Pick<Pick<Props, "rightSide" | "classes"> & Partial<Pick<Props, "links" | "logoDoubleClick">> & Partial<Pick<{
    logoDoubleClick: () => void;
    links: never[];
}, never>>, "rightSide" | "links" | "logoDoubleClick"> & import("@material-ui/core/styles").StyledComponentProps<"header" | "navLinks" | "rightSide" | "navLink">>;
export default _default;
