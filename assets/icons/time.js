import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Time = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 500"
    width={props.width}
    stroke={props.colors}
    height={props.height}
    xmlSpace="preserve">
    <Path
      fill="#34B5FF"
      d="M183.4 439.3c-4.9-1.7-7.5-7.1-5.8-12l7.7-22.1c1.7-4.9 7.1-7.5 12-5.8 4.9 1.7 7.5 7.1 5.8 12l-7.7 22.1c-1.7 5-7.1 7.5-12 5.8zM328.2 439.3c4.9-1.7 7.5-7.1 5.8-12l-7.7-22.1c-1.7-4.9-7.1-7.5-12-5.8-4.9 1.7-7.5 7.1-5.8 12l7.7 22.1c1.7 5 7.1 7.5 12 5.8zM364.1 148.4h-8.8c0-54.9-44.6-99.5-99.5-99.5s-99.5 44.6-99.5 99.5h-8.8c0-59.7 48.6-108.3 108.3-108.3 59.7 0 108.3 48.6 108.3 108.3z"
    />
    <Path
      fill="#34B5FF"
      d="m128.975 138.244 18.866-14.013 36.732 49.452-18.866 14.013zM341.653 194.951l-18.865-14.01 36.726-49.453 18.865 14.01zM267.152 160.873l-7.468-5.543 36.713-49.465 7.468 5.543z"
    />
    <Path
      fill="#34B5FF"
      d="M409.9 281c0 85.1-69 154.1-154.1 154.1s-154.1-69-154.1-154.1 69-154.1 154.1-154.1 154.1 69 154.1 154.1z"
    />
    <Path
      fill="#34B5FF"
      d="M403.4 281c0 81.5-66.1 147.6-147.6 147.6S108.2 362.5 108.2 281s66.1-147.6 147.6-147.6 147.6 66 147.6 147.6z"
    />
    <Path
      fill="#34B5FF"
      d="M388.8 281c0 73.4-59.5 133-133 133-73.4 0-133-59.5-133-133 0-73.4 59.5-133 133-133 73.4 0 133 59.5 133 133z"
    />
    <Path
      fill="#FFF"
      d="M373.5 281c0 65-52.7 117.7-117.7 117.7S138.1 346 138.1 281s52.7-117.7 117.7-117.7S373.5 216 373.5 281z"
    />
    <Path
      fill="#34B5FF"
      d="m255.8 290.7-58.7-33.9 5.4-9.4 53.3 30.7 77.2-46.2 5.4 9.5z"
    />
    <Path
      fill="#34B5FF"
      d="M270.7 281c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.6 14.9 14.9z"
    />
    <Path
      fill="#34B5FF"
      d="M260.6 177.1c0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8zM208 188.6c1.3 2.3.5 5.2-1.7 6.5-2.3 1.3-5.2.5-6.5-1.7-1.3-2.3-.5-5.2 1.7-6.5 2.3-1.3 5.2-.6 6.5 1.7zM168.2 224.9c2.3 1.3 3.1 4.2 1.8 6.5s-4.2 3.1-6.5 1.7c-2.3-1.3-3.1-4.2-1.7-6.5 1.2-2.2 4.1-3 6.4-1.7zM151.9 276.2c2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8.1-2.7 2.2-4.8 4.8-4.8zM163.5 328.8c2.3-1.3 5.2-.5 6.5 1.8s.5 5.2-1.8 6.5c-2.3 1.3-5.2.5-6.5-1.8-1.3-2.3-.5-5.2 1.8-6.5zM199.7 368.6c1.3-2.3 4.2-3.1 6.5-1.8s3.1 4.2 1.7 6.5c-1.3 2.3-4.2 3.1-6.5 1.8-2.2-1.3-3-4.3-1.7-6.5zM251 384.9c0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.6-.1-4.8-2.2-4.8-4.8zM303.6 373.3c-1.3-2.3-.5-5.2 1.8-6.5 2.3-1.3 5.2-.5 6.5 1.8 1.3 2.3.5 5.2-1.8 6.5-2.3 1.3-5.2.5-6.5-1.8zM343.4 337c-2.3-1.3-3.1-4.2-1.7-6.5 1.3-2.3 4.2-3.1 6.5-1.8s3.1 4.2 1.7 6.5c-1.3 2.4-4.2 3.1-6.5 1.8zM359.7 285.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8 0 2.7-2.2 4.8-4.8 4.8zM348.2 233.2c-2.3 1.3-5.2.5-6.5-1.7-1.3-2.3-.5-5.2 1.7-6.5 2.3-1.3 5.2-.5 6.5 1.7 1.3 2.2.5 5.1-1.7 6.5zM311.9 193.4c-1.3 2.3-4.2 3.1-6.5 1.7-2.3-1.3-3.1-4.2-1.8-6.5s4.2-3.1 6.5-1.7c2.3 1.3 3.1 4.2 1.8 6.5z"
    />
    <Path
      fill="#34B5FF"
      d="M200 117.5c-19.4-24.7-55-29.7-80.4-10.8-25.4 18.8-30.9 54.4-12.9 80.1l93.3-69.3z"
    />
    <Path
      fill="#34B5FF"
      d="m115.836 157.232 33.16-24.623 4.293 5.78-33.16 24.623z"
    />
    <Path
      fill="#34B5FF"
      d="M312.6 117.5c19.4-24.7 55-29.7 80.4-10.8 25.4 18.8 30.9 54.4 12.9 80.1l-93.3-69.3z"
    />
    <Path
      fill="#34B5FF"
      d="m365.445 142.875-33.16-24.624 4.293-5.78 33.16 24.623z"
    />
    <Path
      fill="#34B5FF"
      d="M312.6 107.5c0 6.8-5.6 12.4-12.4 12.4-6.8 0-12.4-5.5-12.4-12.4 0-6.8 5.5-12.4 12.4-12.4 6.8.1 12.4 5.6 12.4 12.4z"
    />
    <Path
      fill="#34B5FF"
      d="m103.8 382.1 4.9-3.7c-20.3-27.2-32.4-60.9-32.4-97.4 0-23.4 5-45.7 13.9-65.8l-5.6-2.5c-9.2 20.9-14.4 44-14.4 68.3 0 37.8 12.5 72.8 33.6 101.1z"
    />
    <Path
      fill="#34B5FF"
      d="m78.1 397.4 4.9-3.7C59.3 362.2 45.2 323 45.2 280.6c0-27 5.7-52.6 16-75.9l-5.6-2.5c-10.6 24-16.5 50.5-16.5 78.3 0 43.9 14.5 84.3 39 116.9z"
    />
    <Path
      fill="#34B5FF"
      d="m53.1 417.8 4.9-3.7c-28-37.2-44.7-83.5-44.7-133.6 0-31.9 6.8-62.2 18.9-89.6l-5.6-2.5c-12.4 28.2-19.4 59.3-19.4 92.1.1 51.6 17.2 99.1 45.9 137.3zM407.8 382.1l-4.9-3.7c20.3-27.2 32.4-60.9 32.4-97.4 0-23.4-5-45.7-13.9-65.8l5.6-2.5c9.3 20.9 14.4 44 14.4 68.3 0 37.8-12.5 72.8-33.6 101.1z"
    />
    <Path
      fill="#34B5FF"
      d="m433.5 397.4-4.9-3.7c23.7-31.5 37.8-70.7 37.8-113.1 0-27-5.7-52.6-16-75.9l5.6-2.5c10.6 24 16.5 50.5 16.5 78.3.1 43.9-14.5 84.3-39 116.9z"
    />
    <Path
      fill="#34B5FF"
      d="m458.5 417.8-4.9-3.7c28-37.2 44.7-83.5 44.7-133.6 0-31.9-6.8-62.2-18.9-89.6l5.6-2.5c12.4 28.2 19.4 59.3 19.4 92.1 0 51.6-17.1 99.1-45.9 137.3z"
    />
  </Svg>
);

export default Time;