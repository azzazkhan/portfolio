export interface NProgressOptions {
  minimum: number;
  template: string;
  easing: string;
  speed: number;
  trickle: boolean;
  trickleSpeed: number;
  showSpinner: boolean;
  parent: string;
  positionUsing: string;
  barSelector: string;
  spinnerSelector: string;
}

export interface NextNProgress {
  color?: string;
  height?: number;
  startPosition?: number;
  stopDelayMs?: number;
  showOnShallow: boolean;
  options?: Partial<NProgressOptions>;
}

