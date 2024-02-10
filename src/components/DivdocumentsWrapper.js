import { useCallback } from "react";

const DivdocumentsWrapper = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open(
      "https://chatdoc.com/chatdoc/#/?case_doc=7c74ab47-aa06-403a-9487-18a900985d54"
    );
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open(
      "https://chatdoc.com/chatdoc/#/?case_doc=23748fa4-0667-483d-8405-ebb1d9f7335a"
    );
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open(
      "https://chatdoc.com/chatdoc/#/?case_doc=1149be22-3b82-4986-ae7f-c5987af8ff13"
    );
  }, []);

  const onLinkContainer4Click = useCallback(() => {
    window.open(
      "https://chatdoc.com/chatdoc/#/?case_doc=15555154-d4b9-43e1-b985-a0caaa881051"
    );
  }, []);

  return (
    <section className="self-stretch box-border flex flex-row items-end justify-center p-[58px] min-h-[762px] max-w-full text-center text-17xl text-chatdoc-com-1920x1080-default-big-stone font-chatdoc-com-1920x1080-default-poppins-regular-20 border-b-[1px] border-solid border-chatdoc-com-1920x1080-default-alto mq1300:py-[38px] mq1300:px-[29px] mq1300:box-border">
      <div className="w-[1460px] flex flex-col items-center justify-start gap-[70px] max-w-[1460px] mq1300:gap-[70px] mq450:gap-[70px] mq2175:max-w-full">
        <div className="flex flex-col items-center justify-start gap-[30px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-4">
            <h1 className="m-0 relative text-inherit tracking-[2px] mq768:leading-[20px] mq768:text-[24px] leading-[54px] font-semibold font-inherit inline-block max-w-[1460px] mq1300:text-10xl mq1300:leading-[43px] mq450:text-3xl mq450:leading-[32px] mq2175:max-w-full">
              Built for professionals
            </h1>
          </div>
          <div className="relative text-xl mq768:leading-[20px]  mq768:text-[14px] leading-[36px] text-chatdoc-com-1920x1080-default-bright-gray inline-block max-w-[1460px] mq450:text-base mq450:leading-[29px] mq2175:max-w-full">
            Others are diving into these files. Click to join 👇
          </div>
        </div>
        <div className="self-stretch grid flex-row items-end justify-between gap-[20px] grid-cols-[repeat(4,_minmax(184px,_1fr))] text-left text-3xl mq1300:justify-center mq1300:grid-cols-[minmax(184px,_1fr)]">
          <div className="flex flex-col items-center justify-start pt-0 px-0 pb-3.5 gap-[31px]">
            <div className="self-stretch rounded-21xl bg-chatdoc-com-1920x1080-default-nero flex flex-row items-center justify-center">
              <div
                className="flex-1 rounded-21xl flex flex-row items-center justify-center cursor-pointer"
                onClick={onLinkContainerClick}
              >
                <div className="flex-1 rounded-21xl bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_20px_38px_rgba(76,_101,_251,_0.2)] overflow-hidden flex flex-row items-center justify-center py-px px-0 border-[1px] border-solid border-chatdoc-com-1920x1080-default-havelock-blue">
                  <div className="flex-1 flex flex-row items-center justify-center max-w-[490px] mq1300:max-w-full">
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-center max-w-[243px]">
                      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center">
                        <img
                          className="h-[314.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/document1webp@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-5">
              <a
                className="relative tracking-[2px] leading-[33px] text-[inherit] [text-decoration:none] mq450:text-lg mq450:leading-[26px]"
                href="https://chatdoc.com/chatdoc/#/?case_doc=7c74ab47-aa06-403a-9487-18a900985d54"
                target="_blank"
              >
                Annual Report
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-0 px-0 pb-3.5 gap-[31px]">
            <div className="self-stretch rounded-21xl bg-chatdoc-com-1920x1080-default-nero flex flex-row items-center justify-center">
              <div
                className="flex-1 rounded-21xl flex flex-row items-center justify-center cursor-pointer"
                onClick={onLinkContainer2Click}
              >
                <div className="flex-1 rounded-21xl bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_20px_38px_rgba(76,_101,_251,_0.2)] overflow-hidden flex flex-row items-center justify-center py-px px-0 border-[1px] border-solid border-chatdoc-com-1920x1080-default-havelock-blue">
                  <div className="flex-1 flex flex-row items-center justify-center max-w-[490px] mq1300:max-w-full">
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-center max-w-[243px]">
                      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center">
                        <img
                          className="h-[314.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/document2webp@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[21px]">
              <a
                className="relative tracking-[2px] leading-[33px] text-[inherit] [text-decoration:none] mq450:text-lg mq450:leading-[26px]"
                href="https://chatdoc.com/chatdoc/#/?case_doc=23748fa4-0667-483d-8405-ebb1d9f7335a"
                target="_blank"
              >
                Research Paper
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-0 px-0 pb-3.5 gap-[31px]">
            <div className="self-stretch rounded-21xl bg-chatdoc-com-1920x1080-default-nero flex flex-row items-center justify-center">
              <div
                className="flex-1 rounded-21xl flex flex-row items-center justify-center cursor-pointer"
                onClick={onLinkContainer3Click}
              >
                <div className="flex-1 rounded-21xl bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_20px_38px_rgba(76,_101,_251,_0.2)] overflow-hidden flex flex-row items-center justify-center py-px px-0 border-[1px] border-solid border-chatdoc-com-1920x1080-default-havelock-blue">
                  <div className="flex-1 flex flex-row items-center justify-center max-w-[490px] mq1300:max-w-full">
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-center max-w-[243px]">
                      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center">
                        <img
                          className="h-[314.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/document3webp@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-2">
              <a
                className="relative tracking-[2px] leading-[33px] text-[inherit] [text-decoration:none] mq450:text-lg mq450:leading-[26px]"
                href="https://chatdoc.com/chatdoc/#/?case_doc=1149be22-3b82-4986-ae7f-c5987af8ff13"
                target="_blank"
              >
                Technical Manual
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[15px] gap-[30px]">
            <div className="self-stretch rounded-21xl bg-chatdoc-com-1920x1080-default-nero flex flex-row items-center justify-center">
              <div
                className="flex-1 rounded-21xl flex flex-row items-center justify-center cursor-pointer"
                onClick={onLinkContainer4Click}
              >
                <div className="flex-1 rounded-21xl bg-chatdoc-com-1920x1080-default-nero-02 shadow-[0px_20px_38px_rgba(76,_101,_251,_0.2)] overflow-hidden flex flex-row items-center justify-center py-px px-0 border-[1px] border-solid border-chatdoc-com-1920x1080-default-havelock-blue">
                  <div className="flex-1 flex flex-row items-center justify-center max-w-[490px] mq1300:max-w-full">
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-center max-w-[243px]">
                      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center">
                        <img
                          className="h-[313.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/document4webp@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[18px]">
              <a
                className="relative tracking-[2px] leading-[33px] text-[inherit] [text-decoration:none] mq450:text-lg mq450:leading-[26px]"
                href="https://chatdoc.com/chatdoc/#/?case_doc=15555154-d4b9-43e1-b985-a0caaa881051"
                target="_blank"
              >
                Legal Document
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivdocumentsWrapper;
