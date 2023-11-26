

const adbtn = document.querySelector ('.ad-closebtn') 
const clsoead = document.querySelector ('.adController') 

adbtn.addEventListener('click', function() {
    clsoead.classList.add('close')
});
adbtn.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Enter') {
       clsoead.classList.add('close')
    }
  });

const dropicon = document.querySelector('.dropicon');
const Gdropdown = document.querySelector('.dropdwnController');
dropicon.addEventListener('click', function() {
Gdropdown.classList.toggle('open')
    icontoggle()
});

dropicon.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        Gdropdown.classList.toggle('open')
        icontoggle()
    }
});

dropicon.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        Gdropdown.classList.toggle('open')
        icontoggle()
    }
});


function icontoggle() {
    if (Gdropdown.classList.contains('open')) {
        dropicon.innerHTML = `
        <svg width="41" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 
        12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 
        11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 
        11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="black"/>
        </svg>
        
        `
        
    } else  {
        dropicon.innerHTML  = `
        <svg width="41" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 
        7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 
        8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 
        13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="black"/>
        </svg>
        `
        
      };
    
}


const progressBar = document.querySelector('#progress');

let buttonsClicked = 0;


    document.getElementById('openModal1').addEventListener('click', function() {
      openModal('modal1');
    });

    document.getElementById('openModal1').addEventListener('keydown', function(e) {
        console.log(e.key);
        if (e.key === 'Enter') {
            openModal('modal1');
        }
      });

    document.getElementById('openModal2').addEventListener('click', function() {
      openModal('modal2');
    });

    document.getElementById('openModal2').addEventListener('keydown', function(e) {
        console.log(e.key);
        if (e.key === 'Enter') {
            openModal('modal2');
        }
      });

    document.getElementById('closeModal1').addEventListener('click', function() {
      closeModal('modal1');
    });

    document.getElementById('closeModal2').addEventListener('click', function() {
      closeModal('modal2');
    });

    function openModal(modalId) {
      document.getElementById(modalId).classList.toggle('active');
      // Close the other modal
      const otherModalId = modalId === 'modal1' ? 'modal2' : 'modal1';
      document.getElementById(otherModalId).classList.remove('active');
    }

    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('active');
    }


    const dropbtnContainer = document.querySelector(".maindropdownContainer");

    const itemBtns = document.querySelectorAll(".itemBtn");
    const totalLength = itemBtns.length;
    let messageText = '1';
    
    dropbtnContainer.addEventListener('click', function (e) {
        const target = e.target;
    
       
    });

    
    






  //   const allButtons = document.querySelectorAll('.fixed-btn');
  
  //   allButtons.forEach((btn, idx) =>  {
  //       btn.addEventListener('click', () => {
          

  //         if(btn.classList.contains('active')) {
  //           [...allButtons].slice(idx,allButtons.length).forEach(btn => {
  //             document.querySelector('.h6').textContent = `
  //                 ${ [...allButtons].slice(0,idx).length} / ${allButtons.length} Completed`;
  //                 btn.classList.remove('active');
  //                 progressBar.value = [...allButtons].slice(0,idx).length * 20;
  //                 resetAnimation(btn)
  //           })
  //           } else {
  //             [...allButtons].slice(0,idx+1).forEach(btn => {
  //               document.querySelector('.h6').textContent = `
  //                   ${ [...allButtons].slice(0,idx+1).length} / ${allButtons.length} Completed`;
  //                   btn.classList.add('active');
  //                   progressBar.value = [...allButtons].slice(0,idx+1).length * 20;
  //                   startAnimation(btn)
  //             })
  //             }
  //       })
  //   })





  //       btn.addEventListener('keydown', function (e) {
  //     if (e.key === 'Enter' || e.key === ' ') {
  //       if(btn.classList.contains('active')) {
  //         [...allButtons].slice(idx,allButtons.length).forEach(btn => {
  //           document.querySelector('.h6').textContent = `
  //               ${ [...allButtons].slice(0,idx).length} / ${allButtons.length} Completed`;
  //               btn.classList.remove('active');
  //               progressBar.value = [...allButtons].slice(0,idx).length * 20;
  //               resetAnimation(btn)
  //         })
  //         } else {
  //           [...allButtons].slice(0,idx+1).forEach(btn => {
  //             document.querySelector('.h6').textContent = `
  //                 ${ [...allButtons].slice(0,idx+1).length} / ${allButtons.length} Completed`;
  //                 btn.classList.add('active');
  //                 progressBar.value = [...allButtons].slice(0,idx+1).length * 20;
  //                 startAnimation(btn)
  //           })
  //           }
  //     }
  // });








  const allButtons = document.querySelectorAll('.fixed-btn');

  allButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        [...allButtons].slice(idx, allButtons.length).forEach(btn => {
          document.querySelector('.h6').textContent = `
            ${[...allButtons].slice(0, idx).length} / ${allButtons.length} Completed`;
          btn.classList.remove('active');
          progressBar.value = [...allButtons].slice(0, idx).length * 20;
          resetAnimation(btn);
        });
      } else {
        [...allButtons].slice(0, idx + 1).forEach(btn => {
          document.querySelector('.h6').textContent = `
            ${[...allButtons].slice(0, idx + 1).length} / ${allButtons.length} Completed`;
          btn.classList.add('active');
          progressBar.value = [...allButtons].slice(0, idx + 1).length * 20;
          startAnimation(btn);
        });
      }
    });
  
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        if (btn.classList.contains('active')) {
          [...allButtons].slice(idx, allButtons.length).forEach(btn => {
            document.querySelector('.h6').textContent = `
              ${[...allButtons].slice(0, idx).length} / ${allButtons.length} Completed`;
            btn.classList.remove('active');
            progressBar.value = [...allButtons].slice(0, idx).length * 20;
            resetAnimation(btn);
          });
        } else {
          [...allButtons].slice(0, idx + 1).forEach(btn => {
            document.querySelector('.h6').textContent = `
              ${[...allButtons].slice(0, idx + 1).length} / ${allButtons.length} Completed`;
            btn.classList.add('active');
            progressBar.value = [...allButtons].slice(0, idx + 1).length * 20;
            startAnimation(btn);
          });
        }
      }
    });
  });
  







  

    

        function startAnimation(el) {
            var loader = el.querySelector('.loader');
            var successMark = el.querySelector('.success-mark');

            loader.style.display = 'block';

            setTimeout(function () {
                loader.style.display = 'none';
                successMark.style.display = 'block';
            }, 600); 
        }

        function resetAnimation(el) {
            var loader = el.querySelector('.loader');
            var successMark = el.querySelector('.success-mark');

            loader.style.display = 'none';
            successMark.style.display = 'none';
        }





        const allDropdowns = document.querySelectorAll(".dropdownGeneral");

        allDropdowns.forEach((dropdown) => {
            const titledrop = dropdown.querySelector(".dropItems");
            const items = dropdown.querySelector(".itemsdrop");
        
            titledrop.addEventListener('click', () => {
                allDropdowns.forEach((otherDropdown) => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.querySelector(".itemsdrop").classList.remove("active");
                    }
                });
        
                items.classList.toggle("active");
            });
        
            titledrop.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    allDropdowns.forEach((otherDropdown) => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.querySelector(".itemsdrop").classList.remove("active");
                        }
                    });
        
                    items.classList.toggle("active");
                }
            });
        });
        