import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  className?: string,
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation('forbidden');

  return (
    <Page>
      {t('Forbidden Page')}
    </Page>
  );
});

export default ForbiddenPage;
