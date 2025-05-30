window.onload = function () {
    MathJax.typesetPromise();
};

// Predefined question templates and answers
const questionTemplates = {
    tangents: [
        { data: tangentToCircle() }
        //{data: ["Q","A"]},
        //{data: ["!","?"]}
    ],
    polynomials: [
        { data: doesLineIntersectQuadratic() },
        { data: factoriseQuadratic() }
    ],
    complex_numbers: [
        { data: standardToExponential() },
        { data: multiplyComplexNumbers() },
        { data: dividingComplexNumbers() }
    ],
    firstOrderODEs: [
        { data: typeOneFirstOrderODE },
        { data: typeTwoFirstOrderODE }
    ],
    partialFractions: [
        { data: partialFractionsOne }
    ]
};

// USEFUL FUNCTIONS

function euclidean_gcd(a, b) {
    var temp;
    while (b != 0) {
        if (a % b == 0) {
            return Math.abs(b);
        };
        temp = a;
        a = b;
        b = temp % b;
    };
};

// Tangents

function tangentToCircle() {
    const radius = Math.floor(Math.random() * 10 + 1);
    const randomNumberAngle = Math.floor(Math.random() * 6);
    const Sin = ["\\frac{1}{2}", "\\frac{\\sqrt{2}}{2}", "\\frac{\\sqrt{3}}{2}", "\\frac\{\\sqrt\{3\}\}\{2\}", "\\frac\{\\sqrt\{2\}\}\{2\}", "\\frac\{1\}\{2\}"][randomNumberAngle];
    const Cos = ["\\frac{\\sqrt{3}}{2}", "\\frac{\\sqrt{2}}{2}", "\\frac\{1\}\{2\}", "-\\frac\{1\}\{2\}", "-\\frac\{\\sqrt\{2\}\}\{2\}", "-\\frac\{\\sqrt\{3\}\}\{2\}"][randomNumberAngle];
    const Cosec = ["2", "\\sqrt\{2\}", "\\frac\{2\\sqrt\{3\}\}\{3\}", "\\frac\{2\\sqrt\{3\}\}\{3\}", "\\sqrt\{2\}", "2"][randomNumberAngle];
    const negativeCotan = ["-\\sqrt\{3\}", "-", "-\\frac\{\\sqrt\{3\}\}\{3\}", "\\sqrt\{3\}", "", "\\sqrt\{3\}"][randomNumberAngle];
    const question = `Consider a circle with radius ${radius} centred at the origin. 
The point \\((${radius} \\cdot ${Cos}, ${radius} \\cdot ${Sin})\\) lies on the circle.
What is the equation of the line passing through that point that is tangent to the circle?`;

    const answer = `\\( y = ${negativeCotan}x + ${radius} \\cdot ${Cosec} \\)`;

    return [question, answer];
};

// Polynomials

function doesLineIntersectQuadratic() {
    let a = Math.floor(Math.random() * 3 + 1);
    if (Math.random() < 0.5) {
        a = -a;
    };
    let b_1 = Math.floor(Math.random() * 13);
    if (Math.random() < 0.5) {
        b_1 = -b_1;
    };
    let c_1 = Math.floor(Math.random() * 30);
    if (Math.random() < 0.5) {
        c_1 = -c_1;
    };
    let m = Math.floor(Math.random() * 5 + 1);
    if (Math.random() < 0.5) {
        m = -m;
    };
    let y_intercept = Math.floor(Math.random() * 20);
    if (Math.random < 0.5) {
        y_intercept = y_intercept * -1;
    };
    const b = b_1 - m;
    const c = c_1 - y_intercept;
    let m_string;
    let intercept_string;
    let a_string;
    let b_string;
    let c_string;
    if (m == 1) {
        m_string = "x";
    } else if (m == -1) {
        m_string = "-x";
    } else {
        m_string = m + " x";
    };
    if (y_intercept > 0) {
        intercept_string = "+ " + y_intercept;
    } else if (y_intercept == 0) {
        intercept_string = "";
    } else {
        intercept_string = y_intercept;
    };
    if (a == 1) {
        a_string = "x^\{2\}";
    } else if (a == -1) {
        a_string = "-x^\{2\}";
    } else {
        a_string = a + " x^\{2\}";
    };
    if (b_1 > 0) {
        b_string = "+ " + b_1 + " x";
    } else if (b_1 == 0) {
        b_string = "";
    } else {
        b_string = b_1 + "x";
    };
    if (b_1 == 1) {
        b_string = "+ x";
    } else if (b_1 == -1) {
        b_string = "- x";
    };
    if (c_1 > 0) {
        c_string = "+ " + c_1;
    } else if (c_1 == 0) {
        c_string = "";
    } else {
        c_string = c_1;
    };
    const discriminant = b ** 2 - 4 * a * c;
    const question = "Does the line defined by \\(y = " + m_string + " " + intercept_string + "\\) intercept the quadratic \\(y = " + a_string + " " + b_string + " " + c_string + "\\)?";
    var answer;
    if (discriminant > 0) {
        answer = "The line intersects the quadratic at two points.";
    } else if (discriminant == 0) {
        answer = "The line intersects the quadratic at one point.";
    } else {
        answer = "The line does not intersect the quadratic.";
    }
    return [question, answer];
};

