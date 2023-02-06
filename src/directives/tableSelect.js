let isMouseOver = false
const vTableSelect = {
    mounted(el, bindings) {
        vTableSelect.el = el
        bindEvent(el, bindings.value)

    },

}

function bindEvent(el, state) {
    //  const { el } = vTableSelect
    el.addEventListener('click', handleTDClickEvent.bind(el, state), false)
    window.addEventListener('click', handleWindowClickEvent.bind(el, state), false)
    el.addEventListener('dblclick', handleDoubleClickEvent.bind(el, state), false)
    el.addEventListener('mousedown', handleMouseDownTDEvent.bind(el, state), false)
}

function handleTDClickEvent(...args) {
    if (!isMouseOver) {
        const [state, e] = args
        e.stopPropagation();
        const { target } = e
        resetSelectedData(state)
        if (target.tagName === 'TD') {
            const { row, col } = getRowAndCol(target)
            const selectedObj = getObjByRowAndCol(state, row, col)
            if (state.selectedData !== selectedObj) {
                state.selectedData = selectedObj
                state.selectedData.selected = true;
            }
        }
    }
}
function handleDoubleClickEvent(...args) { 
    const [state, e] = args
    e.stopPropagation();
    const { target } = e
    resetSelectedData(state)
    if (target.tagName === 'TD') {
        const { row, col } = getRowAndCol(target)
        const selectedObj = getObjByRowAndCol(state, row, col)
        
      this.oInput = createInput(target,selectedObj)
        
    }
}

function handleWindowClickEvent(state) {
    this.oInput && (state.selectedData.content = this.oInput.value)
    !isMouseOver && resetSelectedData(state)
}

function handleMouseDownTDEvent(...[state, e]) {
    const { target } = e
    e.stopPropagation();
    isMouseOver = false
    resetSelectedData(state)
    if (target.tagName === 'TD') {
        const { row, col } = getRowAndCol(target)
        this.startRow = row
        this.startCol = col
    }
    const _handleMouseOverEvent = handleMouseOverEvent.bind(this, state)
    document.addEventListener('mouseover', _handleMouseOverEvent, false)
    document.addEventListener('mouseup', handleMouseUpEvent.bind(this), false)
    function handleMouseUpEvent(e) {
        e.stopPropagation();
        document.removeEventListener('mouseup', handleMouseUpEvent, false)
        document.removeEventListener('mouseover', _handleMouseOverEvent, false)
        setTimeout(() => {
            isMouseOver = false
        }, 0);

    }
}

function handleMouseOverEvent(...[state, e]) {
    const { target } = e
    e.stopPropagation();
    isMouseOver = true

    const { row, col } = getRowAndCol(target)
    this.endRow = row
    this.endCol = col

    state.selectedAreaData = getSelectedAreaData(state, this.startRow, this.startCol, this.endRow, this.endCol)

}
//#region  // utils工具
function getRowAndCol(target) {
    return {
        row: Number(target.dataset.row),
        col: Number(target.dataset.col)
    }
}

function getObjByRowAndCol(data, row, col) {
    let target = null
    data.tableData.forEach((rowData, rowIndex) => {
        if (rowIndex === row) {
            rowData.data.forEach((colData, colIndex) => {
                if (colIndex === col) {
                    target = colData
                }
            })
        }
    });

    return target
}


function resetSelectedData(state) {
    const {el} = vTableSelect
    if (state.selectedData) {
        state.selectedData.selected = false
    }
    if (state.selectedAreaData.length) {
        state.selectedAreaData.forEach(data => {
            data.selected = false
        })
        state.selectedAreaData = []
    }
    if(el.oInput){
        el.oInput.remove()
        el.oInput = null
    }
}

function getSelectedAreaData({ tableData }, startRow, startCol, endRow, endCol) {
    const selectAreaData = []

    if (startRow <= endRow) {
        for (let i = startRow; i <= endRow; i++) {
            setAreaData(tableData[i].data, startCol, endCol)
        }
    } else {
        for (let i = startRow; i >= endRow; i--) {
            setAreaData(tableData[i].data, startCol, endCol)

        }
    }

    function setAreaData(rowData, startCol, endCol) {
        if (startCol <= endCol) {
            for (let j = startCol; j <= endCol; j++) {
                rowData[j].selected = true;
                selectAreaData.push(rowData[j])
            }
        } else {
            for (let j = startCol; j >= endCol; j--) {
                rowData[j].selected = true;
                selectAreaData.push(rowData[j])
            }
        }
    }

    return selectAreaData

}


function createInput(target,selectedObj){
    const oInput = document.createElement('input')
    oInput.type = 'text'
    oInput.value = selectedObj.content
    oInput.style.cssText = `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    box-sizing: border-box;
    text-align:center;
    `
    oInput.onfocus = oInput.select;
    target.appendChild(oInput)
    oInput.focus()

    return oInput
}
//#endregion

export default vTableSelect