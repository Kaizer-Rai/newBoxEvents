//Step 1
document.addEventListener('DOMContentLoaded', function() {
    //Step 2
    const boxContainer = document.getElementById("box-container");
    const newBoxBtn = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");
    //Step 3
    let boxColor = '';
    let counter = 0;
    //Step 4
    function newBox() {
        const box = document.createElement('div');
        box.setAttribute("data-box-id", counter.toString());
        box.textContent = `Box ${counter}`;
        box.className = 'box';
        box.style.backgroundColor = boxColor;
        boxContainer.appendChild(box);
        counter++;
    };

    colorForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const newColor = colorInput.value;
        const boxes = document.querySelectorAll('.box');
        for (const box of boxes) {
            box.style.backgroundColor = newColor;
        }
        colorInput.value = '';
        boxColor = newColor;
    });

    newBoxBtn.addEventListener('click', function () {
        newBox();
    })

    document.addEventListener('dblclick', function (evt) {
        if (evt.target.classList.contains('box')) {
            evt.target.textContent = `x: ${evt.pageX}, y: ${evt.pageY}`;
        }
    });

    document.addEventListener('mouseover', function (evt) {
        if (evt.target.classList.contains('box')) {
            evt.target.textContent = `x: ${evt.pageX}, y: ${evt.pageY}`;
        }
    });

    document.addEventListener("mouseout", function (event)
	{
		if (event.target.classList.contains("box"))
		{
			const boxId = event.target.getAttribute("data-box-id");
			event.target.textContent = `Box ${boxId}`;
		}
	});

	window.addEventListener("keydown", function (event)
	{
		if (event.target.id === "color-input")
		{
			return;
		}

		if (event.key === "n" || event.key === "N")
		{
			newBox(); 
		}
	});
});