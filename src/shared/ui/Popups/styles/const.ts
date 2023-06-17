import { DropdownDirection, Size } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
};

export const mapSizeClass: Record<Size, string> = {
  S: cls.size_s,
  SM: cls.size_sm,
  M: cls.size_m,
  L: cls.size_l,
  XL: cls.size_xl,
};
