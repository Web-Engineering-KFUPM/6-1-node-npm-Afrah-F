
import _ from "lodash";

export function parseNumbers(input) {

    const mapped = _.map(input, (str) => Number(str));
    return _.filter(mapped, (n) => !Number.isNaN(n));
}

export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);
}
