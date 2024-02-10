import styles from "./ChatWithDocumentsContainer.module.css";

const ChatWithDocumentsContainer = () => {
  return (
    <main className={styles.divlayoutWrapper}>
      <div className={styles.divsidebarView}>
        <div className={styles.form}>
          <input
            className={styles.searchFileName}
            placeholder="Search file name."
            type="text"
          />
          <img
            className={styles.spanelInputSuffixInnerIcon}
            alt=""
            src="/spanelinput--suffixinner.svg"
          />
        </div>
        <div className={styles.fileItemDate}>
          <div className={styles.sVGCollectionIcon}>
            <img
              className={styles.svgIcon}
              loading="eager"
              alt=""
              src="/svg.svg"
            />
            <div className={styles.sampleChatdocUser}>
              [SAMPLE] ChatDOC_User_…
            </div>
          </div>
          <div className={styles.sidebarCollectionPreview}>
            <div className={styles.divfileItemDate}>
              <img
                className={styles.svgIcon1}
                loading="eager"
                alt=""
                src="/svg-1.svg"
              />
              <div className={styles.fileNameLabel}>2024-02-01 06:27:17</div>
            </div>
            <img
              className={styles.svgIcon2}
              loading="eager"
              alt=""
              src="/svg-2.svg"
            />
          </div>
        </div>
        <div className={styles.uploadPageLayout}>
          <div className={styles.sidebarLinkWrapper}>
            <img
              className={styles.svgIcon3}
              loading="eager"
              alt=""
              src="/svg-3.svg"
            />
            <div className={styles.sampleCollection}>[SAMPLE] Collection</div>
          </div>
          <div className={styles.filesList}>
            <div className={styles.files}>3 files</div>
            <img
              className={styles.svgIcon4}
              loading="eager"
              alt=""
              src="/svg-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.divgutterHorizontal} />
      <section className={styles.divuploadPage}>
        <div className={styles.divleft}>
          <div className={styles.logoorLinkIcon}>
            <img
              className={styles.svgIcon5}
              loading="eager"
              alt=""
              src="/svg-5.svg"
            />
            <b className={styles.signInTo}>Sign in to upload your own files.</b>
          </div>
          <div className={styles.divurlUploadText}>
            <div className={styles.uRLFilePreview}>
              <img
                className={styles.svgIcon6}
                loading="eager"
                alt=""
                src="/svg-6.svg"
              />
              <b className={styles.uploadFilesThrough}>
                Upload files through URL
              </b>
            </div>
            <div className={styles.divseparator} />
            <div className={styles.sVGContainer}>
              <input className={styles.svg} type="checkbox" />
              <div className={styles.linkList}>
                <b className={styles.chatWithWebsite}>Chat with website</b>
              </div>
              <img
                className={styles.svgIcon7}
                loading="eager"
                alt=""
                src="/svg-8.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.linkPolicyParent}>
            <div className={styles.linkPolicy}>Policy</div>
            <div className={styles.div}>·</div>
            <div className={styles.linkTerms}>Terms</div>
            <div className={styles.div1}>·</div>
            <div className={styles.linkTwitter}>Twitter</div>
            <div className={styles.div2}>·</div>
            <div className={styles.linkDiscord}>Discord</div>
            <div className={styles.div3}>·</div>
            <div className={styles.linkWiki}>Wiki</div>
            <div className={styles.div4}>·</div>
            <div className={styles.linkChangelog}>Changelog</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChatWithDocumentsContainer;