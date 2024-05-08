import React from "react";
import { Heading1 } from "@/ui/Heading1";
import styles from "./index.module.scss";

type Props = {};

export const ActivitiesScreen: React.FC<Props> = (props) => {
  return (
    <div>
      <Heading1 enTitle="Activities" jaTitle="活動内容" />
    </div>
  );
};
