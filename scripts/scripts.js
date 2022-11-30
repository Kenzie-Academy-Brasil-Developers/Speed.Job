//<li>
{
  /* <div class="dev-front">
<h2 class="icon">G</h2>
<div class="dev-location">
  <h3>Desenvolvedor Frontend</h3>
  <h4>Curitiba - Paraná</h4>
</div>
</div>
<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h5>
<div class="but-ft-remote">
<button>Full Time</button>
<button>Remote</button>
</div>
</li> */
}

function renderFrontJobs(frontEndJobs) {
  const tagUl = document.querySelector(".front-end");

  frontEndJobs.forEach((element) => {
    console.log(element);

    const tagLi = document.createElement("li");
    const tagDivdevFront = document.createElement("div");
    const tagH2 = document.createElement("h2");
    const tagDivLocation = document.createElement("div");
    const tagh3 = document.createElement("h3");
    const tagH4 = document.createElement("h4");
    const tagh5 = document.createElement("h5");
    const tagDivbut = document.createElement("div");

    tagDivdevFront.classList = "dev-front";
    tagH2.classList = "icon";
    tagDivLocation.classList = "dev-location";
    tagDivbut.classList = "but-ft-remote";

    tagH2.innerText = "G";
    tagh3.innerText = element.title;
    tagH4.innerText = "Curitiba - Paraná";
    tagh5.innerText = element.descrription;

    element.modality.forEach((element) => {
      const tagbuttonFt = document.createElement("button");
      tagbuttonFt.innerText = element;
      tagDivbut.append(tagbuttonFt);
    });

    tagLi.id = element.id;

    tagLi.append(tagDivdevFront, tagh5, tagDivbut);
    tagDivdevFront.append(tagH2, tagDivLocation);
    tagDivLocation.append(tagh3, tagH4);
    tagUl.append(tagLi);
  });
}
renderFrontJobs(frontEndJobs);


function renderBackJobs(backEndJobs) {
    const tagUl = document.querySelector(".back-end");
  
    backEndJobs.forEach((element) => {
      console.log(element);
  
      const tagLi = document.createElement("li");
      const tagDivdevFront = document.createElement("div");
      const tagH2 = document.createElement("h2");
      const tagDivLocation = document.createElement("div");
      const tagh3 = document.createElement("h3");
      const tagH4 = document.createElement("h4");
      const tagh5 = document.createElement("h5");
      const tagDivbut = document.createElement("div");
  
      tagDivdevFront.classList = "dev-front";
      tagH2.classList = "icon";
      tagDivLocation.classList = "dev-location";
      tagDivbut.classList = "but-ft-remote";
  
      tagH2.innerText = "G";
      tagh3.innerText = element.title;
      tagH4.innerText = "Curitiba - Paraná";
      tagh5.innerText = element.descrription;
  
      element.modality.forEach((element) => {
        const tagbuttonFt = document.createElement("button");
        tagbuttonFt.innerText = element;
        tagDivbut.append(tagbuttonFt);
      });
  
      tagLi.id = element.id;
  
      tagLi.append(tagDivdevFront, tagh5, tagDivbut);
      tagDivdevFront.append(tagH2, tagDivLocation);
      tagDivLocation.append(tagh3, tagH4);
      tagUl.append(tagLi);
    });
  }
  renderBackJobs(backEndJobs);