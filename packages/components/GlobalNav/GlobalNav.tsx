import { useEffect, useState } from "react";
import { FocusableLink } from "../FocusableLink/FocusableLink";
import { useFocusable, FocusContext } from "@hrgui/react-spatial-navigation";
import { getPreviousFocusKey, setFocus } from "@hrgui/spatial-navigation-core";
import { twMerge } from "tailwind-merge";

const GlobalNav = () => {
  const [lastFocusedKeyBeforeMenu, setLastFocusedKeyBeforeMenu] = useState<string | null>(null);
  const { ref, focusKey, hasFocusedChild, focused } = useFocusable({
    focusKey: "menu",
    focusable: true,
    isFocusBoundary: false,
    trackChildren: true,
    autoRestoreFocus: true,
    onDidNotNavigate: (_, props) => {
      if (props.direction === "right" && lastFocusedKeyBeforeMenu) {
        setFocus(lastFocusedKeyBeforeMenu);
      }
    },
    onChildUpdateFocus(newState) {
      if (newState) {
        setLastFocusedKeyBeforeMenu(getPreviousFocusKey());
      }
    },
    focusBoundaryDirections: ["up", "down"],
  });

  const isFocused = hasFocusedChild || focused;

  useEffect(() => {
    setFocus("global-nav-home");
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className={twMerge(
          "fixed flex flex-shrink-0 flex-col text-cta font-semibold h-full @asvw:mr-[40px] @asvw:pt-[40px] @asvw:pb-[40px] @asvw:pl-[40px] z-10 bg-black-fade",
          !isFocused ? "@asvw:w-[84px]" : "@asvw:w-[510px] bg-gray-900/100 @asvw:pr-[40px]"
        )}
      >
        <FocusableLink
          to="/home"
          className="flex items-center @asvw:h-[72px] mb-auto w-full  @asvw:p-[16px] @asvw:rounded-[10px]"
          focusClassName="bg-primary/100"
        >
          <span className="material-symbols-outlined @asvw:mr-[10px]">account_circle</span>
          {isFocused && <span>User</span>}
        </FocusableLink>

        <FocusableLink
          focusKey="global-nav-search"
          to="/search"
          className="flex items-center @asvw:h-[72px] w-full  @asvw:p-[16px] @asvw:rounded-[10px]"
          focusClassName="bg-primary/100"
        >
          <span className="material-symbols-outlined @asvw:mr-[10px]">search</span>
          {isFocused && <span>Search</span>}
        </FocusableLink>
        <FocusableLink
          focusKey="global-nav-home"
          to="/home"
          className="flex items-center @asvw:h-[72px] w-full  @asvw:p-[16px] @asvw:rounded-[10px]"
          focusClassName="bg-primary/100"
        >
          <span className="material-symbols-outlined @asvw:mr-[10px]">home</span>
          {isFocused && <span>Home</span>}
        </FocusableLink>
        <FocusableLink
          focusKey="global-nav-watchlist"
          to="/watchlist"
          className="flex items-center @asvw:h-[72px] w-full  @asvw:p-[16px] @asvw:rounded-[10px]"
          focusClassName="bg-primary/100"
        >
          <span className="material-symbols-outlined @asvw:mr-[10px]">subscriptions</span>
          {isFocused && <span>Watchlist</span>}
        </FocusableLink>
        <FocusableLink
          focusKey="global-nav-history"
          to="/history"
          className="flex items-center @asvw:h-[72px] w-full  @asvw:p-[16px] @asvw:rounded-[10px]"
          focusClassName="bg-primary/100"
        >
          <span className="material-symbols-outlined @asvw:mr-[10px]">search_activity</span>
          {isFocused && <span>History</span>}
        </FocusableLink>
        <FocusableLink
          focusKey="global-nav-browse"
          to="/browse"
          className="flex items-center @asvw:h-[72px] w-full  @asvw:p-[16px] @asvw:rounded-[10px]"
          focusClassName="bg-primary/100"
        >
          <span className="material-symbols-outlined @asvw:mr-[10px]">web</span>
          {isFocused && <span>Browse</span>}
        </FocusableLink>

        <FocusableLink
          focusKey="global-nav-settings"
          to="/settings"
          className="mt-auto flex items-center @asvw:h-[72px] w-full  @asvw:p-[16px] @asvw:rounded-[10px]"
          focusClassName="bg-primary/100"
        >
          <span className="material-symbols-outlined @asvw:mr-[10px]">settings</span>
          {isFocused && <span>Settings</span>}
        </FocusableLink>
      </div>
    </FocusContext.Provider>
  );
};

export default GlobalNav;
