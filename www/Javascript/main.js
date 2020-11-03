console.log("This is working");


function fillThumbnails() {
    var folder = "photos/";

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    var gallery = document.getElementById("gallery");
                    const thumbnail = document.createElement('div');
                    thumbnail.className = "photo-thumbnail";
                    console.log(folder + " " + val);
                    thumbnail.innerHTML = '<button>' + '<img src=' + val + '></button>';
                    gallery.appendChild(thumbnail);
                } 
            });
        }
    });


    for(i=0; i<folder.length; i++) {
        console.log(folder[i]);
        // var gallery = document.getElementById("gallery");
        // const thumbnail = document.createElement('div');
        // thumbnail.className = "photo-thumbnail";
        // thumbnail.innerHTML = '<button><img src="photos/' + folder[i].name + ' alt=""></button>';
        // gallery.appendChild(thumbnail);
    }

    // // console.log("filling");
    // // var gallery = document.getElementById("gallery");
    // // const thumbnail = document.createElement('div');
    // // thumbnail.className = "photo-thumbnail";
    // // thumbnail.innerHTML = '<button><img src="img/Elin.jpg" alt=""></button>';
    // // gallery.appendChild(thumbnail);
}

var name = document.getElementById("name");
var mail = document.getElementById("mail");
var message = document.getElementById("message");

function openMenu() {
    var menu = document.getElementById("nav-menu");
    menu.style.width = "100%";
}

function closeMenu() {
    var menu = document.getElementById("nav-menu");
    menu.style.width = "0%";
}

function resetEmailForm(x) {
    var fields = [document.getElementById("name"), document.getElementById("mail"), document.getElementById("message")];

    fields[x].style.borderColor = "#555";
    
    for(i = 0; i<fields.length; i++) {
        if(i != x && fields[i].style.borderColor != "red") {
            fields[i].style.borderColor = "rgb(182, 182, 182)";
        }
    }
    console.log("Resetted");
}

function validateEmail() {
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var message = document.getElementById("message");
    var valid = true;

    if(name.value.length < 2) {
        console.log("too short");
        name.style.borderColor = "red"
        event.preventDefault();
        valid = false;
    }
    if(mail.value.includes("@") && mail.value.includes(".") && mail.value.length > 5) {
        console.log("valid mail")
    } else {
        console.log("invalid mail")
        mail.style.borderColor = "red"
        event.preventDefault();
        valid = false;
    }
    if (message.value.length <= 10) {
        console.log("too short");
        message.style.borderColor = "red"
        event.preventDefault();
        valid = false;
    }
    if(valid) {
        document.getElementById('email-form').submit();
        return true
    }
    return false;
}

// $(document).ready(function() {
//     $('.submit_button').click(function(event) {
//         var name = document.getElementById("name").value;
//         var mail = document.getElementById("mail").value;
//         var message = document.getElementById("message").value;
    
//         if(name.length < 2) {
//             console.log("too short");
//             event.preventDefault();
//         }
//         if(mail.includes("@") && mail.includes(".") && mail.length > 5) {
//             console.log("valid mail")
//         } else {
//             console.log("invalid mail")
//             event.preventDefault();
//         }
//         if (message.length <= 10) {
//             console.log("too short");
//             event.preventDefault();
//     })
// })

// Email.send({
//     SecureToken : "bae6badd-32c6-49c9-b1b4-9d33da6ea23d",
//     To : 'niklas.adam.andersson@gmail.com',
//     From : "nojjjen@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert("Message sent")
// );