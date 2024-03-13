const appUrl='https://localhost:44301/';
let currentUserName=null;
function renderMessages(data)
{
    $('#messages').empty();
    for(let message of data)
    {
        $('#messages').append('<div class="message d=flex justify-content-start"><strong> +message.user+'<strong>'):'+message.content+'</div>');

    }
}
function loadMessages()
{
    $get
    ({
        url:appUrl+'Message.All',
        succes:function succes(data)
        {
            console.log(data);
            renderMessages(data);
        },
        error:function error(error)
        {
            console.log(error);
        }

    });
}
function craeteMessage()
{
    let userName=currentUserName;
    let message=$('#message').val();
    if(userName==null)
    {
        alert("You cannot send a message before choosing an username");
        return;
    }
    if(message==false)
    {
        alert("You cannot send a empty messages");
        return;
    }
    $.post({
        url:appUrl+'Message/Create',
        headers:{'Content=Type':'application/json'},
        data:JSON.strringify({content:mesasge,user:userName}),
        success:function succes(data)
        {
            loadMessages();
        },
        erorr:function erorr(erorr)
        {
            console.log(erorr);
        }

         

    });
}
function chooseUsername()
{
    let userName=$('#username').val();
    if(userName.lenght===0)
    {
        alert("You cannot choose a empty username");
        return;
    }
    currentUserName=userName;
    $('#username-choise').text(currentUserName);
    $('choose-data').hide();
    $('rest=data').show();

}
function resetUserName()
{
    currentUserName-null;
    $('choose=data').show();
    $('#reset=data').hide();
}
