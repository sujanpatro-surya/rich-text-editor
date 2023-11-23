import { CSSProperties } from "react";

const Audio = (props: { src: string }): React.ReactElement => {
  return <audio controls src={props.src} style={styles.media} />;
};

const Image = (props: { src: string }): React.ReactElement => {
  return <img src={props.src} style={styles.media} />;
};

const Video = (props: { src: string }): React.ReactElement => {
  return <video controls src={props.src} style={styles.media} />;
};

export const Media = (props: {
  contentState: any;
  block: any;
}): React.ReactElement | undefined => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();

  let media: React.ReactElement | undefined;
  if (type === "audio") {
    media = <Audio src={src} />;
  } else if (type === "image") {
    media = <Image src={src} />;
  } else if (type === "video") {
    media = <Video src={src} />;
  }

  return media;
};

export const styles: { [styleName: string]: CSSProperties } = {
  root: {
    fontFamily: "'Georgia', serif",
    padding: 20,
    width: 600,
  },
  buttons: {
    marginBottom: 10,
  },
  urlInputContainer: {
    marginBottom: 10,
  },
  urlInput: {
    fontFamily: "'Georgia', serif",
    marginRight: 10,
    padding: 3,
  },
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: "center",
  },
  media: {
    width: "100%",
    // Fix an issue with Firefox rendering video controls
    // with 'pre-wrap' white-space
    whiteSpace: "initial",
  },
};
