const questions = [
    {
        question: "In social situations, you usually:",
        options: [
            { text: "Actively engage in conversations and enjoy socializing", type: "E" },
            { text: "Prefer to observe quietly and wait for others to approach", type: "I" }
        ]
    },
    {
        question: "When facing problems, you tend to:",
        options: [
            { text: "Focus on specific details and practical situations", type: "S" },
            { text: "Consider various possibilities and innovative solutions", type: "N" }
        ]
    },
    {
        question: "When making decisions, you usually:",
        options: [
            { text: "Base them on objective facts and logical analysis", type: "T" },
            { text: "Consider others' feelings and values", type: "F" }
        ]
    },
    {
        question: "You prefer to:",
        options: [
            { text: "Follow plans and maintain order", type: "J" },
            { text: "Stay flexible and keep options open", type: "P" }
        ]
    },
    {
        question: "In team collaboration, you excel at:",
        options: [
            { text: "Coming up with new ideas and creativity", type: "N" },
            { text: "Executing specific tasks and details", type: "S" }
        ]
    }
];

const typeDescriptions = {
    "ISTJ": "Quiet, serious, successful through thoroughness and reliability. Practical, orderly, and responsible. They value tradition and loyalty.",
    "ISFJ": "Quiet, friendly, responsible, and conscientious. Committed to their responsibilities. They value tradition and loyalty.",
    "INFJ": "Seek meaning and connection, want to understand what motivates others. They value honesty and commitment.",
    "INTJ": "Have original minds and great drive for their own ideas and purposes. They value knowledge and competence.",
    "ISTP": "Flexible and tolerant, they quietly observe until a problem appears, then act quickly to find workable solutions.",
    "ISFP": "Quiet, friendly, sensitive, and kind. Enjoy the present moment. Like their own space and working within their own time frame.",
    "INFP": "Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values.",
    "INTP": "Seek to develop logical explanations for everything that interests them. Value knowledge and competence.",
    "ESTP": "Flexible and tolerant, they take a pragmatic approach focused on immediate results. Like theories and abstract explanations.",
    "ESFP": "Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen.",
    "ENFP": "Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly.",
    "ENTP": "Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities.",
    "ESTJ": "Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done.",
    "ESFJ": "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it.",
    "ENFJ": "Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others.",
    "ENTJ": "Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies. Develop and implement comprehensive systems."
};

let currentQuestion = 0;
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

function startQuiz() {
    currentQuestion = 0;
    scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    
    if (currentQuestion < questions.length) {
        questionContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        const progress = document.getElementById('progress');
        progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
        
        const question = questions[currentQuestion];
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.onclick = () => selectOption(option.type);
            optionsContainer.appendChild(button);
        });
    } else {
        showResult();
    }
}

function selectOption(type) {
    scores[type]++;
    currentQuestion++;
    showQuestion();
}

function showResult() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const type = [
        scores.E > scores.I ? 'E' : 'I',
        scores.S > scores.N ? 'S' : 'N',
        scores.T > scores.F ? 'T' : 'F',
        scores.J > scores.P ? 'J' : 'P'
    ].join('');
    
    document.getElementById('mbti-result').textContent = type;
    document.getElementById('type-description').textContent = typeDescriptions[type];
}

document.getElementById('restart-btn').addEventListener('click', startQuiz);

// 开始测试
startQuiz(); 