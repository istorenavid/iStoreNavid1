const modal=document.getElementById('guideModal');
document.getElementById('guideBtn').addEventListener('click',()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false')});
document.getElementById('closeModal').addEventListener('click',()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')});
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}});
