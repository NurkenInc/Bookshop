import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'shared/ui/Page/Page';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton />
      {t('Main page')}
    </Page>
  );
}

export default MainPage;
