import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { PreviewScreen } from "@/screens/Preview";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Preview({ notionId }: Props) {
  return <PreviewScreen notionId={notionId} />;
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  let notionId = query?.id ?? "";
  if (Array.isArray(notionId)) notionId = notionId[0];
  return { props: { notionId } };
};