function factoriseQuadratic() {
    var alpha = Math.floor(Math.random() * 13);
    if (Math.random() < 0.5) {
        alpha = -alpha;
    }
    let alpha_string;
    if (alpha == 0) {
        alpha_string = "";
    } else if (alpha < 0) {
        alpha_string = "+" + -alpha;
    }else {
        alpha_string = "-" + alpha;
    };
    var beta = Math.floor(Math.random() * 13);
    if (Math.random() < 0.5) {
        beta = -beta;
    }
    let beta_string;
    if (beta == 0) {
        beta_string = "";
    } else if (beta < 0) {
        beta_string = "+" + -beta;
    } else {
        beta_string = "-" + beta;
    };
    const b = -(alpha + beta);
    const c = alpha * beta
    let b_string;
    let c_string;
    if (b == 0) {
        b_string = "";
    } else if (b == 1) {
        b_string = "+x";
    } else if (b == -1) {
        b_string = "-x";
    } else if (b > 0) {
        b_string = "+ " + b + "x";
    } else {
        b_string = b + "x";
    };
    if (c == 0) {
        c_string = "";
    } else if (c > 0) {
        c_string = "+ " + c;
    } else {
        c_string = c;
    }
    const question = "Factorise the expression: \\(x^\{2\} " + b_string + c_string + "\\)";
    const answer = "\\((x" + alpha_string + ")(x" + beta_string + ")\\)";
    return [question, answer];
};

// Complex Numbers

function standardToExponential() {
    const randomSelector = Math.floor(Math.random() * 16);
    const r = Math.floor(Math.random() * 10 + 1);
    var r_format;
    if (r == 1) {
        r_format = "";
    } else {
        r_format = r
    };
    const theta_formatted = ["0", "\\frac\{\\pi\}\{6\}", "\\frac\{\\pi\}\{4\}", "\\frac\{\\pi\}\{3\}", "\\frac\{\\pi\}\{2\}", "\\frac\{2\\pi\}\{3\}", "\\frac\{3\\pi\}\{4\}", "\\frac\{5\\pi\}\{6\}", "\\pi", "\\frac\{7\\pi\}\{6\}", "\\frac\{5\\pi\}\{4\}", "\\frac\{4\\pi\}\{3\}", "\\frac\{3\\pi\}\{2\}", "\\frac\{5\\pi\}\{3\}", "\\frac\{7\\pi\}\{4\}", "\\frac\{11\\pi\}\{6\}"][randomSelector];
    var a_prefix = "";
    var b_prefix = ""
    var a;
    var b_formatted;
    if (randomSelector == 4 || randomSelector == 12) {
        a = "";
    } else {
        if (randomSelector > 4 && randomSelector < 12) {
            a_prefix = "-";
        };
        if (randomSelector == 0 || randomSelector == 8) {
            a = a_prefix + r;
        } else if (r % 2 == 0) {
            a = a_prefix + r / 2 + ["", "\\sqrt\{3\}", "\\sqrt\{2\}", "", "", "", "\\sqrt\{2\}", "\\sqrt\{3\}", "", "\\sqrt\{3\}", "\\sqrt\{2\}", "", "", "", "\\sqrt\{2\}", "\\sqrt\{3\}"][randomSelector];
        } else {
            a = a_prefix + "\\frac\{" + [r, r_format + '\\sqrt\{3\}', r_format + '\\sqrt\{2\}', r, r, r, r_format + '\\sqrt\{2\}', r_format + '\\sqrt\{3\}', r, r_format + '\\sqrt\{3\}', r_format + '\\sqrt\{2\}', r, r, r, r_format + '\\sqrt\{2\}', r_format + '\\sqrt\{3\}'][randomSelector] + "\}\{2\}";
        };
    };
    if (randomSelector == 0 || randomSelector == 8) {
        b_formatted = "";
    } else {
        if (randomSelector > 8) {
            b_prefix = "-";
        } else {
            b_prefix = "+"
        };
        if (randomSelector == 4 || randomSelector == 12) {
            b_formatted = b_prefix + r_format + "i";
        } else if (r % 2 == 0) {
            b_formatted = b_prefix + r / 2 + ["", "", "\\sqrt\{2\}", "\\sqrt\{3\}", "", "\\sqrt\{3\}", "\\sqrt\{2\}", "", "", "", "\\sqrt\{2\}", "\\sqrt\{3\}", "", "\\sqrt\{3\}", "\\sqrt\{2\}", ""][randomSelector] + "i";
        } else {
            b_formatted = b_prefix + "\\frac\{" + [r, r, r_format + "\\sqrt\{2\}", r_format + "\\sqrt\{3\}", r, r_format + "\\sqrt\{3\}", r_format + "\\sqrt\{2\}", r, r, r, r_format + "\\sqrt\{2\}", r_format + "\\sqrt\{3\}", r, r_format + "\\sqrt\{3\}", r_format + "\\sqrt\{2\}", r][randomSelector] + "\}\{2\}" + "i";
        };
    };
    const question = "What is \\(" + a + b_formatted + "\\) in exponential form? \\(\\theta \\in [0,2\\pi)\\).";
    const answer = "\\(" + r + " e^\{" + theta_formatted + "i\}\\)";
    return [question, answer];
};

