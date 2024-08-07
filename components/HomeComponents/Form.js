import { ComponentProps, forwardRef } from "react";
// import { IconArrowBack } from "@tabler/icons-react";
//import cx from "../../utils/cx";



const Form = ({ inputProps, buttonProps, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative m-auto flex items-center gap-4 justify-center"
      
    >
      {/*<Avatar isUser={true} className="md:size-10 bg-gray-300" />*/}

      <input
        placeholder="Your question..."
        required
        {...inputProps}
        className={
          "transition h-10 md:h-12 pl-4 pr-12 flex-1 rounded-xl borde border-gray-400 text-base disabled:bg-gray-100"
          
        }
        type="text"
      />

      <button
        {...buttonProps}
        type="submit"
        tabIndex={-1}
        className={
          "absolute right-3 top-1/2 -translate-y-1/2"
        }
      >
        {/* <IconArrowBack stroke={1.5} /> */}
      </button>
    </form>
  );
};

export default Form;