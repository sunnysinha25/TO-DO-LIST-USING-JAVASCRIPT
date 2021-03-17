
let input = prompt("WHAT WOULD YOU LIKE TO DO?");
const todos = ['COLLECT CHICKEN EGGS','CLEAN LITTER BOX'];

while(input !== 'quit'  &&  input !== 'q')
{
    if(input === 'list')
    {
        console.log('**********');
        for(let i=0; i< todos.length; i++)
        {
            console.log(`${i}: ${todos[i]}`);
        }

        console.log('**********');
    }

    else if(input === 'new')
    {
        const newTodo = prompt("OK, WHAT IS THE NEW TO-DO?");
        todos.push(newTodo);
        console.log(`${newTodo} IS ADDED TO THE LIST!!!`);
    }

    else if(input === 'delete')
    {
        const index = parseInt(prompt('OK, ENTER AN INDEX TO DELETE: '));
        if(!Number.isNaN(index))
        {
            const deleted = todos.splice(index,1);
            console.log(`OK, DELETED ${deleted[0]}`);
        }
        else
        {
            console.log(`UNKNOWN INDEX!`);
        }
    }

    input = prompt("WHAT WOULD YOU LIKE TO DO?");

}
console.log("OK!YOU QUIT THE APP!!!");