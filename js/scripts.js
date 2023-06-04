(() => {
    console.log("howdy!");
  })();

  function displaySection(sectionName) {
    document.getElementById('splash').classList = "hidden";
    document.getElementById('about').classList = "hidden";
    document.getElementById('resume').classList = "hidden";
    document.getElementById(sectionName).classList = "show";

    // var sections = document.getElementsByTagName('section');
    // for (let section of sections) {
    //     console.log(section);
    //     section.classList = 'hidden';

    // }

    // document.getElementById(sectionName).classList = "show";
  }

