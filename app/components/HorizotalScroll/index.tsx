interface horizontal {
  children: React.ReactNode;
}
const HorizontalScroll = ({ children }: horizontal) => {
  return (
    <div className="horizontal-container h-full flex flex-col  gap-10 md:gap-0 md:flex-row flex-nowrap  ">
      {/* Your content goes here */}
      {children}
    </div>
  );
};

export default HorizontalScroll;
