import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Confirm = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    width={props.width}
    stroke={props.colors}
    height={props.height}
    style={{
      enableBackground: 'new 0 0 511.999 511.999',
    }}
    xmlSpace="preserve">
    <Path
      style={{
        fill: '#fff',
      }}
      d="M502.87 75.474c-12.201-12.204-31.952-12.205-44.154-.001L163.89 370.299 53.284 259.693c-12.201-12.204-31.952-12.205-44.154-.001-12.173 12.174-12.173 31.981 0 44.153L141.814 436.53c12.199 12.198 31.953 12.2 44.153 0L502.87 119.626c12.172-12.173 12.172-31.981 0-44.152z"
    />
    <Path
      style={{
        fill: '#fff',
      }}
      d="M502.87 75.474c-12.201-12.204-31.952-12.205-44.154-.001L243.511 290.678v88.306L502.87 119.626c12.172-12.173 12.172-31.981 0-44.152z"
    />
  </Svg>
);

export default Confirm;
