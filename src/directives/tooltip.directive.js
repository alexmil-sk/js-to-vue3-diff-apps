
const tooltipDirective = {
    mounted(el, {value}) {
        const exampleEl = document.getElementsByTagName('data-bs-toggle')
        new bootstrap.Tooltip(el, {html: value})
        console.log('exampleEl', exampleEl)

    }

}




    //M.Tooltip.init(el, {html: value})

   //_ унитожение директивы tooltip после ухода со страницы
  //beforeUnmount(el) {
  //  const tooltip = M.Tooltip.getInstance(el);
//
  //  if(tooltip && tooltip.beforeUnmount()) {
  //    tooltip.beforeUnmount();
  //  }
  //}



 export default tooltipDirective;
