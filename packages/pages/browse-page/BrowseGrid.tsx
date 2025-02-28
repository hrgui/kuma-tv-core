import { useCallback, useRef } from "react";
import FocusableLinkCell from "../../components/Cell/FocusableLinkCell";
import { elementScroll, useVirtualizer, VirtualizerOptions } from "@tanstack/react-virtual";
import Grid from "../../components/Grid/Grid";
import { getRandomColors } from "../../utils/color-utils/getRandomColors";

const BrowseGrid = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToFn: VirtualizerOptions<any, any>["scrollToFn"] = useCallback(
    (offset, canSmooth, instance) => {
      const start = ref.current?.scrollTop || 0;

      elementScroll(start + (offset - start), canSmooth, instance);
    },
    [ref]
  );

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => ref.current,
    estimateSize: () => 481,
    overscan: 5,
    scrollToFn,
  });

  function handleCellFocus(el: Element) {
    rowVirtualizer.scrollToIndex(+(el.getAttribute("data-index") || 0));
  }

  return (
    <div
      ref={ref}
      className="no-scrollbar"
      style={{
        height: `${window.innerHeight}px`,
        width: `${window.innerWidth}px`,
        overflow: "auto",
        paddingTop: 40,
      }}
    >
      <Grid
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
        focusableProps={{
          getSiblings(components) {
            return [components["filters"]];
          },
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const index = virtualRow.index;
          const col1Color = getRandomColors();
          const col2Color = getRandomColors();
          const col3Color = getRandomColors();

          return (
            <div
              key={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
                display: "flex",
              }}
            >
              <FocusableLinkCell
                data-index={`${index}`}
                onSpatialFocus={handleCellFocus}
                isGridCell
                to="/"
                focusKey={`${index}-0`}
                imageUrl={`https://placehold.co/528x297/${col1Color}`}
                header1={`KUMA THE ROCK!` + index + "-" + 0}
                header2="Sub | Dub"
                header3="14+"
                className="@asvw:mr-[26px]"
                extraProps={{ row: index, col: 0 }}
              />
              <FocusableLinkCell
                data-index={`${index}`}
                onSpatialFocus={handleCellFocus}
                isGridCell
                to="/"
                focusKey={`${index}-1`}
                imageUrl={`https://placehold.co/528x297/${col2Color}`}
                header1={`KUMA THE ROCK!` + index + "-" + 1}
                header2="Sub | Dub"
                header3="14+"
                className="@asvw:mr-[26px]"
                extraProps={{ row: index, col: 1 }}
              />
              <FocusableLinkCell
                data-index={`${index}`}
                onSpatialFocus={handleCellFocus}
                isGridCell
                to="/"
                focusKey={`${index}-2`}
                imageUrl={`https://placehold.co/528x297/${col3Color}`}
                header1={`KUMA THE ROCK!` + index + "-" + 2}
                header2="Sub | Dub"
                header3="14+"
                className="@asvw:mr-[26px]"
                extraProps={{ row: index, col: 2 }}
              />
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default BrowseGrid;
