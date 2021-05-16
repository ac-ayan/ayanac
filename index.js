document.querySelector('body').addEventListener('contextmenu',(e) => {
    e.preventDefault();
});

window.addEventListener('load',()=>{
 let progressBars=document.querySelectorAll('.progress-bar');
 let values = [
     '90%',
     '70%',
     '50%',
     '70%',
     '81%',
     '85%',
     '75%',
     '50%'
 ];
 progressBars.forEach((progress,index)=>{
     progress.style.width = values[index];
 });
});

var checkbox = document.querySelector('input[name=theme]');

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 10000)
        }