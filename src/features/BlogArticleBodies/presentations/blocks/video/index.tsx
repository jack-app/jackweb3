import { Video } from "@/types/block";

type Props = {
  video?: Video;
  id: string;
};

export const VideoPresentation: React.FC<Props> = ({ video, id }) => {
  if (video?.type === "external") {
    const youtubeUrl = video?.external?.url;
    if (!youtubeUrl) return null;
    const youtubeEmbedUrl = youtubeUrl.replace("shorts", "embed").replace("watch?v=", "embed/");
    return (
      <iframe
        key={id}
        height={500}
        src={youtubeEmbedUrl}
        allowFullScreen
        title={youtubeUrl}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    );
  }

  if (video?.type === "file") {
    return (
      <video key={id} controls>
        <source src={video?.file?.url} type="video/mp4" />
        <track default kind="captions" srcLang="en" src="" />
        Your browser does not support the video tag.
      </video>
    );
  }
};
