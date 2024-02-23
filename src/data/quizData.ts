const quizData = {
    React: [
        {
            question: 'Which is the most popular JavaScript framework?',
            options: ['Angular', 'Svelte', 'React', 'Vue'],
            correctOption: 2,
            points: 10,
        },
        {
            question:
                'Which hook is used to add state to a functional component in React?',
            options: [
                'useState()',
                'useEffect()',
                'useContext()',
                'useReducer()',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question: 'What is the purpose of the key prop in React lists?',
            options: [
                'To style list items',
                'To control rendering of list items',
                'To define list item order',
                'To identify each list item uniquely',
            ],
            correctOption: 3,
            points: 10,
        },
        {
            question: 'What is the purpose of React.Fragment?',
            options: [
                'To create a new React component',
                'To group multiple elements without adding extra nodes to the DOM',
                'To define a custom data type in React',
                'To apply styling to React components',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'What is the purpose of the useEffect hook in React?',
            options: [
                'To define event handlers in functional components',
                'To manage and update state in functional components',
                'To handle side effects in functional components',
                'To define reusable logic for components',
            ],
            correctOption: 2,
            points: 10,
        },
        {
            question: 'In React, what is the purpose of the useRef hook?',
            options: [
                'To fetch data from an external API',
                'To manage and update state in functional components',
                'To handle side effects in functional components',
                'To reference DOM elements or values in functional components',
            ],
            correctOption: 3,
            points: 10,
        },
        {
            question: 'Which of the following is true about React components?',
            options: [
                'React components must always return a DOM element',
                'React components can only be created using class syntax',
                'React components can be functional or class-based',
                'React components are only used for styling',
            ],
            correctOption: 2,
            points: 10,
        },
        {
            question: 'What is the purpose of the useMemo hook in React?',
            options: [
                'To memoize expensive calculations and only recompute the value when the dependencies have changed',
                'To define event handlers in functional components',
                'To manage and update state in functional components',
                'To handle side effects in functional components',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question:
                'Which of the following statements about React Router is true?',
            options: [
                'React Router is used for server-side routing in React applications',
                'React Router provides a way to navigate between different components in a React application',
                'React Router is primarily used for styling React components',
                'React Router is only compatible with class components',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'What is a React component?',
            options: [
                'A reusable piece of code',
                'A built-in HTML element',
                'A JavaScript function or class',
                'An HTML file',
            ],
            correctOption: 2,
            points: 10,
        },
    ],
    JavaScript: [
        {
            question:
                'Which function is used to serialize an object into a JSON string in Javascript?',
            options: ['stringify()', 'JSON.parse()', 'convert()', 'parse()'],
            correctOption: 0,
            points: 10,
        },
        {
            question: 'What does the "===" operator do in JavaScript?',
            options: [
                'Checks for equality of value and type',
                'Checks for equality of value',
                'Assigns a value to a variable',
                'Compares two values',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question:
                'What is the purpose of the "this" keyword in JavaScript?',
            options: [
                'To refer to the current function',
                'To refer to the parent function',
                'To refer to the global object',
                'To refer to the current object',
            ],
            correctOption: 3,
            points: 10,
        },
        {
            question:
                'What is the purpose of the map() function in JavaScript?',
            options: [
                'To filter elements in an array based on a condition',
                'To create a new array with the results of calling a provided function on every element in the calling array',
                'To execute a provided function once for each array element',
                'To combine all elements of an array into a single value',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question:
                'Which keyword is used to declare variables in JavaScript?',
            options: ['var', 'let', 'all of the above', 'const'],
            correctOption: 2,
            points: 10,
        },
        {
            question:
                'What is the purpose of the "querySelector()" method in JavaScript?',
            options: [
                'To select an element by its class name',
                'To select an element by its ID',
                'To select the first element that matches a specified CSS selector',
                'To select all elements that match a specified CSS selector',
            ],
            correctOption: 2,
            points: 10,
        },
        {
            question:
                'What is the purpose of the "addEventListener()" method in JavaScript?',
            options: [
                'To attach an event handler to an element',
                'To remove an event handler from an element',
                'To trigger an event on an element',
                'To prevent the default action of an event',
            ],
            correctOption: 0,
            points: 10,
        },
    ],
    TypeScript: [
        {
            question:
                'What is the inherited type for the variable example in const example = ["Dylan"]?',
            options: ['any[]', 'string', 'unknown', 'string[]'],
            correctOption: 3,
            points: 10,
        },
        {
            question: 'What is TypeScript primarily used for?',
            options: [
                'Styling web pages',
                'Building databases',
                'Adding static typing to JavaScript',
                'Handling server-side logic',
            ],
            correctOption: 2,
            points: 10,
        },
        {
            question:
                'Which keyword is used to define a type alias in TypeScript?',
            options: ['type', 'interface', 'class', 'typedef'],
            correctOption: 0,
            points: 10,
        },
        {
            question: 'What is the purpose of the "never" type in TypeScript?',
            options: [
                'To represent a value that never occurs',
                'To define a type that can hold any value',
                'To indicate that a function never returns',
                'To indicate an unknown or unspecified type',
            ],
            correctOption: 2,
            points: 10,
        },
        {
            question: 'What does the "as" keyword do in TypeScript?',
            options: [
                'It defines a type assertion',
                'It creates a new variable',
                'It defines a type guard',
                'It performs a conditional assignment',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question:
                'What is the purpose of the "interface" keyword in TypeScript?',
            options: [
                'To define a new JavaScript class',
                'To define a type that represents the structure of an object',
                'To create a new instance of an object',
                'To define a type that represents a union of other types',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question:
                'What is the purpose of the "extends" keyword in TypeScript?',
            options: [
                'To define inheritance between classes',
                'To compare two values',
                'To create a new object',
                'To declare a new variable',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question:
                'What is the difference between "interface" and "type" in TypeScript?',
            options: [
                'There is no difference, they can be used interchangeably',
                'Interfaces can be extended and implemented, while types cannot',
                'Types can be extended and implemented, while interfaces cannot',
                'Interfaces are used for primitive types, while types are used for complex types',
            ],
            correctOption: 1,
            points: 10,
        },
    ],
    HTML: [
        {
            question: '< br  / > What type of tag is this?',
            options: [
                'Break tag',
                'A broken one',
                'A closing tag',
                'An opening tag',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question: '<br/> What type of tag is this?',
            options: [
                'A broken one',
                'A closing tag',
                'An opening tag',
                'Break tag',
            ],
            correctOption: 3,
            points: 10,
        },
        {
            question: 'Which HTML tag is used to define an unordered list?',
            options: ['<ol>', '<li>', '<ul>', '<dl>'],
            correctOption: 2,
            points: 10,
        },
        {
            question: 'What does HTML stand for?',
            options: [
                'Hyper Text Markup Language',
                'Hyperlinks and Text Markup Language',
                'Home Tool Markup Language',
                'Hyper Tool Markup Language',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question: 'What does the <a> tag do?',
            options: [
                'Defines a paragraph',
                'Defines a hyperlink',
                'Defines an image',
                'Defines a section',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'Which HTML tag is used to define a table row?',
            options: ['<td>', '<table>', '<th>', '<tr>'],
            correctOption: 3,
            points: 10,
        },
        {
            question: 'What is the correct HTML for creating a hyperlink?',
            options: [
                '<a url="http://www.example.com">Example</a>',
                '<a href="http://www.example.com">Example</a>',
                '<link>http://www.example.com</link>',
                '<link url="http://www.example.com">Example</link>',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'Which HTML tag is used to define a form?',
            options: ['<form>', '<input>', '<button>', '<label>'],
            correctOption: 0,
            points: 10,
        },
        {
            question: 'What does CSS stand for?',
            options: [
                'Cascading Style Sheets',
                'Computer Style Sheets',
                'Creative Style Sheets',
                'Colorful Style Sheets',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question: 'Which HTML tag is used to define a footer?',
            options: ['<bottom>', '<end>', '<footer>', '<section>'],
            correctOption: 2,
            points: 10,
        },
        {
            question:
                'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
            options: ['title', 'src', 'href', 'alt'],
            correctOption: 3,
            points: 10,
        },
    ],
    CSS: [
        {
            question: 'How can you created rounded corners using CSS3?',
            options: [
                'corner-effect: round;',
                'border[round]: 30px;',
                'border-radius: 30px;',
                'alpha-effect: round-corner;',
            ],
            correctOption: 2,
            points: 10,
        },
        {
            question: 'Which property is used to change the background color?',
            options: ['background-color', 'color', 'bgcolor', 'background'],
            correctOption: 0,
            points: 10,
        },
        {
            question: 'How do you center an element horizontally?',
            options: [
                'text-align: center;',
                'margin: auto;',
                'align: center;',
                'center: 0;',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'What does CSS stand for?',
            options: [
                'Creative Style Sheets',
                'Cascading Style Sheets',
                'Computer Style Sheets',
                'Colorful Style Sheets',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'Which CSS property is used to control the text size?',
            options: ['text-style', 'font-size', 'text-size', 'font-style'],
            correctOption: 1,
            points: 10,
        },
        {
            question:
                'How can you make a list that lists its items with squares?',
            options: [
                'list-type: square;',
                'list-style-type: square;',
                'list: square;',
                'list-item: square;',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'How do you select an element with id "demo" in CSS?',
            options: ['#demo', '.demo', '*demo', 'demo'],
            correctOption: 0,
            points: 10,
        },
        {
            question:
                'Which CSS property is used to make a font italic or oblique?',
            options: [
                'text-style',
                'font-style',
                'font-variant',
                'font-italic',
            ],
            correctOption: 1,
            points: 10,
        },
        {
            question: 'How do you group selectors?',
            options: [
                'Separate each selector with a comma',
                'Separate each selector with a space',
                'Separate each selector with a plus sign',
                'Separate each selector with a semicolon',
            ],
            correctOption: 0,
            points: 10,
        },
        {
            question:
                'Which CSS property is used to specify the stack order of an element?',
            options: ['z-index', 'stack-order', 'order', 'layer-index'],
            correctOption: 0,
            points: 10,
        },
    ],
};

export default quizData;
