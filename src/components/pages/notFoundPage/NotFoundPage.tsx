import React from 'react'
import { useIntl } from "react-intl";
import { JumpButton } from '../../ui/buttons/jumpButton/JumpButton';

export const NotFoundPage = () => {
  const intl = useIntl();
  return (
    <div>
      <JumpButton />
      <h1>{intl.formatMessage({ id: "app.NotFoundPage.PageNotFound" })}</h1>
    </div>
  );
}
