import { useCallback } from "react";

const DivbannerWrapper = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://pdfparser.io/");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://chatdoc.com/chatdoc/");
  }, []);

  return (
    <section className="mq768:h-[850px] self-stretch h-[1155px] [background:linear-gradient(180deg,_#f6faff,_#eaf3ff)] flex flex-col items-center justify-start pt-[37px] pb-0 pr-5 pl-[21px] box-border gap-[31px] max-w-full text-left text-lg text-chatdoc-com-1920x1080-default-shuttle-gray font-chatdoc-com-1920x1080-default-poppins-regular-20 mq1300:gap-[31px]">
      <div className="flex flex-col items-center justify-start max-w-full shrink-0">
        <div className="w-[828px] flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
              <div
                className="self-stretch flex flex-col items-start justify-start max-w-full cursor-pointer"
                onClick={onLinkContainerClick}
              >
                {/* <div className=" self-stretch flex flex-row items-center justify-center py-[1.5px] px-0 box-border [row-gap:20px] max-w-full">
                  <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                    <div className=" flex flex-col items-start justify-start">
                      <div className=" flex flex-col items-center justify-center">
                        <img
                          className="w-10 h-auto "
                          alt=""
                          src="/image-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border min-w-[486px] max-w-full mq1300:min-w-full">
                    <a
                      className="relative leading-[27px] text-[inherit] [text-decoration:none] font-bold mq768:text-[12px]"
                      href="https://pdfparser.io/"
                      target="_blank"
                    >
                      Accurately extract PDF data with ChatDOC API - Join
                      ChatDOC PDF Parser Waitlist
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2.5">
                    <div className="overflow-hidden flex flex-col items-start justify-start">
                      <div className="overflow-hidden flex flex-col items-center justify-center">
                        <img className="w-5 h-auto" alt="" src="/image-2.svg" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className=" mq768:text-[12px] flex flex-row items-center justify-center py-1.5px px-0 box-border gap-x-2 max-w-full">
                  <div className="flex items-center justify-center">
                    <img className="w-10 h-auto" alt="" src="/image-1.svg" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border min-w-0 max-w-full">
                    <a
                      className="[text-decoration:none] relative leading-27px text-[inherit] font-bold"
                      href="https://pdfparser.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Accurately extract PDF data with ChatDOC API - Join
                      ChatDOC PDF Parser Waitlist
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <img className="w-5 h-auto" alt="" src="/image-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="m-0 h-[120px] relative text-31xl leading-[60px] font-bold font-inherit text-chatdoc-com-1920x1080-default-big-stone text-center flex items-center mt-[-1px] mq1300:text-21xl mq1300:leading-[48px] mq450:text-11xl mq768:leading-[36px]">
          <span>
            <p className="m-0 mq768:text-[26px]">Chat with documents.</p>
            <p className="m-0 mq768:text-[26px]">
              Get instant answers with cited sources.
            </p>
          </span>
        </h1>
      </div>
      <div className="w-[1127px] flex flex-col items-center justify-start max-w-full text-center text-chatdoc-com-1920x1080-default-bright-gray">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
          <div className="mq1300:relative leading-[27px] mq768:leading-[20px]">
            {/* <p className="m-0 mq768:text-[13px]">{`Dive into PDFs like never before with ChatDOC. Let AI summarize long documents, `}</p> */}
            <p className="m-0 mq768:text-[13px]">
              Dive into PDFs like never before with ChatDOC. Let AI summarize
              long documents, explain complex concepts, and find key information
              in seconds.
            </p>
          </div>
        </div>
        <div className="w-[866px] flex flex-col items-center justify-start max-w-full text-left text-chatdoc-com-1920x1080-default-santas-gray">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[264px] flex flex-row items-center justify-center relative">
            <img
              className="h-full flex-1 absolute my-0 mx-[!important] w-full right-[0.5px] bottom-[-1.6px] left-[-0.5px] max-w-full overflow-hidden object-cover z-[1]"
              alt=""
              src="/svg@2x.png"
            />
            <div
              className="flex-1 rounded flex flex-row items-center justify-center p-0.5 cursor-pointer z-[2]"
              onClick={onLinkContainer2Click}
            >
              <div className="flex-1 rounded-md flex flex-row items-center justify-end py-[13px] px-10 whitespace-nowrap border-[1px] border-blue-100">
                <div className="mq1300:h-[59px] mq1300:w-[255px] relative rounded-md box-border hidden border-[1px] border-solid border-blue-100" />{" "}
                <a
                  className="relative text-5xl leading-[33px] font-medium font-chatdoc-com-1920x1080-default-poppins-regular-20 text-chatdoc-com-1920x1080-default-havelock-blue text-center [text-decoration:none] mq768:text-[16px]"
                  href="https://chatdoc.com/chatdoc/"
                  target="_blank"
                >
                  Try for Free
                </a>
              </div>
            </div>
          </button>
          <div className="mq768:text-[13px] self-stretch flex flex-col items-start justify-end py-5 px-0 box-border min-h-[108px] max-w-full">
            <div className="mq768:flex-col self-stretch flex flex-row flex-wrap items-center justify-center max-w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[27px]">Supported Formats</div>
              </div>
              <div className=" mq768:text-[13px] flex-1 flex flex-row flex-wrap items-center justify-center p-px box-border gap-[9.41px] min-w-[335px] max-w-full ml-[-1.92px] text-base">
                <div className="w-[66px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(226.79deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    PDF
                  </div>
                </div>
                <div className="w-[74px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(233.84deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    DOC
                  </div>
                </div>
                <div className="w-[84px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(240.48deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    DOCX
                  </div>
                </div>
                <div className="w-[81px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(239.08deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    SCAN
                  </div>
                </div>
                <div className="w-[101px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(247.96deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    WEBSITE
                  </div>
                </div>
                <div className="w-[76px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(235.26deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    EPUB
                  </div>
                </div>
                <div className="w-[63px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(222.69deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    MD
                  </div>
                </div>
                <div className="w-[65px] rounded-mid bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_10px_35px_rgba(53,_16,_150,_0.1)] box-border flex flex-col items-start justify-start py-px pr-[15px] pl-[18px] border-[1px] border-solid border-chatdoc-com-1920x1080-default-portage">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(225.25deg,_rgba(157,_157,_249,_0.9)_3.61%,_rgba(29,_69,_194,_0.9)_87.27%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    TXT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center ">
          {/* <div className="flex-1 flex flex-row items-center justify-center max-w-[3378px] mq1300:max-w-full mq768:max-w-full mq450:max-w-full mq2175:max-w-full mq3000:max-w-full"> */}
          {/* <div className="flex-1 overflow-hidden flex flex-row items-center justify-center mq768:max-w-full max-w-[1125px] mq1300:max-w-full"> */}
          {/* <div className="flex-1 overflow-hidden flex flex-row items-center justify-center max-w-full"> */}
          <img
            className="  flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="eager"
            alt=""
            src="/bannerwebp@2x.png"
          />
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        {/* <div className="w-full flex items-center max-w-[1125px justify-center">
          <img
            className="w-full object-cover"
            loading="eager"
            alt=""
            src="/bannerwebp@2x.png"
          />
        </div> */}
      </div>
    </section>
  );
};

export default DivbannerWrapper;
