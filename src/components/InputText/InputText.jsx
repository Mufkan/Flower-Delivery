
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export function InputText  ({
  showHalperTxt = true,
  showLabel = true,
  label = "Label",
  textHelper = "Text helper",
  placeholder = "Placeholder",
  size,
  state,
  className,
})  {
  return (
    <div className={`input-text ${className}`}>
      {showLabel && <div className={`label-2 size-12-${size}`}>{label}</div>}

      <div className="wrap-input-helper">
        <div className={`input-field state-2-${state} size-13-${size}`}>
          {state === "typing" && <div className="cursor" />}

          <div className="placeholder">{placeholder}</div>
        </div>
        {showHalperTxt && (
          <div className="text-helper">
            {["default", "disabled", "filled", "hover-only-desktop", "typing"].includes(state) && (
              <div className={`error-text size-15-${size}`}>{textHelper}</div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

InputText.propTypes = {
  showHalperTxt: PropTypes.bool,
  showLabel: PropTypes.bool,
  label: PropTypes.string,
  textHelper: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["desktop", "mobile"]),
  state: PropTypes.oneOf(["default", "success", "filled", "hover-only-desktop", "error", "typing", "disabled"]),
};
