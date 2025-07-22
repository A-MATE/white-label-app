import {zodResolver} from '@hookform/resolvers/zod';
import React, {useRef, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Button, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import useStyle from 'src/shared/hooks/useStyle';
import {signupSchema} from 'src/shared/validation-schemas/auth.schema';
import {z} from 'zod';
import AuthBackground from '../../components/auth-background/AuthBackground';
import styleSheet from './SignupScreen.styles';
import EmailStep from './views/signup-form-views/email-step/EmailStep';
import PasswordStep from './views/signup-form-views/password-step/PasswordStep';

const schema = z
  .object({
    email: z.string().email('Enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const SignupScreen = () => {
  const {t} = useTranslation();
  const styles = useStyle(styleSheet);
  const pagerRef = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const methods = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    handleSubmit,
    watch,
    formState: {isValid},
  } = methods;
  const emailIsValid =
    watch('email') && methods.formState.errors.email === undefined;

  const goToNextPage = () => {
    if (emailIsValid && pagerRef.current) {
      pagerRef.current.setPage(1);
      setScrollEnabled(true);
    }
  };

  const onSubmit = handleSubmit(data => {
    console.log('Form Data:', data);
  });

  return (
    <FormProvider {...methods}>
      <AuthBackground>
        <PagerView
          ref={pagerRef}
          style={styles.container}
          initialPage={0}
          scrollEnabled={scrollEnabled}>
          <View key="1">
            <EmailStep />
          </View>
          <View key="2">
            <PasswordStep />
          </View>
        </PagerView>
        <View style={styles.actionContainer}>
          <Button
            title={t('auth.next')}
            onPress={goToNextPage}
            disabled={!emailIsValid}
          />
          <Button title={t('auth.submit')} onPress={onSubmit} />
        </View>
      </AuthBackground>
    </FormProvider>
  );
};

export default SignupScreen;