function multiplyComplexNumbers() {
    const a_1 = Math.floor(Math.random() * 25 - 12);
    const a_2 = Math.floor(Math.random() * 25 - 12);
    const b_1 = Math.floor(Math.random() * 25 - 12);
    const b_2 = Math.floor(Math.random() * 25 - 12)
    var b_1_format;
    var b_2_format;
    var b_1_simp;
    var b_2_simp;
    if (b_1 == 1) {
        b_1_simp = "";
    } else if (b_1 == -1) {
        b_1_simp = "-";
    } else {
        b_1_simp = b_1;
    };
    if (b_2 == 1) {
        b_2_simp = "";
    } else if (b_2 == -1) {
        b_2_simp = "-";
    } else {
        b_2_simp = b_2;
    };
    if (b_1 == 0) {
        b_1_format = "";
    } else if (b_1 > 0) {
        b_1_format = "+" + b_1_simp + "i";
    } else {
        b_1_format = b_1_simp + "i";
    };
    if (b_2 == 0) {
        b_2_format = "";
    } else if (b_2 > 0) {
        b_2_format = "+" + b_2_simp + "i";
    } else {
        b_2_format = b_2_simp + "i";
    };
    const final_a = (a_1 * a_2) - (b_1 * b_2);
    const final_b = (a_1 * b_2 + a_2 * b_1);
    var final_b_format;
    if (final_b == 0) {
        final_b_format = "";
    } else if (final_b > 0) {
        final_b_format = "+" + final_b + "i";
    } else {
        final_b_format = final_b + "i";
    };
    const question = "Expand and simplify the following expression: \\((" + a_1 + b_1_format + ")(" + a_2 + b_2_format + ")\\)";
    const answer = "\\(" + final_a + final_b_format + "\\)";
    return [question, answer];
};

function dividingComplexNumbers() {
    const a_1 = Math.floor(Math.random() * 25 - 12);
    const b_1 = Math.floor(Math.random() * 25 - 12);
    var a_2 = Math.floor(Math.random() * 25 - 12);
    var b_2 = Math.floor(Math.random() * 25 - 12);
    while (a_2 == 0) {
        a_2 = Math.floor(Math.random() * 25 - 12);
    };
    while (b_2 == 0) {
        b_2 = Math.floor(Math.random() * 25 - 12);
    };
    var b_1_format;
    var b_2_format;
    var b_1_simp;
    var b_2_simp;
    if (b_1 == 1) {
        b_1_simp = "";
    } else if (b_1 == -1) {
        b_1_simp = "-";
    } else {
        b_1_simp = b_1;
    };
    if (b_2 == 1) {
        b_2_simp = "";
    } else if (b_2 == -1) {
        b_2_simp = "-";
    } else {
        b_2_simp = b_2;
    };
    if (b_1 == 0) {
        b_1_format = "";
    } else if (b_1 > 0) {
        b_1_format = "+" + b_1_simp + "i";
    } else {
        b_1_format = b_1_simp + "i";
    };
    if (b_2 == 0) {
        b_2_format = "";
    } else if (b_2 > 0) {
        b_2_format = "+" + b_2_simp + "i";
    } else {
        b_2_format = b_2_simp + "i";
    };
    const numerator_real = (a_1 * a_2) + (b_1 * b_2);
    const numerator_imag = (a_2 * b_1) - (a_1 * b_2);
    const denominator = (a_2 * a_2) + (b_2 * b_2);
    var euclidean_a_1 = numerator_real;
    var euclidean_a_2 = numerator_imag;
    var euclidean_b_1 = denominator;
    var gcd_real;
    var gcd_imag;
    var temp_num;
    while (euclidean_b_1 != 0) {
        if (euclidean_a_1 % euclidean_b_1 == 0) {
            gcd_real = euclidean_b_1;
        };
        temp_num = euclidean_a_1
        euclidean_a_1 = euclidean_b_1;
        euclidean_b_1 = temp_num % euclidean_b_1;
    };
    euclidean_b_1 = denominator;
    while (euclidean_b_1 != 0) {
        if (euclidean_a_2 % euclidean_b_1 == 0) {
            gcd_imag = euclidean_b_1;
        };
        temp_num = euclidean_a_2
        euclidean_a_2 = euclidean_b_1;
        euclidean_b_1 = temp_num % euclidean_b_1;
    };
    var real_formatted;
    var imaginary_formatted;
    if (numerator_real == 0) {
        real_formatted = "0";
    } else if (Math.abs(numerator_real / gcd_real) == Math.abs(denominator / gcd_real)) {
        real_formatted = numerator_real / gcd_real;
    } else {
        if (numerator_real / denominator < 0) {
            real_formatted = "-\\frac\{" + Math.abs(numerator_real / gcd_real) + "\}\{" + Math.abs(denominator / gcd_real) + "\}";
        } else {
            real_formatted = "\\frac\{" + Math.abs(numerator_real / gcd_real) + "\}\{" + Math.abs(denominator / gcd_real) + "\}";
        };
    };
    if (numerator_imag == 0) {
        imaginary_formatted = "+0i";
    } else if (Math.abs(numerator_imag / gcd_imag) == Math.abs(denominator / gcd_imag)) {
        if (numerator_imag / gcd_imag > 0) {
            imaginary_formatted = " + i"
        } else {
            imaginary_formatted = " - i";
        };
    } else {
        if (numerator_imag / denominator < 0) {
            imaginary_formatted = "-\\frac\{" + Math.abs(numerator_imag / gcd_imag) + "\}\{" + Math.abs(denominator / gcd_imag) + "\}i";
        } else {
            imaginary_formatted = "+\\frac\{" + Math.abs(numerator_imag / gcd_imag) + "\}\{" + Math.abs(denominator / gcd_imag) + "\}i";
        };
    };
    const question = "Express \\(\\frac\{" + a_1 + b_1_format + "\}\{" + a_2 + b_2_format + "\}\\) in the form \\(a + bi\\) where \\(a,b \\in \\mathbb\{R\}\\).";
    const answer = "\\(" + real_formatted + imaginary_formatted + "\\)";
    return [question, answer];
};

