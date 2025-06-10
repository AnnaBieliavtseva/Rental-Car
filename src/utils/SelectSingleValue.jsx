import { components } from 'react-select';

export const SingleValue = ({ data, ...props }) => (
  <components.SingleValue {...props}>
    {`To $${data.value}`}
  </components.SingleValue>
);
