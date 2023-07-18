const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const app = (() => {
    const cars = ['BMW' , 'Mes' , "Kia"];

    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')
    return {
        add(car){
            cars.push(car)
        },

        delete(index){
            cars.splice(index,1)
        },

        render(){
            const html = cars.map((car , index) => {
                return `
                    <li>
                        ${car}
                        <span data-index="${index}" class="delete">&times</span>
                    </li>
                `
            }).join('')

            root.innerHTML = html;
        },

        handleDelete(e){
            const deleteBtn = e.target.closest('.delete');
            
            if(deleteBtn){
                const index = e.target.dataset.index;
                this.delete(index)
                this.render()
            }
        },

        init(){
            // Handle DOM events
            submit.onclick = () => {
                const car = input.value;
                this.add(car);
                this.render();

                input.value = '';
                input.focus();
            }

            root.onclick = this.handleDelete.bind(this)


            // arrow function k có context nên this là app
            // nếu k phải arrow function thì this là submit


            this.render()
        }
    }
})()

console.log(app);
app.init()


