import { useMemo } from "react";

const Free = ({
  efficiencywebp,
  efficiencyBoost,
  straightToKnowledgeViaQAs,
  propFlex,
  propAlignSelf,
  propTop,
  propBottom,
  propFlex1,
  propMinWidth,
}) => {
  const freeStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const divcontentTitleStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const efficiencywebpIconStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const heading3Style = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth,
    };
  }, [propFlex1, propMinWidth]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-17xl text-chatdoc-com-1920x1080-default-big-stone font-chatdoc-com-1920x1080-default-poppins-regular-20"
      style={freeStyle}
    >
      <div
        className="flex flex-row items-center justify-start gap-[22px] max-w-full mq450:flex-wrap"
        style={divcontentTitleStyle}
      >
        <div className="overflow-hidden flex flex-col items-start justify-start relative">
          <div className="flex flex-col items-start justify-start max-w-[80px]">
            <div className="overflow-hidden flex flex-col items-start justify-start max-w-[40px]">
              <div className="overflow-hidden flex flex-col items-center justify-center">
                <div className="w-10 h-10 relative overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
          <img
            className="mq768:text-[24px] w-full h-full absolute my-0 mx-[!important] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="eager"
            alt=""
            src={efficiencywebp}
            style={efficiencywebpIconStyle}
          />
        </div>
        <div
          className="flex flex-col items-start justify-start py-0 pr-px pl-0 box-border max-w-full"
          style={heading3Style}
        >
          <h1 className="m-0 relative text-inherit tracking-[2px] leading-[40px] font-semibold font-inherit mq1300:text-10xl mq1300:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
            {efficiencyBoost}
          </h1>
        </div>
      </div>
      <div className="relative text-3xl tracking-[2px] leading-[33px] text-chatdoc-com-1920x1080-default-bright-gray inline-block max-w-[480px] mq1300:max-w-full mq450:text-lg mq450:leading-[26px]">
        {straightToKnowledgeViaQAs}
      </div>
    </div>
  );
};

export default Free;
