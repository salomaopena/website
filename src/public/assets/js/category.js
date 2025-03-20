
// Função para converter texto para slug
function convertToSlug(Text) {
    return Text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}


// Capturar evento de submissão do formulário e chamar a função de criação de slug
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const slug = convertToSlug(document.querySelector('#name').value);
    if (!name) {
        alert('Por favor, preencha o nome da categoria!');
        return;
    }

    fetch('/category/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, slug })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Categoria inserida com sucesso!');
            document.querySelector('form').reload();

        })
        .catch(error => {
            console.error(error);
            alert('Erro ao inserir a categoria!' + error);
        });
});



