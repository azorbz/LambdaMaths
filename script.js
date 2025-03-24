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
    ]
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
    }

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
}