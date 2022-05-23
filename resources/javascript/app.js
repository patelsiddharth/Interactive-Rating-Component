let rating = null;

function handleRating(e) {
    this.rating = e.value;
    const temp = Array.from(e.parentElement.children);
    if(Array.isArray(temp) && temp.length > 0)
    {
        const found = temp.find(item => item.classList.contains('active'))
        if(found)
        {
            found.classList.remove('active');
        }
    }
    e.classList.add("active")
}

function submitRating() {
    console.log(this.rating);
    const ratingValue = document.querySelector(".result-rating");
    if(ratingValue)
    {
        ratingValue.innerText = `You selected ${this.rating} out of 5`;
    }

    const resultContainer = document.querySelector(".result");
    if(resultContainer)
    {
        resultContainer.classList.toggle("hide");
    }

    const ratingContainer = document.querySelector(".rating-form");
    if(ratingContainer)
    {
        ratingContainer.classList.toggle("hide");
    }
}