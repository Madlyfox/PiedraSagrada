export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  flex?: boolean;
  flexDirection?: "column" | "row";
  overflowHidden?: boolean;
  grid?: boolean;
  hide?: boolean;
  aligned?: boolean;
  justified?: boolean;
}
