import { StorageItem, SwedenCity, RwandaCity } from './Enum';

export const getCityFromLocalStorage = () => {
  const country =
    typeof window === 'undefined'
      ? RwandaCity.Kigali
      : localStorage.getItem(StorageItem.Theme);

  switch (country) {
    case 'sweden':
      return SwedenCity.Stockholm;

    case 'rwanda':
      return RwandaCity.Kigali;
    default:
      return RwandaCity.Kigali;
  }
};

export const getTheme = () => {
  if (typeof window === 'undefined') {
    return 'rwanda';
  }

  return localStorage.getItem(StorageItem.Theme);
};
