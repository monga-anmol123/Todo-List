let ulTasks = $('#listTask')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnReset')
let inpNewTask = $('#inpNewTask');
let btnCleanup = $('#btnCleanUp')
let btnSort = $('#btnSort')

btnAdd.click(() => {
    addItem();
    toggleLowerButtons();
})
function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    ulTasks.append(listItem);
    inpNewTask.val('');
    listItem.click(() => {
        listItem.toggleClass('done');
    })
    toggleInpuButton(false)
    toggleLowerButtons()
}
inpNewTask.keypress((e) => {
    if (e.keyCode == 13)
        addItem();
        toggleLowerButtons();
        toggleInpuButton(false);
})

btnClear.click(() => {
    inpNewTask.val('')
    toggleInpuButton(false)
})

btnCleanup.click(() => {

    let p = $('#listTask').children()

    // for (let i = 0; i < p.size(); i++) 
    //     {   console.log(i);
    //         let m=i.toString()
    //         let w=p[m].className
    //         if(w.search('done') != -1)
    //             { $('li').remove}
    //     }
    $('#listTask .done').remove()

    toggleLowerButtons();
})

function toggleInpuButton(p) {
    if (p == true) {
        btnClear.prop('disabled', false);
    }
    else btnClear.prop('disabled', true)

    if (p == true) {
        btnAdd.prop('disabled', false);
    }
    else btnAdd.prop('disabled', true)
}

function toggleLowerButtons() {
    console.log($('#listTask').children().length)
       if ($('#listTask').children().length > 0) {

        btnSort.prop('disabled',false);
        btnCleanup.prop('disabled', false);

    }
    else {

        btnSort.prop('disabled', true)
        btnCleanup.prop('disabled', true)
    }
}
btnSort.click(() => {
    $('#listTask .done').appendTo(listTask)
    toggleLowerButtons()
})

inpNewTask.on('input', () => {
    console.log((inpNewTask.val() != ""))
    toggleInpuButton((inpNewTask.val() != ""))
    toggleLowerButtons()

})
