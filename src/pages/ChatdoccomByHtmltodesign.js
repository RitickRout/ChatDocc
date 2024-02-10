import Header from "../components/Header";
import DivbannerWrapper from "../components/DivbannerWrapper";
import DivdocumentsWrapper from "../components/DivdocumentsWrapper";
import DivfeatureItem1 from "../components/DivfeatureItem1";
import DivfeatureItem from "../components/DivfeatureItem";
import DivuserCommentsWrapper from "../components/DivuserCommentsWrapper";
import DivpricingWrapper from "../components/DivpricingWrapper";
import DivfaqsWrapper from "../components/DivfaqsWrapper";

const ChatdoccomByHtmltodesign = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start bg-cover bg-no-repeat bg-[top] tracking-[normal]">
      <Header />
      <DivbannerWrapper />
      <DivdocumentsWrapper />
      <section className="self-stretch bg-chatdoc-com-1920x1080-default-alabaster box-border flex flex-col items-start justify-start pt-[108px] px-0 pb-px max-w-full border-b-[1px] border-solid border-chatdoc-com-1920x1080-default-alto mq1300:pt-[45px] mq1300:pb-5 mq1300:box-border mq450:pt-[29px] mq450:box-border">
        <DivfeatureItem1 />
        <DivfeatureItem />
      </section>
      <DivuserCommentsWrapper />
      <DivpricingWrapper />
      <DivfaqsWrapper />
    </div>
  );
};

export default ChatdoccomByHtmltodesign;