// First-Order ODEs

function typeOneFirstOrderODE() {
    const variable = ["x", "y", "z"][Math.floor(Math.random() * 3)];
    const unsigned_m = Math.floor(Math.random() * 12) + 1;
    const sign_m = [-1, 1][Math.floor(Math.random() * 2)];
    const unsigned_b = Math.floor(Math.random() * 12) + 1;
    const sign_b = [-1, 1][Math.floor(Math.random() * 2)];
    const m = unsigned_m * sign_m;
    const b = unsigned_b * sign_b;
    var formatted_m;
    if (sign_m == 1) {
        if (unsigned_m == 1) {
            formatted_m = "+";
        } else {
            formatted_m = "+" + unsigned_m;
        };
    } else {
        if (unsigned_m == 1) {
            formatted_m = "-";
        } else {
            formatted_m = m;
        };
    };
    var final_power;
    if (formatted_m == "+") {
        final_power = "-";
    } else if (formatted_m == "+") {
        final_power = "-";
    } else {
        final_power = -m;
    };
    const gcd = euclidean_gcd(b, m);
    const question = "Find the general solution to the first-order ODE: \\(\\frac\{d" + variable + "\}\{dt\} " + formatted_m + variable + " = " + b + "\\)";
    var answer;
    if (gcd == Math.abs(m)) {
        answer = "\\(" + variable + "(t) = " + sign_m * b / gcd + " + c e^\{ " + final_power + "t\ } \\), \\(c \\in \\mathbb\{ R\ } \\) ";
    } else {
        answer = "\\(" + variable + "(t) = \\frac\{" + (sign_m * b / gcd) + "\}\{" + Math.abs(m / gcd) + "\} + c e^\{" + final_power + "t\}\\), \\(c \\in \\mathbb\{R\}\\)";
    };
    return [question, answer];
};

function typeTwoFirstOrderODE() {
    const variable = ["x", "y", "z"][Math.floor(Math.random() * 3)];
    const unsigned_m = Math.floor(Math.random() * 12) + 1;
    const sign_m = [-1, 1][Math.floor(Math.random() * 2)];
    const unsigned_a = Math.floor(Math.random() * 12) + 1;
    const sign_a = [-1, 1][Math.floor(Math.random() * 2)];
    const unsigned_b = Math.floor(Math.random() * 12) + 1;
    const sign_b = [-1, 1][Math.floor(Math.random() * 2)];
    const m = unsigned_m * sign_m;
    const a = unsigned_a * sign_a;
    const b = unsigned_b * sign_b;
    var formatted_m;
    if (sign_m == 1) {
        if (unsigned_m == 1) {
            formatted_m = "+";
        } else {
            formatted_m = "+" + unsigned_m;
        };
    } else {
        if (unsigned_m == 1) {
            formatted_m = "-";
        } else {
            formatted_m = m;
        };
    };
    var formatted_a;
    if (sign_a == -1) {
        formatted_a = -1 * unsigned_a + "t";
    } else {
        formatted_a = "+ " + unsigned_a + "t";
    };
    var final_power;
    if (formatted_m == "+") {
        final_power = "-";
    } else if (formatted_m == "+") {
        final_power = "-";
    } else {
        final_power = -m;
    };
    const orderOneNumerator = (b * m) - a;
    const gcd_orderOneGCD = euclidean_gcd(orderOneNumerator, m * m);
    var formatted_orderOne;
    if (orderOneNumerator == 0) {
        formatted_orderOne = "";
    } else if (gcd_orderOneGCD == m * m) {
        formatted_orderOne = orderOneNumerator / (m * m);
    } else {
        if (orderOneNumerator < 0) {
            formatted_orderOne = "-\\frac\{" + Math.abs(orderOneNumerator) / gcd_orderOneGCD + "\}\{" + (m * m) / gcd_orderOneGCD + "\}";
        } else {
            formatted_orderOne = "\\frac\{" + orderOneNumerator / gcd_orderOneGCD + "\}\{" + (m * m) / gcd_orderOneGCD + "\}";
        };
    };
    const gcd_t = euclidean_gcd(a,m)
    var orderTTerm = a / m;
    if (Number.isInteger(orderTTerm)) {
        if (orderTTerm < 0) {
            if (orderTTerm == -1) {
                orderTTerm = "-t";
            } else {
                orderTTerm = "-" + Math.abs(orderTTerm).toString() + "t";
            };
        }
        else {
            if (orderOneNumerator == 0) {
                if (orderTTerm == 1) {
                    orderTTerm = "t";
                } else {
                    orderTTerm = orderTTerm.toString() + "t";
                };
            } else {
                if (orderTTerm == 1) {
                    orderTTerm = "+ t";
                } else {
                    orderTTerm = "+" + orderTTerm.toString() + "t";
                };
            };
        }
    } else {
        if (orderTTerm > 0) {
            if (orderOneNumerator == 0) {
                orderTTerm = "\\frac\{" + Math.abs(a / gcd_t) + "\}\{" + Math.abs(m / gcd_t) + "\}t";
            } else {
                orderTTerm = "+ \\frac\{" + Math.abs(a / gcd_t) + "\}\{" + Math.abs(m / gcd_t) + "\}t";
            }
        } else {
            orderTTerm = "- \\frac\{" + Math.abs(a / gcd_t) + "\}\{" + Math.abs(m / gcd_t) + "\}t";
        };
    }
    if (m == 1) {
        final_power = "-";
    } else if (m == -1) {
        final_power = "+";
    } else {
        final_power = -m;
    };
    var formatted_a;
    if (a == 1) {
        formatted_a = "";
    } else if (a == -1) {
        formatted_a = "-";
    } else {
        formatted_a = a;
    };
    var question;
    if (b < 0) {
        question = "Find the general solution to the first-order ODE: \\(\\frac\{d" + variable + "\}\{dt\} " + formatted_m + variable + " = " + formatted_a + "t" + b + "\\)";
    } else {
        question = "Find the general solution to the first-order ODE: \\(\\frac\{d" + variable + "\}\{dt\} " + formatted_m + variable + " = " + formatted_a + "t + " + b + "\\)";
    };
    const answer = "\\(" + variable + "(t) = " + formatted_orderOne + orderTTerm + "+ c e^\{" + final_power + "t\}\\), \\(c \\in \\mathbb\{R\}\\)";
    return [question, answer];
};

