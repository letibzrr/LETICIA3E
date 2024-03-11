function descryptId(id){
    return parseInt(id, 36)
}
async function loadCharacter(baseUrl, id){
    try {
        const response = await fetch(`${baseUrl}/${id}`);
        if(!response.ok){
            throw new Error('Erro ao carregar o personagem');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
async function load(){
    const urlParms = new URLSearchParams(window.location.search)
    const idParam = urlParms.get('id')

    if(!idParam){
        console.error('ID não encontrado na URL')
        return
    }

    const idDescryted = descryptId(idParam)
    const urlBase = `https://rickandmortyapi.com/api/character`;

    try {
        const character= await loadCharacter(urlBase, idDescryted)
        console.log('Character:', character)
    } catch (error) {
        console.error('Erro ao carregar personagem')
    }
}
load()

