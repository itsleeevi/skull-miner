import "rsuite/dist/rsuite.min.css";
import { InputNumber } from "rsuite";

const InputNumComponent = () => {
  return (
    <>
      <InputNumber
        size="lg"
        min={0}
        postfix={<h1 className="text-xl text-center text-black">BNB</h1>}
      />
    </>
  );
};

export default InputNumComponent;
