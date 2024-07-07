(function() {
  const omenButton = document.getElementById('omen-button');
  const omenOutput = document.getElementById('omen');
  
  omenButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      const jobTitle = document.getElementById('job-title').value;
      const geographicLocation = document.getElementById('geographic-location').value;
      const partnersName = document.getElementById('partners-name').value;
      const numberOfChildren = document.getElementById('number-of-children').value;
      
      if (jobTitle && geographicLocation && partnersName && numberOfChildren) {
        
          const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
          omenOutput.textContent = sentence;
      }
  });
})();