const input = document.getElementById('upload')
const filewrapper = document.getElementById('filewrapper')

input.addEventListener('change', (e) => {
    let fileName = e.target.files[0].name;
    let fileType = e.target.value.split('.').pop();
    let filebox = document.createElement('div');
    filebox.classList.add('showfilebox')
    filebox.innerHTML += `
                     <div class="left">
                        <span class="filetype">${fileType}</span>
                        <span class="filename">${fileName}</span>
                    </div>`
    let rightEle = document.createElement('div')
    rightEle.classList.add('right')
    rightEle.innerHTML ='<span>&#215;</span>'
    filebox.append(rightEle)
    filewrapper.append(filebox);

    rightEle.addEventListener('click', ()=>{
        filewrapper.removeChild(filebox);
    })
})