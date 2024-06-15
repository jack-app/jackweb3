import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { PreviewScreen } from "@/screens/Preview";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
// type Props = {
//   notionId?: string | null;
// };

export default function Preview({ notionId }: Props) {
  // if (notionId === null) notionId = undefined;
  return <PreviewScreen notionId={notionId} />;
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  let notionId = query?.id ?? "";
  // let notionId = query?.id ?? null;
  if (Array.isArray(notionId)) notionId = notionId[0];
  return { props: { notionId } };
};
