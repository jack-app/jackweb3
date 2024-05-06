import ContentLoader from "react-content-loader";

const BlogPreviewBodySkelton = (props: any) => (
  <ContentLoader
    speed={2}
    // width={848}
    height={800}
    // viewBox="0 0 848 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: "100%", height: "100%", maxWidth: "848px" }}
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="848" height="800" />
  </ContentLoader>
);

export default BlogPreviewBodySkelton;
