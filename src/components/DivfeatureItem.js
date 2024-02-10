import Free from "./Free";

const DivfeatureItem = () => {
  return (
    <div className="self-stretch bg-chatdoc-com-1920x1080-default-nero flex flex-row items-center justify-center p-[120px] box-border max-w-full shrink-0 text-left text-lg text-chatdoc-com-1920x1080-default-bright-gray font-chatdoc-com-1920x1080-default-poppins-regular-20 mq1300:py-[78px] mq1300:px-[30px] mq1300:box-border">
      <div className="w-[1460px] flex flex-col items-center justify-center max-w-[1460px] mq2175:max-w-full">
        <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[54.2px] max-w-full mq1300:gap-[54.2px]">
          <div className="w-[480px] flex flex-col items-start justify-start pt-0 px-0 pb-40 box-border gap-[60px] max-w-[480px] mq1300:gap-[60px] mq1300:pb-[104px] mq1300:box-border mq1300:max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full shrink-0">
              <Free
                efficiencywebp="/aiassistantwebp@2x.png"
                efficiencyBoost="Reliable AI Assistant."
                straightToKnowledgeViaQAs="Every response, backed by citations."
                propFlex="1"
                propAlignSelf="stretch"
                propTop="-1.25%"
                propBottom="1.25%"
                propFlex1="1"
                propMinWidth="275px"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="w-[500px] box-border flex flex-col items-end justify-start pt-0 pb-2.5 pr-0 pl-px gap-[19px] max-w-[104%] shrink-0 border-l-[1px] border-solid border-chatdoc-com-1920x1080-default-alto">
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <textarea
                    className="[border:none] bg-chatdoc-com-1920x1080-default-havelock-blue-10 h-[92px] w-auto [outline:none] self-stretch rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none flex flex-row items-center justify-center py-[9px] px-12 box-border font-chatdoc-com-1920x1080-default-poppins-regular-20 text-lg text-chatdoc-com-1920x1080-default-havelock-blue z-[1]"
                    placeholder={`Click on page references / footnotes to check
the accuracy of AI interpretation.`}
                    rows={5}
                    cols={25}
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-12 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="relative leading-[36px] inline-block max-w-[436px] mq450:max-w-full">
                      Go broad or be specific, steer your AI.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="flex flex-row items-center justify-start gap-[11px] max-w-full mq1300:flex-wrap">
                    <div className="relative leading-[36px] inline-block max-w-full">
                      Switch to GPT-4 for enhanced responses!
                    </div>
                    <div className="w-[45px] rounded-tl-none rounded-tr-8xs rounded-br-none rounded-bl-8xs bg-chatdoc-com-1920x1080-default-sandy-brown flex flex-row items-center justify-center text-xs text-chatdoc-com-1920x1080-default-nero">
                      <div className="relative leading-[17px] font-medium">
                        NEW
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-1 flex flex-row items-center justify-center min-w-[368px] max-w-[1460px] mq2175:max-w-full">
            <div className="mq768:h-[618px] mq1280:h-[400px] flex-1 box-border flex flex-row items-center justify-center p-px relative max-w-full border-[1px] border-solid border-chatdoc-com-1920x1080-default-alto">
              <img
                className="flex-1 relative z-[1] self-stretch w-full h-auto max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divgatsbyimagewrapper-1@2x.png"
              />
              <div className="h-full w-full my-0 mx-[!important] absolute top-[0.85px] right-[0.07%] left-[0.07%] overflow-hidden flex flex-row items-center justify-center max-w-[919.7999877929688px] z-[1] mq1300:max-w-full">
                <div className="self-stretch flex-1 flex flex-col items-center justify-end max-w-full">
                  <div className="self-stretch flex-1 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivfeatureItem;
