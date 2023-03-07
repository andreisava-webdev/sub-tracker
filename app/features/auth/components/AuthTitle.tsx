import { Title } from '@mantine/core';

type Props = {
  label: string;
};

export const AuthTitle = ({ label }: Props) => {
  return (
    <Title size={28} mt={20}>
      {label}
    </Title>
  );
};
