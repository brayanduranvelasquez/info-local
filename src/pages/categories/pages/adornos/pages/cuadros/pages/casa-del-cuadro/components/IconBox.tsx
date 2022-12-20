import { Stack, Typography } from '@mui/material';

interface IProps {
  icon: JSX.Element;
  message: string;
}

export default function IconBox(props: IProps) {
  return (
    <Stack direction="row" my={3} ml={3} columnGap={1} justifyContent="flex-start" alignItems="center">
      {props.icon}

      <Typography variant="h5" fontWeight="bold">
        {props.message}
      </Typography>
    </Stack>
  );
}
