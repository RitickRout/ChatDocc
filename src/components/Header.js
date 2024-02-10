import { useCallback } from "react";

const Header = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.producthunt.com/posts/chatdoc-gpt-for-any-file");
  }, []);

  const onLinkClick = useCallback(() => {
    window.open("https://chatdoc.com/chatdoc/");
  }, []);

  return (
    <header className="self-stretch bg-chatdoc-com-1920x1080-default-nero flex flex-row items-center justify-center p-[7px] box-border top-[0] z-[99] sticky max-w-full text-left text-xl text-chatdoc-com-1920x1080-default-black font-chatdoc-com-1920x1080-default-poppins-regular-20">
      <div className="w-[1500px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-[1460px] mq2175:max-w-full">
        <div className="flex-1 flex flex-row items-center justify-between py-2 px-0 box-border gap-[20px] max-w-full">
          <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0">
            <div className="flex flex-row items-center justify-start py-[5px] px-0">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                loading="eager"
                alt=""
                src="/image@2x.png"
              />
              <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2.5">
                <div className="relative leading-[22px] font-medium whitespace-nowrap">
                  ChatDOC
                </div>
              </div>
            </div>
          </div>
          <div className="w-[698px] flex flex-row items-start justify-start gap-[30px] max-w-full text-6xs text-chatdoc-com-1920x1080-default-blue-stone font-chatdoc-com-1920x1080-default-inter-bold-1244">
            <div
              className="w-[194px] flex flex-row items-center justify-center cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[9px] pb-2 pr-[18px] pl-[13px] relative gap-[11px]">
                <img
                  className="h-full w-full absolute my-0 mx-[!important] top-[0.4px] right-[0.3px]"
                  alt=""
                  src="/frame-description-wrapper.svg"
                />
                <img
                  className="h-[21.8px] w-[16.3px] relative z-[1]"
                  alt=""
                  src="/group.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[2px] mq1300:hidden">
                  <b className="relative whitespace-nowrap z-[1]">
                    PRODUCT HUNT
                  </b>
                  <input
                    className="w-[calc(100%_-_0px)] [border:none] [outline:none] inline-block font-chatdoc-com-1920x1080-default-inter-bold-1244 text-smi-4 bg-[transparent] self-stretch h-[15px] relative font-bold text-chatdoc-com-1920x1080-default-blue-stone text-left min-w-[82px] whitespace-nowrap z-[1]"
                    placeholder="#1 Product of the Day"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border max-w-full text-base text-chatdoc-com-1920x1080-default-big-stone font-chatdoc-com-1920x1080-default-poppins-regular-20">
              <div className="flex flex-col items-end justify-start py-0 pr-[29px] pl-0 box-border min-w-[24.40999984741211px]">
                <div className="flex flex-col items-start justify-start max-w-[1460px] mq2175:max-w-full">
                  <div className="flex flex-col items-start justify-start">
                    <a
                      className="relative tracking-[-0.17px] leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                      href="https://chatdoc.com/"
                      target="_blank"
                    >
                      API
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-[30px] pl-0 box-border min-w-[53.779998779296875px]">
                <div className="flex flex-row items-center justify-center max-w-[1460px] mq2175:max-w-full">
                  <a
                    className="relative tracking-[-0.17px] leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://chatdoc.com/"
                    target="_blank"
                  >
                    Pricing
                  </a>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-[30px] pl-0 box-border min-w-[34.70000076293945px]">
                <div className="flex flex-row items-center justify-center max-w-[1460px] mq2175:max-w-full">
                  <a
                    className="relative tracking-[-0.17px] leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://chatdoc.com/blog"
                    target="_blank"
                  >
                    Blog
                  </a>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-[29px] pl-0 box-border min-w-[88.4800033569336px]">
                <div className="flex flex-row items-center justify-center max-w-[1460px] mq2175:max-w-full">
                  <a
                    className="relative tracking-[-0.17px] leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://chatdoc.com/log"
                    target="_blank"
                  >
                    Changelog
                  </a>
                </div>
              </div>
              <button
                className="cursor-pointer py-2.5 pr-[25px] pl-[29px] bg-chatdoc-com-1920x1080-default-havelock-blue rounded flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-chatdoc-com-1920x1080-default-havelock-blue hover:bg-cornflowerblue-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
                onClick={onLinkClick}
              >
                <a
                  className="relative text-base leading-[22px] font-medium font-chatdoc-com-1920x1080-default-poppins-regular-20 text-chatdoc-com-1920x1080-default-nero text-center [text-decoration:none]"
                  href="https://chatdoc.com/chatdoc/"
                  target="_blank"
                >
                  Get Started
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
