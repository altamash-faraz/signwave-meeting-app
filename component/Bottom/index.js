import cx from "classnames";
import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";

import styles from "@/component/Bottom/index.module.css";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div className={styles.bottomContainer}>
      <div className={styles.controls}>
        <button
          className={cx(styles.controlButton, muted && styles.muted)}
          onClick={toggleAudio}
          title={muted ? "Unmute microphone" : "Mute microphone"}
        >
          {muted ? <MicOff size={24} /> : <Mic size={24} />}
        </button>

        <button
          className={cx(styles.controlButton, !playing && styles.disabled)}
          onClick={toggleVideo}
          title={playing ? "Turn off camera" : "Turn on camera"}
        >
          {playing ? <Video size={24} /> : <VideoOff size={24} />}
        </button>

        <button
          className={cx(styles.controlButton, styles.endCall)}
          onClick={leaveRoom}
          title="Leave meeting"
        >
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
};

export default Bottom;
