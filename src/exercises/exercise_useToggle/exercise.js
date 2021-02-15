import { Typography } from '@material-ui/core';

export default function Demo() {
  return (
    <>
      <Typography gutterBottom variant='h1'>
        useToggle
      </Typography>
      <Typography paragraph variant='body1'>
        Start creating the useToggle hook in a simple way using the useState hooks and following the
        instructions.
      </Typography>

      <Typography paragraph variant='body1'>
        Then refactor it with the useReducer hook.
      </Typography>
      <iframe
        src='https://codesandbox.io/embed/usetoggle-exercise-pige7?fontsize=16&hidenavigation=1&theme=dark'
        style={{
          width: '100%',
          height: '600px',
          border: '0',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
        title='useToggle-exercise'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
    </>
  );
}
