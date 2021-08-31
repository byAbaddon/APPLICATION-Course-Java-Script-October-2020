(function attachEvents() {
    const textArea = document.getElementById('messages')
    const [author, content] =  document.querySelectorAll('input')
    const [sendBtn, refreshBtn] = document.querySelectorAll('input[type = button]')
    
    
    sendBtn.addEventListener('click', function (e) {
        if (author.value && content.value) {
            fetch('https://appbase-621f2-default-rtdb.firebaseio.com/messenger.json',
                {
                    method: 'POST',
                    body: JSON.stringify({ author: author.value, content: content.value })
                }).catch((er) => er.error)
            author.value = content.value = ''
        }
    })

    refreshBtn.addEventListener('click', function (e) {
        textArea.value = ''
        fetch('https://appbase-621f2-default-rtdb.firebaseio.com/messenger.json')
            .then((res) => res.json())
            .then((data) =>
                Object.values(data).forEach(el => {
                   textArea.value += `${el.author} : ${el.content}\n`
                  })
        )
    })

})()

