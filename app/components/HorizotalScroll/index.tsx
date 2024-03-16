interface horizontal {
  children: React.ReactNode;
}
const HorizontalScroll = ({ children }: horizontal) => {
  return (
    <div className="horizontal-container h-full flex flex-nowrap  ">
      {/* Your content goes here */}
      {children}
    </div>
  );
};

export default HorizontalScroll;
