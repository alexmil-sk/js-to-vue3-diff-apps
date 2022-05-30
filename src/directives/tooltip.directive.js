
const tooltipDirective = {
    mounted(el) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
       tooltipTriggerList.map(elem => el.Tooltip(elem))
    }
}

export default tooltipDirective;
