//changingLoginPageToTransactionPage

var enterButton =document.getElementById("enter-button");
enterButton.addEventListener("click",function(){
    document.getElementsByClassName("login-area")[0].style.display="none";
    document.getElementsByClassName("transaction-area")[0].style.display="block";
})

var depositButton =document.getElementById("deposit-button");
depositButton.addEventListener("click",function(){
    
    //fromDepositInputToDepositOutput
    
    var depositInput= parseFloat(document.getElementById("deposit-input").value);
    var oldDeposit=parseFloat(document.getElementById("old-deposit").innerText);
    var newDeposit=depositInput + oldDeposit;
    document.getElementById("old-deposit").innerText=newDeposit;
    
    document.getElementById("deposit-input").value="";
    
    //fromDepositInputToBalanceOutput
    
    var oldBalance=parseFloat(document.getElementById("old-balance").innerText);
    var newBalance=oldBalance+depositInput;
    document.getElementById("old-balance").innerText=newBalance;
})

var withdrawButton =document.getElementById("withdraw-button");
withdrawButton.addEventListener("click",function(){
    
    //fromWithdrawInputToDepositOutput
    
    var withdrawInput=parseFloat(document.getElementById("withdraw-input").value);
    var oldWithdraw=parseFloat(document.getElementById("old-withdraw").innerHTML);
    var newWithdraw = withdrawInput+oldWithdraw;
    document.getElementById("old-withdraw").innerHTML=newWithdraw;
    
    document.getElementById("withdraw-input").value="";
    
    //fromWithdrawInputToBalanceOutput
    
    var oldBalance=parseFloat(document.getElementById("old-balance").innerText);
    var notunBalance = oldBalance-withdrawInput;
    document.getElementById("old-balance").innerText=notunBalance;
})