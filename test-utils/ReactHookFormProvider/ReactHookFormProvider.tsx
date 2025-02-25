import { FormProvider, useForm } from 'react-hook-form';

type ReactHookFormProviderPropsType = {
  children: React.ReactNode;
};

export const ReactHookFormProvider: React.FC<
  ReactHookFormProviderPropsType
> = ({ children }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};
