export const NavigatorSelect = () => {
  return (
    <div className="navigator__select">
      <select name="language" id="language" className="select">
        <option value="EN" className="select__option">
          EN
        </option>
        <option value="ES" className="select__option">
          ES
        </option>
      </select>
    </div>
  );
};
