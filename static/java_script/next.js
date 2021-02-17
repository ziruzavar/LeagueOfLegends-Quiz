function script(questionsObjs) {
    let questionName = document.getElementById('name');
    let current = document.getElementById('current');
    let questions = document.getElementsByTagName('label');
    let button = document.getElementById('next')
    button.addEventListener('click', next);
    let inputs = document.getElementsByTagName('input');
    let curr = 0;
    let right = 0;

    ///Load first Question
    populateLabels();


    function next() {

        let givenAnswer = document.querySelector('input:checked');
        if (givenAnswer.value === questionsObjs[curr].fields.answer) {
            right += 1;
        }
        console.log(right);
        givenAnswer.checked = false;

        ///load the new Question;
        curr += 1;

        if (curr === 19){
            let a = document.createElement('a');
            a.textContent = 'Finish';
            a.classList.add('btn-success', 'btn');
            button.parentNode.replaceChild(a, button);
            let givenAnswer = document.querySelector('input:checked');
            if (givenAnswer.value === questionsObjs[curr].fields.answer) {
            right += 1;
            }
            a.href = `finish/?right=${right}`;
        }

        current.textContent = `(${curr+1} of 20)`;
        populateLabels();

    }

    function populateLabels() {
        let arr = [questionsObjs[curr].fields.fi_choice, questionsObjs[curr].fields.se_choice, questionsObjs[curr].fields.th_choice, questionsObjs[curr].fields.fo_choice];
        ///Labels
        questionName.textContent = questionsObjs[curr].fields.name;
        for (let n=0; n<4; n++){
        questions[n].textContent = arr[n];
        }

        ///Inputs
        for (let n=0; n<4; n++){
        inputs[n].value = arr[n];
        }
    }
}