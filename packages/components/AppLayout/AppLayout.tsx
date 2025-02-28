import React, { forwardRef } from "react";
import CenterContent from "@hrgui/kuma-tv-core-react-component-center-content";
import MainContainer from "@hrgui/kuma-tv-core-react-component-main-container";
import GlobalNav from "@hrgui/kuma-tv-core-react-comp-global-nav";
import { Session } from "@hrgui/kuma-tv-core-api-eda-client/types";

type Props = {
  children?: React.ReactNode;
  sessionData?: Session;
};

const AppLayout = forwardRef<HTMLDivElement, Props>(({ children, sessionData }, ref) => {
  return (
    <CenterContent ref={ref} className="bg-gray-900">
      <MainContainer>
        <div className="flex h-full overflow-x-hidden">
          <GlobalNav sessionData={sessionData} />
          {children}
        </div>
      </MainContainer>
    </CenterContent>
  );
});

export default AppLayout;
