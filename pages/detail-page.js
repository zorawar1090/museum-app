function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value.toString().charAt(0).toUpperCase() + inputField.value.toString().slice(1);
    console.log(name)

    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)

    if (doesNotPassAllValidations(name, msg)) {
        return null
    }
    else {
        const comment = document.createElement('section')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const warning = document.createElement('p')

        h3.innerHTML = `${name} said:`
        p.innerHTML = msg
        warning.innerHTML = "Warning: Your comment is offensive"
        comment.classList.add('comment')
        comment.appendChild(h3)
        comment.appendChild(p)

        if (messageOffensive(msg)) {
            comment.appendChild(warning)
        }

        const commentSection = document.getElementById('comments')
        commentSection.appendChild(comment)

        inputField.value = null
        textArea.value = null
    }
}

function doesNotPassAllValidations(name, msg) {
    if (!name && !msg) {
        alert('You forgot to fill in your name and message!')
        return true
    }

    if (!name) {
        alert('You forgot to fill in your name!')
        return true
    }

    if (!msg) {
        alert('You forgot to fill in your message!')
        return true
    }

    if (msg.length > 280) {
        alert("Your comment is too long!")
        return true
    }

    return false
}

function messageOffensive(msg) {
    if (msg.includes("idiot")) {
        return true
    }
}
