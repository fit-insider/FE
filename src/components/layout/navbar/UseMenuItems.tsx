import { useTranslation } from 'react-i18next';

const useMenuItems = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('ABOUT_US'),
      path: '/about-us'
    },
    {
      title: t('SHOP'),
      path: '/shop'
    },
    {
      title: t('CONTACT'),
      path: '/contact'
    }
  ];
};

export default useMenuItems;