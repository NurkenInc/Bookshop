import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (currency: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Loading profile error')}
          text={t('Try again')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
      <HStack justify="center" max className={cls.avatarWrapper}>
        {data?.avatar && (
          <Avatar
            src={data?.avatar}
            alt="profile-avatar"
          />
        )}
      </HStack>
      <Input
        value={data?.first}
        placeholder={t('Your Name')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Your Lastname')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('Your Age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Your City')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Your Username')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Your Avatar')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
