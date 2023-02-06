import { ref, computed, reactive } from "vue";

export function useTargetIndex(initValue) {
    const targetIndex = ref(initValue)

    const setTargetIndex = (newValue) => {
        targetIndex.value = newValue
    }

    return [targetIndex, setTargetIndex]
}

export function useCheckedData() {
    const checkedData = reactive({
        left: [],
        right: []
    })

    const addCheckedData = (leftOrRight, item) => {
        switch (leftOrRight) {
            case 'left':
                checkedData.left.push(item)
                break;
            case 'right':
                checkedData.right.push(item)
                break;
        }
    }

    const removeCheckedData = (leftOrRight, id) => {
        switch (leftOrRight) {
            case 'left':
                checkedData.left = checkedData.left.filter(item => item.id !== id)
                break;
            case 'right':
                checkedData.right = checkedData.right.filter(item => item.id !== id)
                break;
        }
    }

    return [checkedData, addCheckedData, removeCheckedData]
}


export function useRightListData(initalData, checkedData) {
    const rightListData = ref(initalData)
    function addRightListData(newData) {
        rightListData.value = [
            ...rightListData.value,
            ...newData
        ]
        checkedData.left = []
    }


    function removeRightListData(newData) {
        console.log(newData)
        newData.forEach(newitem => {
            rightListData.value = rightListData.value.filter(item => item.id !== newitem.id)
        })

        checkedData.right = []

    }

    return [
        rightListData,
        addRightListData,
        removeRightListData
    ]
}

export function useSetDragedItem(){
    const dragedItem = ref(null)

    const setDragedItem =(item) =>{
        dragedItem.value = item
    }

    return [dragedItem,setDragedItem]
}

export function useComputedData(data, targetIndex, rightListData, checkedData) {
    const leftTitle = computed(() => data[targetIndex.value].title)

    const leftListData = computed(() => {

        return data[targetIndex.value].data.filter(item => {
            if (!rightListData.value.find(data1 => data1.id === item.id)) {
                return item
            }
        });
    })


    const transferButtonDisabled = computed(() => {
        return {
            left: checkedData.right.length === 0,
            right: checkedData.left.length === 0
        }
    })
    return {
        leftTitle,
        leftListData,
        transferButtonDisabled
    }
}