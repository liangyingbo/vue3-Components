export default{
    mounted(el,binding){
    //    console.log(el,binding.value)
    const btn  = el.querySelector('.btn')

    const {cellData,weekday,time_slot} = binding.value

  btn.addEventListener('click',handleClickPanel)
  function handleClickPanel(){
    delete cellData[`${weekday}-${time_slot}`]
  }
    }
}