// Partial Fractions

function partialFractionsOne() {
    const unsigned_m = Math.floor(Math.random() * 12);
    const sign_m = [-1, 1][Math.floor(Math.random() * 2)];
    const m = sign_m * unsigned_m;
    const unsigned_c = Math.floor(Math.random() * 12 + 1);
    const sign_c = [-1, 1][Math.floor(Math.random() * 2)];
    const c = sign_c * unsigned_c;
    var formatted_mx_c;
    if (unsigned_m == 0) {
        formatted_mx_c = c;
    } else if (m == 1) {
        if (c < 0) {
            formatted_mx_c = "x" + c;
        } else {
            formatted_mx_c = "x + " + c;
        };
    } else if (m == -1) {
        if (c < 0) {
            formatted_mx_c = "-x" + c;
        } else {
            formatted_mx_c = "-x + " + c;
        };
    } else {
        if (c < 0) {
            formatted_mx_c = m + "x" + c;
        } else {
            formatted_mx_c = m + "x + " + c;
        };
    };
    var unsigned_a;
    var sign_a;
    var unsigned_b;
    var sign_b;
    var a = 0;
    var b = 0;
    while (a == b) {
        unsigned_a = Math.floor(Math.random() * 12 + 1);
        sign_a = [-1, 1][Math.floor(Math.random() * 2)];
        unsigned_b = Math.floor(Math.random() * 12 + 1);
        sign_b = [-1, 1][Math.floor(Math.random() * 2)];
        a = sign_a * unsigned_a;
        b = sign_b * unsigned_b;
    }
    var formatted_polynomial_denom;
    if (a + b == 0) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\}" + (a * b);
        };
    } else if (a + b == 1) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} + x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} + x " + (a * b);
        };
    } else if (a + b == -1) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} - x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} - x " + (a * b);
        };
    } else if (a + b < 0) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} " + (a + b) + " x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} " + (a + b) + " x " + (a * b);
        };
    } else {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} + " + (a + b) + " x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} + " + (a + b) + " x " + (a * b);
        };
    };
    const fractionANum_Unsimplified = a * m - c;
    const fractionADenom_Unsimplified = a - b;
    const gcd_A = euclidean_gcd(fractionANum_Unsimplified, fractionADenom_Unsimplified);
    const fractionANum_Simplified = Math.sign(a - b) * fractionANum_Unsimplified / gcd_A;
    const fractionADenom_Simplified = Math.abs(fractionADenom_Unsimplified / gcd_A);
    const fractionBNum_Unsimplifed = b * m - c;
    const fractionBDenom_Unsimplified = b - a;
    const gcd_B = euclidean_gcd(fractionBNum_Unsimplifed, fractionBDenom_Unsimplified);
    const fractionBNum_Simplified = Math.sign(b - a) * fractionBNum_Unsimplifed / gcd_B;
    const fractionBDenom_Simplified = Math.abs(fractionBDenom_Unsimplified / gcd_B);
    var formatted_a_fraction;
    var formatted_b_fraction;
    if (fractionANum_Simplified == 0) {
        formatted_a_fraction = "";
        if (fractionBNum_Simplified == 0) {
            formatted_b_fraction = "0";
        } else {
            if (fractionBDenom_Simplified == 1) {
                if (b < 0) {
                    formatted_b_fraction = "\\frac\{" + fractionBNum_Simplified + "\}\{x" + b + "\}";
                } else {
                    formatted_b_fraction = "\\frac\{" + fractionBNum_Simplified + "\}\{x + " + b + "\}";
                };
            } else {
                if (b < 0) {
                    formatted_b_fraction = "\\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x" + b + ")\}";
                } else {
                    formatted_b_fraction = "\\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x + " + b + ")\}";
                };
            };
        };
    } else {
        if (fractionADenom_Simplified == 1) {
            if (a < 0) {
                formatted_a_fraction = "\\frac\{" + fractionANum_Simplified + "\}\{x" + a + "\}";
            } else {
                formatted_a_fraction = "\\frac\{" + fractionANum_Simplified + "\}\{x + " + a + "\}";
            };
            if (fractionBNum_Simplified > 0) {
                if (fractionBDenom_Simplified == 1) {
                    if (b < 0) {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{x" + b + "\}";
                    } else {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{x + " + b + "\}";
                    };
                } else {
                    if (b < 0) {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x" + b + ")\}";
                    } else {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x + " + b + ")\}";
                    };
                };
            } else {
                if (fractionBDenom_Simplified == 1) {
                    if (b < 0) {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{x" + b + "\}";
                    } else {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{x + " + b + "\}";
                    };
                } else {
                    if (b < 0) {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x" + b + ")\}";
                    } else {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x + " + b + ")\}";
                    };
                };
            };
        } else {
            if (a < 0) {
                formatted_a_fraction = "\\frac\{" + fractionANum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x" + a + ")\}";
            } else {
                formatted_a_fraction = "\\frac\{" + fractionANum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x + " + a + ")\}";
            };
            if (fractionBNum_Simplified > 0) {
                if (fractionBDenom_Simplified == 1) {
                    if (b < 0) {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{x" + b + "\}";
                    } else {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{x + " + b + "\}";
                    };
                } else {
                    if (b < 0) {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x" + b + ")\}";
                    } else {
                        formatted_b_fraction = "+ \\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x + " + b + ")\}";
                    };
                };
            } else {
                if (fractionBDenom_Simplified == 1) {
                    if (b < 0) {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{x" + b + "\}";
                    } else {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{x + " + b + "\}";
                    };
                } else {
                    if (b < 0) {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x" + b + ")\}";
                    } else {
                        formatted_b_fraction = "- \\frac\{" + -1 * fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "(x + " + b + ")\}";
                    };
                };
            }
        }
    };

    const question = "Separate \\(\\frac\{" + formatted_mx_c + "\}\{" + formatted_polynomial_denom + "\}\\) into partial fractions";
    const answer = "\\(" + formatted_a_fraction + formatted_b_fraction + "\\)";
    return [question, answer];
};

