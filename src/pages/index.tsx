import { TopScreen } from "@/screens/Top";
import { Meta } from "@/utils/meta";

export default function Home() {
  return (
    <>
      <Meta isHomePage={true} />
      <TopScreen />
    </>
  );
}
