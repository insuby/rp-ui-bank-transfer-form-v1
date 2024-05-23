import './style.scss';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { CopyButton } from '../../ui';

type InfoItemProps = {
  heading: ReactNode;
  text: string;
  copiedValue: string;
  setCopiedValue: Dispatch<SetStateAction<string>>;
};

export const InfoItem = ({
  heading,
  text,
  copiedValue,
  setCopiedValue,
}: InfoItemProps) => {
  return (
    <div className="info-item">
      <h5 className="info-item__heading">{heading}</h5>
      <p className="info-item__text">{text}</p>
      <div className="info-item__copy">
        <CopyButton
          value={text}
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
        />
      </div>
    </div>
  );
};
