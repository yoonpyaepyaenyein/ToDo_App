import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Update = props => (
  <Svg
    viewBox="0 0 80 67"
    width={props.width}
    stroke={props.colors}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M54 55.75H17.4l5.26-1.17a1.2 1.2 0 0 0 .61-.34l31.9-31.89A9.56 9.56 0 1 0 41.65 8.83L29.07 21.42 9.76 40.73a1.2 1.2 0 0 0-.34.61L6.14 56.1a1.23 1.23 0 0 0-.39.9A1.25 1.25 0 0 0 7 58.25h47a1.25 1.25 0 0 0 0-2.5Zm-8.64-27.16v-.41a9.53 9.53 0 0 0-10-9.53 7.05 7.05 0 0 1 10 9.94Zm-1.94-18a7.071 7.071 0 0 1 10 10l-3.85 3.85v-.45a9.541 9.541 0 0 0-10-9.53l3.85-3.87ZM11.78 42.24l19-19.06a7.072 7.072 0 0 1 10 10l-19 19-12.85 2.89 2.85-12.83Z"
      fill="#34B5FF"
    />
  </Svg>
);

export default Update;
