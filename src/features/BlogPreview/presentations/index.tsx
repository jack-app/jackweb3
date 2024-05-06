import React from "react";
import { BlogPreviewBody } from "@/features/BlogPreviewBody";
import { BlogPreviewUsage } from "@/features/BlogPreviewUsage";
import { Block } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  notionPageId: string;
  showPreview: (id: string) => void;
  showPreviewAndSyncQueryParam: (id: string) => void;
};

export const BlogPreviewPresentation: React.FC<Props> = ({
  notionPageId,
  showPreview,
  showPreviewAndSyncQueryParam,
}) => {
  return (
    <div className={styles.BlogPreviewContainer}>
      <BlogPreviewUsage
        notionPageId={notionPageId}
        showPreview={showPreview}
        showPreviewAndSyncQueryParam={showPreviewAndSyncQueryParam}
      />
      <BlogPreviewBody notionPageId={notionPageId} />
    </div>
  );
};
