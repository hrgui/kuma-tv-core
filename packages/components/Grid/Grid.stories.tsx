import type { StoryObj, Meta } from "@storybook/react";
import Grid from "./Grid";
import FocusableLinkCell from "../Cell/FocusableLinkCell";
import { useEffect } from "react";
import { setFocus } from "@hrgui/spatial-navigation-core";
const meta: Meta<typeof Grid> = { title: "Grid", component: Grid };

export default meta;

type Story = StoryObj<typeof Grid>;

export function DemoGrid() {
  useEffect(() => {
    setFocus("a");
  }, []);

  return (
    <Grid>
      <div className="flex">
        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="a"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 0, col: 0 }}
        />

        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="b"
          imageUrl="https://placehold.co/528x297/00FF00/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 0, col: 1 }}
        />

        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="c"
          imageUrl="https://placehold.co/528x297/FF0000/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 0, col: 2 }}
        />
      </div>

      <div className="flex">
        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="d"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 1, col: 0 }}
        />

        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="e"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 1, col: 1 }}
        />

        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="f"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 1, col: 2 }}
        />
      </div>

      <div className="flex">
        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="g"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 2, col: 0 }}
        />

        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="h"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 2, col: 1 }}
        />

        <FocusableLinkCell
          isGridCell
          to="/"
          focusKey="i"
          imageUrl="https://placehold.co/528x297/0000FF/FFF"
          header1="KUMA THE ROCK!"
          header2="Sub | Dub"
          header3="14+"
          className="@asvw:mr-[26px]"
          extraProps={{ row: 2, col: 2 }}
        />
      </div>
    </Grid>
  );
}

export const Default: Story = {
  render: () => {
    return <DemoGrid />;
  },
};
