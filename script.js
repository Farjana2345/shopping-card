/*  case section */  
     document.getElementById('case-increase').addEventListener('click',function(){
        const caseInput = document.getElementById('case-count');
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount + 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
        document.getElementById('total-case').innerText = '$' + caseTotal;
     })
     document.getElementById('case-decrease').addEventListener('click',function(){
        const caseInput = document.getElementById('case-count');
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount - 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
        document.getElementById('total-case').innerText = '$' + caseTotal;
     })
   //   iphone section
   document.getElementById('phone-increase').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('total-phone').innerText = '$' + phoneTotal;
  })
  document.getElementById('phone-decrease').addEventListener('click', function(){
     const phoneInput = document.getElementById('phone-count');
     const phoneCount = parseInt(phoneInput.value);
     const phoneNewCount = phoneCount - 1;
     phoneInput.value = phoneNewCount;
     const phoneTotal = phoneNewCount * 1219;
     document.getElementById('total-phone').innerText = '$' + phoneTotal;
  })