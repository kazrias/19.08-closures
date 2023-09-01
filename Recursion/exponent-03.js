//Write a recursive function to calculate the value of a number raised to an exponent

function exponent(val, pow) {
    if (pow !== 0) {
        if (pow > 0)
            return val * exponent(val, pow - 1);
        else
            return 1 / exponent(val, -pow);
    } else {
        return 1;
    }
}   