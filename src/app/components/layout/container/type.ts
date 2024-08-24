import { ReactNode, Ref } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  flex?: boolean;
  id?: string;
  flexDirection?: string;
  overflowHidden?: boolean;
  grid?: boolean;
  aligned?: boolean;
  hide?: boolean;
  justified?: boolean;
  ref?: Ref<HTMLDivElement>; // Add this line to allow ref passing
}
