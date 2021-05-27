import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const InboxIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="#EEEEEE"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H1.99C.886 0 .01.895.01 2L0 16c0 1.104.886 2 1.99 2H16a2 2 0 002-2V2a2 2 0 00-2-2zm0 12h-4a3 3 0 11-6 0H1.99V2H16v10zm-3-5h-2V4H7v3H5l4 4 4-4z"
        fill={props.color}
        fillOpacity={props.focused ? 1 : 0.54}
      />
    </Svg>
  );
};

export const OutboxIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 21 18"
      fill="#EEEEEE"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7l15 1.999L0 11l.011 7 20.988-9.001L.011 0 0 7z"
        fill={props.color}
      />
    </Svg>
  );
};

export const TrashIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.999 4h-12v12A2 2 0 003 18h7.999a2 2 0 002-2V4zm-3.5-4.001h-5L3.5 1H.999A1 1 0 000 1.999V3h14V1.999A1 1 0 0012.999 1H10.5L9.499-.001z"
        fill={props.color}
      />
    </Svg>
  );
};

export const SpamIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 14.299a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6zM7.999 4h2v5.999h-2V4zm4.729-4H5.271L0 5.272v7.456l5.271 5.271h7.457l5.273-5.271V5.272L12.728 0z"
        fill={props.color}
      />
    </Svg>
  );
};

export const ForumsIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.001 4H17v9H3.999v2c0 .552.45 1 1.001 1h10.999L20 20V5a1 1 0 00-.999-1zm-5-4.001H1A1 1 0 000 1v14l3.999-4h10.002A1 1 0 0015 9.999V1a1 1 0 00-.999-1.001z"
        fill={props.color}
      />
    </Svg>
  );
};

export const UpdatesIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16h2V0H0v16zm3-5.001h11.001V0H3v10.999z"
        fill={props.color}
      />
    </Svg>
  );
};

export const PromosIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 5a1.5 1.5 0 11.003-3A1.5 1.5 0 013.5 5zm5.499-5H0v9a2 2 0 00.587 1.415l9.003 8.998c.361.362.861.587 1.414.587.553 0 1.053-.224 1.414-.585l6.994-6.995a1.996 1.996 0 00.001-2.83L10.415.585A2.008 2.008 0 008.999 0z"
        fill={props.color}
      />
    </Svg>
  );
};

export const PurchasesIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 16c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 000-4zm10 0c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 000-4zM2 0H-.001v1.999H2l3.598 7.588-1.353 2.451A2 2 0 006 15h12v-2H6.423a.249.249 0 01-.249-.25l.03-.121L7.102 11h7.449c.752 0 1.408-.415 1.75-1.029l3.574-6.489A1 1 0 0019 1.999H4.213l-.406-.854A1.997 1.997 0 002 0z"
        fill={props.color}
      />
    </Svg>
  );
};

export const SocialIcon = props => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={props.focused ? 1 : 0.54}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8C4.667 8-.001 9.167-.001 11.5v2.499H14V11.5C14 9.167 9.334 8 7 8zm8.001 0c-.291 0-.617.018-.966.054C15.193 8.892 16 10.017 16 11.5v2.499h5.999V11.5c0-2.333-4.665-3.5-6.998-3.5zM7-.001A3.001 3.001 0 007 6a2.993 2.993 0 002.991-3A2.994 2.994 0 007-.001zm8.001 0a3.002 3.002 0 000 6.001 2.992 2.992 0 002.989-3 2.993 2.993 0 00-2.989-3.001z"
        fill={props.color}
      />
    </Svg>
  );
};

export const Icon = ({name, ...rest}) => {
  switch (name) {
    case 'inbox':
      return <InboxIcon {...rest} />;
    case 'outbox':
      return <OutboxIcon {...rest} />;
    case 'trash':
      return <TrashIcon {...rest} />;
    case 'spam':
      return <SpamIcon {...rest} />;
    case 'forums':
      return <ForumsIcon {...rest} />;
    case 'updates':
      return <UpdatesIcon {...rest} />;
    case 'promos':
      return <PromosIcon {...rest} />;
    case 'purchases':
      return <PurchasesIcon {...rest} />;
    case 'social':
      return <SocialIcon {...rest} />;
    default:
      return null;
  }
};
