import EfficiencyBoostCard from "../components/EfficiencyBoostCard";
import ChatWithDocumentsContainer from "../components/ChatWithDocumentsContainer";
import styles from "./Chatdoccom.module.css";

const ChatdoccomByHtmltodesign = () => {
  return (
    <div className={styles.chatdoccomByHtmltodesign}>
      <header className={styles.divheaderView}>
        <div className={styles.frameParent}>
          <input className={styles.frameInput} type="checkbox" />
          <img
            className={styles.chatdocT6m4SyopngIcon}
            loading="eager"
            alt=""
            src="/chatdoct6m4syopng@2x.png"
          />
          <div className={styles.chatDocTMsyopng}>
            <h3 className={styles.heading1}>ChatDOC</h3>
          </div>
        </div>
        <div className={styles.aPILinkFrame}>
          <div className={styles.linkSVG}>
            <img
              className={styles.linkSvg}
              loading="eager"
              alt=""
              src="/link--svg.svg"
            />
            <div className={styles.linkJoin}>Join Discord</div>
          </div>
          <div className={styles.after} />
          <div className={styles.linkApi}>API</div>
          <EfficiencyBoostCard />
          <div className={styles.signIn}>Sign in</div>
        </div>
      </header>
      <ChatWithDocumentsContainer />
    </div>
  );
};

export default ChatdoccomByHtmltodesign;
