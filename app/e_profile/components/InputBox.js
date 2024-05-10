const InputBox = ({
  headerText,
  editable,
  setInputState,
  inputState,
  userInfo}
) => {
  function isEditing(editable, userInfo, inputState) {
    if (editable) {
      return (
        <input
          type="text"
          className="w-full p-4 ps-4 mb-4 text-sm blog-break:text-lg rounded-full text-deep-green"
          placeholder={headerText}
          value={inputState == null ? userInfo : inputState}
          onChange={(e) => {
            setInputState(e.target.value);
          }}
        />
      );
    } else {
      return (
        <input
          type="text"
          className="w-full p-4 ps-4 text-sm blog-break:text-lg rounded-full text-deep-green"
          placeholder={headerText}
          value={userInfo}
          readOnly={true}
        />
      );
    }
  }
  return (
    <>
      <p className="mb-2">{headerText}</p>
      {isEditing(editable, userInfo, inputState)}
    </>
  );
};

export default InputBox;
