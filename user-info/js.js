 
        const questionsArray = [
            "What is your name?",
            "What is your age?",
            "What is your favorite color?",
        ];
        
        let currentQuestion = 0;
        
        let responsesList = document.getElementById('userResponses');

        let answersArray = [];

        let userInfo = document.getElementById("userInfo");

        function showQuestion() {
            document.getElementById('userInfo').innerHTML = `
                <label class="questions">${questionsArray[currentQuestion]}</label>
                <input type="text" id="answer" name="answer"></input>
                <button type="submit">Submit</button>
            `;
        };

        function storeResponse(answer) {
            answersArray.push(answer);
        };

        function showResponses() {
    
    
            answersArray.forEach(function(answer) {
                let listItem = document.createElement('li');
                listItem.textContent = answer
                responsesList.appendChild(listItem);
            });
        };

        //show first question
        showQuestion();


        //click event
        document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('userInfo').addEventListener('submit', function(event) {
            
            event.preventDefault(); //prevent form submission
            
            let answerInput = document.getElementById('answer');
            let answer = answerInput.value;
            
            //store answer
            storeResponse(answer);
            console.log(answersArray);

            currentQuestion++;

            if (currentQuestion < questionsArray.length) {
                showQuestion();
            } else {
                userInfo.innerHTML = "You're done!";
                let resetButton = document.createElement('button');
                resetButton.textContent = "Reset";
                resetButton.className = "resetButton";
                userInfo.append(resetButton);

                resetButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    resetButton.focus();
                    answersArray = [];
                    console.log("answers array is now: " + answersArray.length);
                    responsesList.textContent = '';
                    resetButton.style.display = "none";
                    currentQuestion = 0;
                    showQuestion();

                    });
            showResponses();
            }; 
        });
    });