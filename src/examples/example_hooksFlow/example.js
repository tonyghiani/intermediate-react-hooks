/**
 * This exercise is made to understand how hooks get invoked
 * in a component render flow.
 */
import { Switch, Typography } from '@material-ui/core';

function useToggle() {
  return [false, () => {}];
}

export default function Demo() {
  const [isChecked, toggle] = useToggle();

  return (
    <>
      <Typography variant='h2'>useToggle</Typography>
      <Typography variant='body1'>This exercise is made to firstly learn the benefits of the built-in useReducer hook.</Typography>
      <Switch checked={isChecked} onChange={toggle} />
    </>
  );
}
