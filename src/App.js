import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constants/Message";
import Seperator from "./Service/CheckSeperator";


class App {
  async run() {
    Console.print(MESSAGE.INSERT_NUM)
    const input = await Console.readLineAsync(MESSAGE.INSERT_NUM)
    Console.print(input)
    const result = Seperator.replaceAndCalculate(input)
    Console.print(result)

  }
}

export default App;
