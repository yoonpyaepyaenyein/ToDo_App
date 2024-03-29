import * as React from 'react';
import Svg, {
  SvgProps,
  Defs,
  Path,
  ClipPath,
  Use,
  Image,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 51 51"
    style={{
      enableBackground: 'new 0 0 51 51',
    }}
    xmlSpace="preserve"
    {...props}>
    <Defs>
      <Path id="a" d="M0 0h51v51H0z" />
    </Defs>
    <ClipPath id="b">
      <Use
        xlinkHref="#a"
        style={{
          overflow: 'visible',
        }}
      />
    </ClipPath>
    <Image
      style={{
        overflow: 'visible',
        clipPath: 'url(#b)',
      }}
      width={51}
      height={51}
      xlinkHref="data:image/png;base64,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 AAAAAElFTkSuQmCC"
    />
  </Svg>
);

export default SvgComponent;
