import type { Meta, StoryObj } from "@storybook/react";
import { MemberStory } from "./";

type T = typeof MemberStory;

const meta: Meta<T> = {
  title: "ui/MemberStory",
  component: MemberStory,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    name: { control: "text" },
    type: { control: "text" },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    image: "https://placehold.jp/360x200.png",
    name: "名前",
    type: "所属",
    text: "むかしむかし、あしがら山の山奥に、金太郎という名前の男の子がいました。\n 金太郎の友だちは、山の動物たちです。 金太郎は毎日毎日、動物たちとすもうをして遊んでいました。「はっけよい、のこった、のこった」「金太郎、がんばれ、クマさんも負けるな」　だけど勝つのはいつも金太郎で、大きな体のクマでも金太郎にはかないません。「こうさん、こうさん、金太郎は強いなあ。でも、次は負けないぞ」　今度は、つな引きです。　金太郎一人と、山中の動物たちの勝負です。　動物たちの中には、体の大きなクマやウシやウマやシカもいましたが、金太郎にかないません。「つな引きも、金太郎の勝ち！」　なんとも大変力持ちの金太郎ですが、強いだけでなく、とてもやさしい男の子です。",
  },
};
