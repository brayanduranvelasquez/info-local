import { Helmet } from 'react-helmet';

interface IProps {
  title: string;
}

export default function Head({ title }: IProps): JSX.Element {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
