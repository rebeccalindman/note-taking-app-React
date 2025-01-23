

/**
 * A responsive checkbox component
 * @param {boolean} checked - If the checkbox is checked
 * @param {Function} onChange - The function to call when the checkbox is changed
 * @returns A responsive checkbox
 */
const Checkbox = ({ checked, onChange }: { checked: boolean, onChange: (checked: boolean) => void }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)} // Pass the new checked value
        className="checkbox__input"
      />
      <span className="checkbox__checkmark"></span>
    </div>
  );
};

export default Checkbox;