function indefiniteIntegralPartialFractions() {
    const unsigned_m = Math.floor(Math.random() * 12);
    const sign_m = [-1, 1][Math.floor(Math.random() * 2)];
    const m = sign_m * unsigned_m;
    const unsigned_c = Math.floor(Math.random() * 12 + 1);
    const sign_c = [-1, 1][Math.floor(Math.random() * 2)];
    const c = sign_c * unsigned_c;
    var formatted_mx_c;
    if (unsigned_m == 0) {
        formatted_mx_c = c;
    } else if (m == 1) {
        if (c < 0) {
            formatted_mx_c = "x" + c;
        } else {
            formatted_mx_c = "x + " + c;
        };
    } else if (m == -1) {
        if (c < 0) {
            formatted_mx_c = "-x" + c;
        } else {
            formatted_mx_c = "-x + " + c;
        };
    } else {
        if (c < 0) {
            formatted_mx_c = m + "x" + c;
        } else {
            formatted_mx_c = m + "x + " + c;
        };
    };
    var unsigned_a;
    var sign_a;
    var unsigned_b;
    var sign_b;
    var a = 0;
    var b = 0;
    while (a == b) {
        unsigned_a = Math.floor(Math.random() * 12 + 1);
        sign_a = [-1, 1][Math.floor(Math.random() * 2)];
        unsigned_b = Math.floor(Math.random() * 12 + 1);
        sign_b = [-1, 1][Math.floor(Math.random() * 2)];
        a = sign_a * unsigned_a;
        b = sign_b * unsigned_b;
    }
    var formatted_polynomial_denom;
    if (a + b == 0) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\}" + (a * b);
        };
    } else if (a + b == 1) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} + x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} + x " + (a * b);
        };
    } else if (a + b == -1) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} - x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} - x " + (a * b);
        };
    } else if (a + b < 0) {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} " + (a + b) + " x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} " + (a + b) + " x " + (a * b);
        };
    } else {
        if (a * b > 0) {
            formatted_polynomial_denom = "x^\{2\} + " + (a + b) + " x + " + (a * b);
        } else {
            formatted_polynomial_denom = "x^\{2\} + " + (a + b) + " x " + (a * b);
        };
    };
    const fractionANum_Unsimplified = a * m - c;
    const fractionADenom_Unsimplified = a - b;
    const gcd_A = euclidean_gcd(fractionANum_Unsimplified, fractionADenom_Unsimplified);
    const fractionANum_Simplified = Math.sign(a - b) * fractionANum_Unsimplified / gcd_A;
    const fractionADenom_Simplified = Math.abs(fractionADenom_Unsimplified / gcd_A);
    const fractionBNum_Unsimplifed = b * m - c;
    const fractionBDenom_Unsimplified = b - a;
    const gcd_B = euclidean_gcd(fractionBNum_Unsimplifed, fractionBDenom_Unsimplified);
    const fractionBNum_Simplified = Math.sign(b - a) * fractionBNum_Unsimplifed / gcd_B;
    const fractionBDenom_Simplified = Math.abs(fractionBDenom_Unsimplified / gcd_B);
    var term_1;
    var term_2;
    if (fractionANum_Simplified == 0) {
        term_1 = "";
        if (fractionBNum_Simplified == 0) {
            term_2 = "0";
        } else if (fractionBDenom_Simplified == 1) {
            if (b < 0) {
                term_2 = fractionBNum_Simplified + "\\ln\{|x" + b + "|\}";
            } else {
                term_2 = fractionBNum_Simplified + "\\ln\{|x + " + b + "|\}";
            };
        } else {
            if (fractionBNum_Simplified < 0) {
                if (b < 0) {
                    term_2 = "- \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = "- \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x + " + b + "|\}";
                };
            } else {
                if (b < 0) {
                    term_2 = "\\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = "\\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x + " + b + "|\}";
                };
            };
        };
    } else if (fractionADenom_Simplified == 1) {
        if (fractionANum_Simplified == 1) {
            if (a < 0) {
                term_1 = "\\ln\{|x" + a + "|\}";
            } else {
                term_1 = "\\ln\{|x + " + a + "|\}";
            };
        } else if (fractionANum_Simplified == -1) {
            if (a < 0) {
                term_1 = "-\\ln\{|x" + a + "|\}";
            } else {
                term_1 = "-\\ln\{|x + " + a + "|\}";
            };
        } else {
            if (a < 0) {
                term_1 = fractionANum_Simplified + "\\ln\{|x" + a + "|\}";
            } else {
                term_1 = fractionANum_Simplified + "\\ln\{|x + " + a + "|\}";
            }
        };
        if (fractionBNum_Simplified == 0) {
            term_2 = "";
        } else if (fractionBDenom_Simplified == 1) {
            if (fractionBNum_Simplified < 0) {
                if (b < 0) {
                    term_2 = fractionBNum_Simplified + "\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = fractionBNum_Simplified + "\\ln\{|x + " + b + "|\}";
                };
            } else {
                if (b < 0) {
                    term_2 = "+" + fractionBNum_Simplified + "\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = "+ " + fractionBNum_Simplified + "\\ln\{|x + " + b + "|\}";
                };
            };
        } else {
            if (fractionBNum_Simplified < 0) {
                if (b < 0) {
                    term_2 = "- \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = "- \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x + " + b + "|\}";
                };
            } else {
                if (b < 0) {
                    term_2 = "+ \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = "+ \\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x + " + b + "|\}";
                };
            };
        };
    } else {
        if (a < 0) {
            term_1 = "\\frac\{" + fractionANum_Simplified + "\}\{" + fractionADenom_Simplified + "\}\\ln\{| x" + a + " |\} ";
        } else {
            term_1 = "\\frac\{" + fractionANum_Simplified + "\}\{" + fractionADenom_Simplified + "\}\\ln\{|x + " + a + "|\}";
        };
        if (fractionBNum_Simplified == 0) {
            term_2 = "";
        } else if (fractionBDenom_Simplified == 1) {
            if (b < 0) {
                term_2 = fractionBNum_Simplified + "\\ln\{|x" + b + "|\}";
            } else {
                term_2 = " + " + fractionBNum_Simplified + "\\ln\{|x + " + b + "|\}";
            };
        } else {
            if (fractionBNum_Simplified < 0) {
                if (b < 0) {
                    term_2 = "- \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = "- \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x + " + b + "|\}";
                };
            } else {
                if (b < 0) {
                    term_2 = "+ \\frac\{" + Math.abs(fractionBNum_Simplified) + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x" + b + "|\}";
                } else {
                    term_2 = "+ \\frac\{" + fractionBNum_Simplified + "\}\{" + fractionBDenom_Simplified + "\}\\ln\{|x + " + b + "|\}";
                };
            };
        };
    };
    const question = "Find the indefinite integral, \\(\\int\{\\frac\{" + formatted_mx_c + "\}\{" + formatted_polynomial_denom + "\}dx\}\\).";
    const answer = "\\(" + term_1 + term_2 + " + c\\), \\(c \\in \\mathbb\{R\}\\)";
    return [question, answer];
};

