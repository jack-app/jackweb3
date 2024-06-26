import ContentLoader from "react-content-loader";

const BlogPreviewBodySkelton: React.FC = ({}) => (
  <ContentLoader
    speed={2}
    height={800}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: "100%", height: "100%", maxWidth: "848px" }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="848" height="800" />
  </ContentLoader>
);

export default BlogPreviewBodySkelton;
