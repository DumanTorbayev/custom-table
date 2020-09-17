window.addEventListener('DOMContentLoaded', ready);

function ready() {
    (function blockCollapsed() {
        let collapsedBtn = document.querySelectorAll('.region-name');
        let collapsedBlock = document.querySelectorAll('.collapsed-block');

        [].forEach.call(collapsedBtn, function (item, i) {
            item.addEventListener('click', function () {
                this.classList.toggle('active');
                let content = this.nextElementSibling;
                if(content.classList.contains('d-block')) {
                    content.classList.remove('d-block');
                    collapsedBlock[i].classList.remove('d-block');
                } else  {
                    content.classList.add('d-block');
                    collapsedBlock[i].classList.add('d-block');
                }
            });
        });
    }())
}