// Linear Algebra

function linearlyIndependent_three_d() {
    const linearlyIndependent = [false, true][Math.floor(Math.random() * 2)];
    var v_1;
    var v_2;
    var v_3;
    var a_1;
    var b_1;
    var c_1;
    var a_2;
    var b_2;
    var c_2;
    var a_3;
    var b_3;
    var c_3;
    var answer;
    if (!linearlyIndependent) {
        var alpha = Math.floor(Math.random() * 25 - 12);
        var beta = Math.floor(Math.random() * 25 - 12);
        var pass = false;
        while (!pass) {
            a_1 = Math.floor(Math.random() * 25 - 12);
            b_1 = Math.floor(Math.random() * 25 - 12);
            c_1 = Math.floor(Math.random() * 25 - 12);
            a_2 = Math.floor(Math.random() * 25 - 12);
            b_2 = Math.floor(Math.random() * 25 - 12);
            c_2 = Math.floor(Math.random() * 25 - 12);
            if (!(a_1 === 0 && b_1 === 0 && c_1 === 0) && !(a_2 === 0 && b_2 === 0 && c_2 === 0)) {
                const lambda1 = a_2 / a_1;
                const lambda2 = b_2 / b_1;
                const lambda3 = c_2 / c_1;
                if (!(lambda1 === lambda2 && lambda2 === lambda3)) {
                    pass = true;
                };
            };
        };
        v_3 = [alpha * a_1 + beta * a_2, alpha * b_1 + beta * b_2, alpha * c_1 + beta * c_2];
        answer = "No, the vectors are not linearly independent: \\(\\alpha = " + alpha + ", \\beta = " + beta + "\\)";
    } else {
        var pass = false;
        while (!pass) {
            a_1 = Math.floor(Math.random() * 25 - 12);
            b_1 = Math.floor(Math.random() * 25 - 12);
            c_1 = Math.floor(Math.random() * 25 - 12);
            a_2 = Math.floor(Math.random() * 25 - 12);
            b_2 = Math.floor(Math.random() * 25 - 12);
            c_2 = Math.floor(Math.random() * 25 - 12);
            a_3 = Math.floor(Math.random() * 25 - 12);
            b_3 = Math.floor(Math.random() * 25 - 12);
            c_3 = Math.floor(Math.random() * 25 - 12);
            if (a_1 * (b_2 * c_3 - b_3 * c_2) - b_1 * (a_2 * c_3 - a_3 * c_2) + c_1 * (a_2 * b_3 - a_3 * b_2) == 0) {
                pass = true;
            };
        };
        v_3 = [a_3, b_3, c_3];
        answer = "Yes, the vectors are linearly independent.";
    };
    const question = "Consider the vectors, \\(\\overrightarrow\{v_1\} = \\begin\{bmatrix\}" + a_1 + "\\\\ " + b_1 + "\\\\ " + c_1 + " \\end\{bmatrix\}, \\overrightarrow\{v_2\} = \\begin\{bmatrix\}" + a_2 + "\\\\ " + b_2 + "\\\\ " + c_2 + " \\end\{bmatrix\}, \\overrightarrow\{v_3\} = \\begin\{bmatrix\}" + v_3[0] + "\\\\ " + v_3[1] + "\\\\ " + v_3[2] + " \\end\{bmatrix\}\\). Determine whether or not the vectors are linearly independent. If they are not, express \\(\\overrightarrow\{v_3\}\\) in the form \\(\\alpha \\overrightarrow\{v_1\} + \\beta \\overrightarrow\{v_2\}\\).";
    return [question, answer];
};

