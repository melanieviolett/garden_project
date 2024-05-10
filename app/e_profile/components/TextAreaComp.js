const TextAreaComp = ({headerText, userInfo, textArState, setTextArState, headerColor}) => {
  return (
    <>
      <p className={`mb-2 md:mt-0 mt-12 text-${headerColor}`}>{headerText}</p>
      <textarea
        className="w-full p-4 ps-4 text-sm blog-break:text-lg rounded-lg mb-10 text-deep-green"
        rows="6"
        aria-multiline="true"
        role="textbox"
        contentEditable="true"
        placeholder="Start writing..."
        value={textArState == null ? userInfo : textArState}
        onChange={(e) => {
          setTextArState(e.target.value);
        }}
      ></textarea>
    </>
  );
};

export default TextAreaComp;
