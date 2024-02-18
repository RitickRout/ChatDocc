
import { useEffect, useState } from "react";
import styles from "./ChatWithDocumentsContainer.module.css";
import uploadInBucket from '../bucketUpload /index';


const ChatWithDocumentsContainer = ({files,setFiles}) => {
 const [selectedDoc , setSelectedDoc]= useState([])

useEffect(()=>{
  console.log(files,"ghhhhhhhhhh")
  if(files.length){
    files.map(item=>{

    })
  }
},[])


  function dragOverHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
  function dropHandler(ev) {
    ev.preventDefault();
    const droppedFiles = [];
  
    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i].getAsFile();
          console.log(file,"fileeeee")
          droppedFiles.push(file);
        }
      }
    } else {
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        droppedFiles.push(ev.dataTransfer.files[i]);
      }
    }
  
    // Use Promise.all to wait for all uploads to complete
    Promise.all(droppedFiles.map(file => uploadInBucket({ file })))
      .then(() => {
        // All files uploaded successfully
        console.log("All files uploaded successfully.");
      })
      .catch(error => {
        // Handle errors if any upload fails
        console.error("Error uploading files:", error);
      });
  
     setFiles(prevFiles => [...prevFiles, ...droppedFiles]); // Update the state with new files
    
  }



  console.log(files, "FFFFFF")
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
            <div className={styles.files}>{files.length} files</div>
            <img
              className={styles.svgIcon4}
              loading="eager"
              alt=""
              src="/svg-2.svg"
            />
          </div>
        </div>
        {files.length> 0? <>
        {files?.map(item=><> 
          <div className={styles.fileItemDate}>
          <div className={styles.sVGCollectionIcon}>
            <img
              className={styles.svgIcon}
              loading="eager"
              alt=""
              src="/svg.svg"
            />
            <div className={styles.sampleChatdocUser}>
             {item.name}
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
        </div></>)}
        </>:<></> }
      </div>
      <div className={styles.divgutterHorizontal} />
      <section className={styles.divuploadPage}>
      <div id="drop_zone"   className={styles.dropZone}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}>
        {1>0 ?<div className={styles.divleft}>
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
        </div>:<> <DocViewer documents={selectedDoc} /></>}
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