// WORKING

let currentAnswer = "";

// Function to generate a random question based on the selected topic
function generateQuestion() {
    const topic = document.getElementById("topic").value;

    let selectedQuestion;
    if (topic === "tangents") {
        selectedQuestion = tangentToCircle(); // Generates new question
    } else if (topic === "polynomials") {
        const polynomialFunctions = [doesLineIntersectQuadratic, factoriseQuadratic];
        const randomIndex = Math.floor(Math.random() * polynomialFunctions.length);
        selectedQuestion = polynomialFunctions[randomIndex](); // Call one of the polynomial functions
    } else if (topic == "complex_numbers") {
        const complexFunctions = [standardToExponential, multiplyComplexNumbers, dividingComplexNumbers];
        const randomIndex = Math.floor(Math.random() * complexFunctions.length);
        selectedQuestion = complexFunctions[randomIndex]();
    } else if (topic == "firstOrderODEs") {
        const firstOrderFunctions = [typeOneFirstOrderODE, typeTwoFirstOrderODE];
        const randomIndex = Math.floor(Math.random() * firstOrderFunctions.length);
        selectedQuestion = firstOrderFunctions[randomIndex]();
    } else if (topic == "partialFractions") {
        const partialFractionsFunctions = [partialFractionsOne, indefiniteIntegralPartialFractions];
        const randomIndex = Math.floor(Math.random() * partialFractionsFunctions.length);
        selectedQuestion = partialFractionsFunctions[randomIndex]();
    } else if (topic == "linearAlgebra") {
        const linearAlgebraFunctions = [linearlyIndependent_three_d];
        const randomIndex = Math.floor(Math.random() * linearAlgebraFunctions.length);
        selectedQuestion = linearAlgebraFunctions[randomIndex]();
    };

    // Update the HTML to display the new question
    document.getElementById("questionOutput").innerHTML = selectedQuestion[0];
    currentAnswer = selectedQuestion[1];

    // Clear previous answer
    document.getElementById("answerOutput").innerHTML = "";
    document.getElementById("showAnswer").style.display = "inline-block";

    // Re-render MathJax
    MathJax.typesetPromise();
}

// Function to show the answer
function showAnswer() {
    document.getElementById("answerOutput").innerHTML = currentAnswer;
    MathJax.typesetPromise();
};

function downloadQuestionAsPDF() {
    const questionElement = document.getElementById("questionOutput");
    const answerElement = document.getElementById("answerOutput");

    // Hide content while processing
    questionElement.style.visibility = "hidden";
    answerElement.style.visibility = "hidden";

    MathJax.typesetPromise().then(() => {
        setTimeout(() => {
            // Make elements visible again after MathJax rendering
            questionElement.style.visibility = "visible";
            answerElement.style.visibility = "visible";

            // Capture question
            html2canvas(questionElement, { scale: 3, useCORS: true }).then((questionCanvas) => {
                html2canvas(answerElement, { scale: 3, useCORS: true }).then((answerCanvas) => {

                    // Create PDF
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();

                    // Convert elements to images
                    const questionImg = questionCanvas.toDataURL("image/png");
                    const answerImg = answerCanvas.toDataURL("image/png");

                    // Add content to PDF
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(18);
                    doc.text("Generated Question", 10, 10);

                    doc.addImage(questionImg, "PNG", 10, 20, 180, 0);

                    doc.setFont("helvetica", "bold");
                    doc.text("Answer:", 10, 120);
                    doc.addImage(answerImg, "PNG", 10, 130, 180, 0);

                    // Save PDF
                    doc.save("Generated_Question.pdf");
                });
            });
        }, 500); // Small delay ensures MathJax is fully processed
    });
};