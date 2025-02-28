import { useEffect, useRef } from "react";
import FocusableLinkCell from "../../components/Cell/FocusableLinkCell";
import FocusableCollection from "../../components/Collection/FocusableCollection";
import { setFocus } from "@hrgui/spatial-navigation-core";
import { scrollTo } from "scroll-polyfill";
import { getChildVisibilityInParent } from "../../utils/dom-utils";

const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setFocus("a");
  }, []);

  function handleFocusedChild(el: HTMLElement) {
    const collectionElRect = el.getBoundingClientRect();
    const rootEl = document.getElementById("main-container");

    const { isFullyVisible } = getChildVisibilityInParent({ parent: rootEl!, child: el });

    if (isFullyVisible) {
      return;
    }

    scrollTo(ref.current!, { top: collectionElRect.top });
  }

  return (
    <div
      className="overflow-hidden absolute w-full h-full @asvw:pl-[160px] @asvw:pt-[40px]"
      ref={ref}
    >
      <FocusableCollection
        className="@asvw:mb-[80px]"
        onFocusedChild={handleFocusedChild}
        focusKey="collection-1"
        header="Meowing for days"
      >
        <FocusableLinkCell
          to="/"
          focusKey="a"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
        <FocusableLinkCell
          to="/"
          focusKey="b"
          imageUrl="https://placehold.co/528x297/00FF00/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
        <FocusableLinkCell
          to="/"
          focusKey="c"
          imageUrl="https://placehold.co/528x297/FF0000/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />

        <FocusableLinkCell
          to="/"
          focusKey="d"
          imageUrl="https://placehold.co/528x297/FF0000/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
      </FocusableCollection>

      <FocusableCollection
        className="@asvw:mb-[80px]"
        onFocusedChild={handleFocusedChild}
        focusKey="collection-2"
        header="Meowing for days 2"
      >
        <FocusableLinkCell
          to="/"
          focusKey="aa"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
        <FocusableLinkCell
          to="/"
          focusKey="bb"
          imageUrl="https://placehold.co/528x297/00FF00/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
        <FocusableLinkCell
          to="/"
          focusKey="cc"
          imageUrl="https://placehold.co/528x297/FF0000/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
      </FocusableCollection>

      <FocusableCollection
        className="@asvw:mb-[80px]"
        onFocusedChild={handleFocusedChild}
        focusKey="collection-3"
        header="Meowing for days 3"
      >
        <FocusableLinkCell
          to="/"
          focusKey="aaa"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
        <FocusableLinkCell
          to="/"
          focusKey="bbb"
          imageUrl="https://placehold.co/528x297/00FF00/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
        <FocusableLinkCell
          to="/"
          focusKey="ccc"
          imageUrl="https://placehold.co/528x297/FF0000/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
        />
      </FocusableCollection>
    </div>
  );
};

export default HomePage;
