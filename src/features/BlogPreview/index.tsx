import id from "@fullcalendar/core/locales/id.js";
import React from "react";
import { useBlogPreview } from "./hooks";
import { BlogPreviewPresentation } from "./presentations";

type Props = {};

export const BlogPreview: React.FC<Props> = () => {
  const { notionPageId, showPreview, showPreviewAndSyncQueryParam } = useBlogPreview();
  return (
    <BlogPreviewPresentation
      notionPageId={notionPageId}
      showPreview={showPreview}
      showPreviewAndSyncQueryParam={showPreviewAndSyncQueryParam}
    />
  );
};
