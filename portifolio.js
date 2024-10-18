function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("toggleButton").style.display='none';
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("toggleButton").style.display='block';
  }

  const typingElement= document.querySelector('.typing');
  const myJobs=["Student","webDev", "androiddev","Designer"];
  let jobsIndex=0;
  let characterIndex=0;
  updateJob();
  function updateJob(){
        characterIndex++;
        typingElement.innerHTML=`<h1 class="jobs">I'm ${myJobs[jobsIndex].slice(0,characterIndex)}</h1>`;
        if(characterIndex===myJobs[jobsIndex].length){
            characterIndex=0;
            jobsIndex++;
        }

       if(jobsIndex===myJobs.length){
            jobsIndex=0;
       }
        setTimeout(updateJob,100);
  }
  