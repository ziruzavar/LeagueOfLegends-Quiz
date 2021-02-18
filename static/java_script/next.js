function script(questionsObjs) {

    console.log('outside the fn');

    let questionName = document.getElementById('name');
    let current = document.getElementById('current');
    let questions = document.getElementsByTagName('label');
    let button = document.getElementById('next')
    button.addEventListener('click', next);
    let inputs = document.getElementsByTagName('input');
    let curr = 0;
    let right = 0;

    let time = 20;
    let timeEl = document.getElementById('time');
    ///Load first Question
    populateLabels();

    function decrementSeconds(){
        time -= 1;
        timeEl.textContent = `Time left: ${time} seconds`;
        if (time === 0){
            console.log('0 seconds');
            time = 21;
            next();
        }
    }
    setInterval(decrementSeconds, 1000);


    function next() {

        let givenAnswer = document.querySelector('input:checked');
        if (givenAnswer == null){
            ///Do nothing
        }else {
            if (givenAnswer.value === questionsObjs[curr].fields.answer) {
                right += 1;
            }
            time = 21;
            givenAnswer.checked = false;
        }

        console.log(right);


        ///load the new Question;
        curr += 1;
        if (curr === 20){
            window.location.replace(`finish/?right=${right}`);
            return
        }
            current.textContent = `(${curr + 1} of 20)`;
            populateLabels();
        if (curr === 19){
            button.classList.add('btn-success');
            button.classList.remove('btn-primary');
            button.textContent = 'Finish'
        }

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